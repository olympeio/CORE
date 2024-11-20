import {Theme, Property, GlobalProperties, Query, Relation, Direction, Predicate, CloudObject} from 'olympe';
import { Observable, of } from "rxjs";
import { switchMap, map, shareReplay } from "rxjs/operators";
import { Application } from "../common/tags";

export const THEMEKEY = '$__THEME__';

/**
 * @typedef { Theme } ObservedTheme - Link to the cloud object that emitted the property change
 * @typedef { Property } ObservedProperty - Link to the property on the object which has changed
 * @typedef { * } ObservedValue - The new value
 * @typedef { number } ObserverVersion - Unique reference, helping to differentiate different versions of this observable
 * @typedef {[ObservedTheme | null, ObservedProperty, ObservedValue, ObserverVersion]} ObservedPropertyTuple
 */

/**
 *
 * @type {Map<string, Observable<ObservedPropertyTuple>>}
 */
const themePropertiesObservers = new Map();

let versionCounter = 0;

/**
 *
 * @param {BrickContext} $
 * @return {Observable<ObservedPropertyTuple>}
 */
export const themePropertiesObserver = ($) => {
    return $.observe(THEMEKEY, false, true).pipe(switchMap((theme) => {
        if (!theme) {
            let returnedTheme = null;
            // When in DRAW, try to get the best theme available for this context
            if ($.get(GlobalProperties.EDITION, true)) {
                const hash = new URL(window.location).hash;
                const match = hash.match(/item=([0-9a-z]{20})/);
                if (match[1]) {
                    returnedTheme = getThemeFromItem(match[1]);
                }
            }
            
            return of([returnedTheme, undefined, undefined, undefined]);
        }
        const applicationContext = $.getClosest({modelTag: Application});
        return multicastThemeProperties(applicationContext, theme);
    }));
}

const getThemeFromItem = (tag) => {
    const primordialRel = new Relation('ff02200000000000002a', Direction.DESTINATION);
    const importRel = new Relation('ff02200000000000002b', Direction.DESTINATION);
    const projectModelTag = '0163d9594700fcf61e54';
    if (!defaultThemesByTag.has(tag)) {
        // Get the current opened project
        const currentProject = Query.from(tag)
            .followRecursively(CloudObject.containsRel.getInverse(), true).andReturn()
            .follow(CloudObject.modelRel).filter(Predicate.in(projectModelTag))
            .executeFromCache()
            .getFirst();

        // Get the list of all dependencies of the current project
        const validProjects = currentProject.query()
            .followRecursively(importRel).andReturn()
            .executeFromCache()
            .toArray();
        validProjects.unshift(currentProject); // Add the current project as the first element

        // Get the first theme available for the current project, or a dependency
        const themes = Query.instancesOf(Theme)
            .andReturn()
            .follow(primordialRel.getInverse()).andReturn()
            .filter(Predicate.in(...validProjects))
            .executeFromCache()
            .reduce((acc, [theme, project]) => {
                return acc.set(project.getTag(), theme); // Keep 1 theme per project
            }, new Map());

        const projectWithTheme = validProjects.find((project) => themes.has(project.getTag()));
        defaultThemesByTag.set(tag, themes.get(projectWithTheme.getTag() ?? null));
    }
    return defaultThemesByTag.get(tag);
}

const defaultThemesByTag = new Map();

/**
 * @param {BrickContext} rootContext
 * @param {Theme} theme
 * @return {Observable<ObservedPropertyTuple>}
 */
const multicastThemeProperties = (rootContext, theme) => {
    const themeTag = theme.getTag();
    if (themePropertiesObservers.has(themeTag)) {
        return themePropertiesObservers.get(themeTag);
    }
    const propertyObserver = theme.observeProperties(rootContext)
        .pipe(map(([property, value]) => {
            versionCounter++;
            return [theme, property, value, versionCounter];
        }))
        .pipe(shareReplay(1));
    themePropertiesObservers.set(themeTag, propertyObserver);
    return propertyObserver;
}
