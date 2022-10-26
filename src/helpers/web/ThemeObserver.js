import { Theme, Property } from 'olympe';
import { Observable, of } from "rxjs";
import { switchMap, map, shareReplay } from "rxjs/operators";
import { Application } from "../common/tags";

export const THEMEKEY = '$__THEME__';

/**
 * @typedef { Theme } ObservedTheme - Link to the cloud object that emitted the property change
 * @typedef { Property } ObservedProperty - Link to the property on the object which has changed
 * @typedef { * } ObservedValue - The new value
 * @typedef { number } ObserverVersion - Unique reference, helping to differentiate different versions of this observable
 * @typedef {[ObservedTheme | null, ObservedProperty, ObservedValue]} ObservedPropertyTuple
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
            return of([theme, undefined, undefined, undefined]);
        }
        const applicationContext = $.getClosest({modelTag: Application});
        return multicastThemeProperties(applicationContext, theme);
    }));
}

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
