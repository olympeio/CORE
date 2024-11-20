/**
 * Transform a JSON string into an object usable for the MUI `sx` prop.
 * Returns an empty object if the JSON is invalid.
 * @param {string} json
 * @return {!Object}
 */
export function jsonToSxProps(json: string): Object

/**
 * Transform a CSS string into an object usable for the MUI `sx` prop.
 * Expect a string of the form `prop1: val1; prop2: val2; ...`
 * Returns an empty object if the CSS is invalid.
 * @param {string} css
 * @return {!Object}
 */
export function cssToSxProps(css: string): Object

/**
 * Get a value only if the color is not transparent
 * @param {string} key
 * @param {*} value
 * @param {ColorAPI=} color
 * @returns {!Object}
 */
export function ifNotTransparent(key: string, value: any, color?: ColorAPI): Object

/**
 * Get the value only if it's not null (zero, '', etc)
 * @param {string} key
 * @param {*} value
 * @param {boolean=} condition
 * @returns {!Object}
 */
export function ifNotNull(key: string, value: any, condition?: boolean): Object

/**
 * Create once an empty theme that can be returned whenever we don't have a theme in context
 * @type {MUITheme}
 */
export const emptyTheme: MUITheme

/**
 * Returns an observer (which returns the MUI Theme), on the given context
 * @param {BrickContext} $
 * @return {Observable<MUITheme>}
 *
 */
export function observeMUITheme($: BrickContext): Observable<MUITheme>

/**
 * Transforms a Theme CloudObject in a MUI Theme object
 * @param { Theme } theme
 * @return { MUITheme }
 */
export function getMuiTheme(theme: Theme): MUITheme

/**
 * Allows to bind a theme to a stateful react value.
 *
 * @param {!BrickContext} $
 * @return {MUITheme} a stateful value usable in JSX
 */
export function useMUITheme($: BrickContext): MUITheme

/**
 * Check if color exists in the palette
 *
 * @param {MUITheme} theme
 * @param {string} color
 * @param { string } loggerName
 * @return {Boolean}
 */
export function colorExists(theme: MUITheme, color: string, loggerName: string): boolean

/**
 * @param { ColorAPI } color
 * @param { string } loggerName
 * @return { string | undefined }
 */
export function getColorDefinition(color: ColorAPI, loggerName: string): string | undefined

/**
 * @param {string=} icon
 * @param {string} loggerName
 * @return {string}
 */
export function validateIcon(icon: string, loggerName: string, initialIcon = 'help_outline'): string

/**
 * @param {string} text
 * @param {string} property
 * @param {string} loggerName
 * @return {string|undefined}
 */
export function validateString(text: string,  property: string, loggerName: string): string | undefined

/**
 * @param {string} variant
 * @param {string} property
 * @param {string} loggerName
 * @param {Array<string>} variants
 * @return {string}
 */
export function validateVariant(variant: string, property: string, loggerName: string, variants: string[]): string

/**
 * @param {number} value
 * @param {string} property
 * @param {string} loggerName
 * @param {?number} initialValue
 * @return {number}
 */
export function validateNumber(value: number, property: string, loggerName: string, initialValue = 0): number