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

/**
 * Transform a JSON string into an object usable for the MUI `sx` prop.
 * Returns an empty object if the JSON is invalid.
 * @param {string} json
 * @return {!Object}
 */
export function jsonToSxProps(json) {
    let props = {};
    try {
        props = JSON.parse(json);
    } catch (e) {
        // Ignore error
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
    if (css) {
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
    const cond = condition !== undefined ? condition : value
    return cond !== null && cond !== undefined ? {[key]:value} : {};
}
