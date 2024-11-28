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

import { createTheme, Theme as MUITheme, Palette } from "@mui/material/styles";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Theme, Color as ColorAPI, BrickContext, Property } from 'olympe';
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
export function jsonToSxProps(json: string): Object {
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
export function cssToSxProps(css: string): Object {
    const capitalize = (s: string): string => s.length > 0 ? s[0].toUpperCase() + s.substr(1).toLowerCase() : s;
    const props: {[key: string]: any} = {};
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
 * @param {ColorAPI=} color
 * @returns {!Object}
 */
export function ifNotTransparent(key: string, value: any, color?: ColorAPI): Object {
    const valueHex = value && value.toHexString ? value.toHexString() : '#00000000';
    const colorHex = color?.toHexString() ?? valueHex;
    return colorHex !== '#00000000' ? {[key]: color ? value : colorHex} : {};
}

/**
 * Get the value only if it's not null (zero, '', etc)
 * @param {string} key
 * @param {*} value
 * @param {boolean=} condition
 * @returns {!Object}
 */
export function ifNotNull(key: string, value: any, condition?: boolean): Object {
    const cond = condition !== undefined ? condition : value;
    return cond !== null && cond !== undefined && cond ? {[key]:value} : {};
}

/**
 * Cache the computed MUI themes to avoid computing them for each component.
 * Each MUITheme is stored in the cache alongside a number that represent its
 * "version".
 * @type {Map<string, [number, MUITheme]>}
 */
const cachedMuiThemes: Map<string, [number, MUITheme]> = new Map();

/**
 * Create once an empty theme that can be returned whenever we don't have a theme in context
 * @type {MUITheme}
 */
export const emptyTheme: MUITheme = createTheme({});

/**
 * Returns an observer (which returns the MUI Theme), on the given context
 * @param {BrickContext} $
 * @return {Observable<MUITheme>}
 *
 */
export const observeMUITheme = ($: BrickContext): Observable<MUITheme> => {
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
export const getMuiTheme = (theme: Theme): MUITheme => {
    const logger = getLogger('MUI Theme');
    if (theme instanceof Theme) {
        /**
         * @param {string} prop
         * @return {{main: string | undefined}}
         */
        const getPaletteColorDefinition = (prop: Property<ColorAPI>): Object | undefined => {
            const color: ColorAPI | null = theme.get(prop);
            return color ? {main: color.toHexString()} : undefined;
        };

        const colorValues: {[key: string]: Object} = {
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
        const palette: Partial<Palette> = Object.keys(colorValues).reduce((p, key) => {
            if (colorValues[key]) {
                (p as {[key: string]: any})[key] = colorValues[key] as unknown as Color;
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
export function useMUITheme($: BrickContext): MUITheme {
    const [value, setValue] = useState(emptyTheme);
    useEffect(() => {
        const subscription = observeMUITheme($).subscribe(setValue);
        return () => {
            subscription.unsubscribe();
        };
    }, []);
    return value;
}


/**
 * Check if color exists in the palette
 *
 * @param {MUITheme} theme
 * @param {string} color
 * @param { string } loggerName
 * @return {Boolean}
 */
export function colorExists(theme: MUITheme, color: string, loggerName: string): boolean {
    const logger = getLogger(loggerName);

    if (color !== undefined) {
        if (typeof color !== 'string') {
            logger.error(`Invalid color provided. Must be a string.`);
            return false;
        }

        const colorValues = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
        if (colorValues.some((item) => item === color) && theme.palette.hasOwnProperty(color)) {
            return true;
        } else {
            logger.error(`Color "${color}" was not found in palette. Must be one of ${colorValues.join(', ')}.`);
            return false;
        }
    } else {
        return false;
    }
}


/**
 * @param { ColorAPI } color
 * @param { string } loggerName
 * @return { string | undefined }
 */
export const getColorDefinition = (color: ColorAPI, loggerName: string): string | undefined => {
    const logger = getLogger(loggerName);

    if (color !== undefined) {
        if (color instanceof ColorAPI) {
            return color.toHexString();
        } else {
            logger.error(`Invalid color provided. Must be of type Color: ${color}`);
            return;
        }
    }
    return;
};

/**
 * @param {string=} icon
 * @param {string} loggerName
 * @return {string}
 */
export const validateIcon = (icon: string, loggerName: string, initialIcon = 'help_outline'): string => {
    const logger = getLogger(loggerName);

    if (icon !== undefined) {
        if (typeof icon !== 'string') {
            logger.error(`Invalid icon provided. Must be of type string: ${icon}`);
            return initialIcon; // default value
        } else {
            return icon;
        }
    }
    return initialIcon; // default value
};

/**
 * @param {string} text
 * @param {string} property
 * @param {string} loggerName
 * @return {string|undefined}
 */
export const validateString = (text: string,  property: string, loggerName: string): string | undefined => {
    const logger = getLogger(loggerName);
    if (text !== undefined && text !== null) {
        if(typeof text === 'object') {
            logger.warn(
                `Invalid type was provided to property ${property}. The expected type is String.`
            );
            return;
        }
        return String(text);
    }
};

/**
 * @param {string} variant
 * @param {string} property
 * @param {string} loggerName
 * @param {Array<string>} variants
 * @return {string}
 */
export const validateVariant = (variant: string, property: string, loggerName: string, variants: string[]): string => {
    const logger = getLogger(loggerName);

    const validatedVariant = validateString(variant, property, loggerName);
    if (variant) {
        if (validatedVariant && variants.includes(validatedVariant)) {
            return validatedVariant;
        } else {
            logger.warn(
                `Invalid ${property} provided: ${variant}. Must be one of ${variants.join(', ')}.`
            );
            return variants[0];
        }
    }
};

/**
 * @param {number} value
 * @param {string} property
 * @param {string} loggerName
 * @param {?number} initialValue
 * @return {number}
 */
export const validateNumber = (value: number, property: string, loggerName: string, initialValue = 0): number => {
    const logger = getLogger(loggerName);
    if (value !== undefined && value !== null) {
        if (typeof value === 'number' && !isNaN(value)) {
            return value;
        } else {
            logger.error(`Invalid ${property} provided. Must be a number.`);
            return initialValue;
        }
    }
};
