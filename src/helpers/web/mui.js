/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {createTheme, Theme as MUITheme, Palette} from "@mui/material/styles";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Theme } from 'olympe';
import { themePropertiesObserver } from "helpers/ThemeObserver";
import { getLogger } from 'logging';
import { Color } from "@mui/material";
import { useEffect, useState } from "react";

/**
 * Transform a JSON string into an object usable for the MUI `sx` prop.
 * Returns an empty object if the JSON is invalid.
 * @param {string} json
 * @return {!Object}
 */
export function jsonToSxProps(json) {
    let props = {};
    if (typeof json === 'string') {
        try {
            props = JSON.parse(json);
        } catch (e) {
            // Ignore error
        }
    }
    return props;
}

/**
 * Transform a CSS string into an object usable for the MUI `sx` prop.
 * Expect a string of the form `prop1: val1; prop2: val2; ...`
 * Returns an empty object if the CSS is invalid.
 * @param {string} css
 * @return {!Object}
 */
export function cssToSxProps(css) {
    const capitalize = s => s.length > 0 ? s[0].toUpperCase() + s.substr(1).toLowerCase() : s;
    const props = {};
    if (typeof css === 'string' && css.includes(':')) {
        css.split(';')
            .filter(e => e)
            .map(e => e.split(':'))
            .filter(([key, val]) => key && val)
            .forEach(([key, val]) => {
                const camelCaseKey = key.trim()
                    .split('-')
                    .reduce((acc, cur, i) => acc + (i > 0 ? capitalize(cur) : cur.toLowerCase()), '');
                props[camelCaseKey] = val.trim();
            });
    }
    return props;
}

/**
 * Get a value only if the color is not transparent
 * @param {string} key
 * @param {*} value
 * @param {Color=} color
 * @returns {!Object}
 */
export function ifNotTransparent(key, value, color) {
    const valueHex = value && value.toHexString ? value.toHexString() : '#00000000';
    const colorHex = color ? color.toHexString() : valueHex;
    return colorHex !== '#00000000' ? {[key]:color?value:colorHex} : {};
}

/**
 * Get the value only if it's not null (zero, '', etc)
 * @param {string} key
 * @param {*} value
 * @param {boolean=} condition
 * @returns {!Object}
 */
export function ifNotNull(key, value, condition) {
    const cond = condition !== undefined ? condition : value;
    return cond !== null && cond !== undefined && cond ? {[key]:value} : {};
}

/**
 * Cache the computed MUI themes to avoid computing them for each component.
 * Each MUITheme is stored in the cache alongside a number that represent its
 * "version".
 * @type {Map<string, [number, MUITheme]>}
 */
const cachedMuiThemes = new Map();

/**
 * Create once an empty theme that can be returned whenever we don't have a theme in context
 * @type {MUITheme}
 */
export const emptyTheme = createTheme({});

/**
 * Returns an observer (which returns the MUI Theme), on the given context
 * @param {BrickContext} $
 * @return {Observable<MUITheme>}
 *
 */
export const observeMUITheme = ($) => {
    return themePropertiesObserver($).pipe(map(([theme, property, value, versionNumber]) => {
        if (!theme) {
            return emptyTheme;
        }
        const themeTag = theme.getTag();
        const [cachedVersionNumber, cachedValue] = cachedMuiThemes.get(themeTag) || [null, null];
        if (cachedVersionNumber === versionNumber) {
            return cachedValue;
        }
        const muiTheme = getMuiTheme(theme);
        cachedMuiThemes.set(themeTag, [versionNumber, muiTheme]);
        return muiTheme;
    }));
};

/**
 * Transforms a Theme CloudObject in a MUI Theme object
 * @param { Theme } theme
 * @return { MUITheme }
 */
const getMuiTheme = (theme) => {
    const logger = getLogger('MUI Theme');
    if (theme instanceof Theme) {
        /**
         * @param {string} prop
         * @return {{main: string | undefined}}
         */
        const getPaletteColorDefinition = (prop) => {
            const color = theme.get(prop);
            return color ? {main: theme.get(prop)?.toHexString()} : undefined;
        };

        const colorValues = {
            primary: getPaletteColorDefinition(Theme.primaryColorProp),
            secondary: getPaletteColorDefinition(Theme.secondaryColorProp),
            error: getPaletteColorDefinition(Theme.errorColorProp),
            warning: getPaletteColorDefinition(Theme.warningColorProp),
            info: getPaletteColorDefinition(Theme.infoColorProp),
            success: getPaletteColorDefinition(Theme.successColorProp),
        };

        /**
         * @type {Partial<Palette>}
         */
        const palette = Object.keys(colorValues).reduce((p, key) => {
            if (colorValues[key]) {
                p[key] = colorValues[key];
            }
            return p;
        }, {});

        const fontFamily = theme.get(Theme.fontFamilyProp);
        const typography = fontFamily ? {fontFamily: fontFamily} : {};

        return createTheme({palette, typography});
    } else {
        logger.warn(`Invalid theme used in getMuiTheme(): ${theme}`);
        return emptyTheme;
    }
}

/**
 * Allows to bind a theme to a stateful react value.
 *
 * @param {!BrickContext} $
 * @return {MUITheme} a stateful value usable in JSX
 */
export function useMUITheme($) {
    const [value, setValue] = useState(emptyTheme);
    useEffect(() => {
        const subscription = observeMUITheme($).subscribe(setValue);
        return () => {
            subscription.unsubscribe();
        };
    }, []);
    return value;
}
