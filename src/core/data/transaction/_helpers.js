/**
 * Created by Sym on 28.10.2021
 */

import {DBView, CloudObject, StringModel, NumberModel, BooleanModel, DatetimeModel, ColorModel} from 'olympe';

const primitiveTypes = [
    StringModel,
    NumberModel,
    BooleanModel,
    DatetimeModel,
    ColorModel
];

/**
 * Cast the value to is internal value if it is an instance of a primitive model.
 *
 * @param {*} value
 * @return {*}
 */
export const castPrimitiveValue = (value) => {
    if (!(value instanceof CloudObject)) {
        return value;
    }
    const primitiveType = primitiveTypes.find((p) => value instanceof p);
    return primitiveType ? DBView.get().getProperty(value, primitiveType.valueProp, true) : value;
}
