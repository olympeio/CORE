/**
 * Created by Sym on 28.10.2021
 */

import {DBView, Sync, StringPrimitive, NumberPrimitive, BooleanPrimitive, DatetimePrimitive, ColorPrimitive} from 'olympe';

const primitiveTypes = [
    StringPrimitive,
    NumberPrimitive,
    BooleanPrimitive,
    DatetimePrimitive,
    ColorPrimitive
];

/**
 * Cast the value to is internal value if it is an instance of a primitive model.
 *
 * @param {*} value
 * @return {*}
 */
export const castPrimitiveValue = (value) => {
    if (!(value instanceof Sync)) {
        return value;
    }
    const primitiveType = primitiveTypes.find((p) => value instanceof p);
    return primitiveType ? DBView.get().getProperty(value, primitiveType.valueProp, true) : value;
}
