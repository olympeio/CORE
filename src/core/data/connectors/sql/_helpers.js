import { Color } from 'olympe';
import { DB_DIALECT_NAMES } from './_statics';

/**
 * @param {string | number | boolean | !Date | !Color} val
 * @param {string} dialect
 * @return {string | number | boolean | Object}
 */
export function serializeValue(val, dialect) {
    let serialValue = val;
    // non primitive types
    if (val instanceof Date) {
        serialValue = val.toJSON();
    } else if (val instanceof Color) {
        serialValue = `${val.getRed()};${val.getGreen()};${val.getBlue()};${val.getAlpha()}`;
    } else if (typeof val === 'boolean') {
        // sqlite, mssql (azure), mysql and oracle use (bit) number
        // only postgres accept boolean value as true, false
        // we support number values but not any string representation
        // implicit deserialization transform 0 to false, 1 to true
        if (dialect !== DB_DIALECT_NAMES.POSTGRES) {
            serialValue = Number(val);
        }
    }
    return serialValue;
}
