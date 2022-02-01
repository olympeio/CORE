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

import {DatetimePrimitive, DBView, instanceToTag, NumberPrimitive, PropertyModel, StringPrimitive, BooleanPrimitive, Enum, valuedefs, Sync} from "olympe";
import {getLogger} from 'logging';

/**
 * Filter an array using a predicate
 *
 * @param {!Array<!Sync>} list
 * @param {function(!Sync):boolean} predicate
 * @return {!Array<!Sync>}
 */
export const filterArray = (list, predicate) => {
    const a = list;
    const b = a.filter((v) => v instanceof Sync);
    if (a.length !== b.length) {
        getLogger('Filter List ...').error(`${a.length - b.length} elements were not instances of a Data Type`);
    }
    return b.filter(predicate);
};

/**
 * Filter a list def
 *
 * @param {!ListDef} list
 * @param {!PropertyDescriptor} property
 * @param {string | number | Date} value
 * @param {function(!ValueDef, !Constant):!Predicate} predicate
 * @param {boolean=} [allowBoolean=false]
 * @return {*}
 */
export const filterListDef = (list, property, value, predicate, allowBoolean=false) => {
    const _property = getValueDefFor(property, allowBoolean);
    if (_property === null) {
        getLogger('Filter List ...').warn(`Type of property ${DBView.get().name(property)} is not supported. List will not be filtered.`);
        return list;
    } else {
        return list.filter(predicate(_property, new valuedefs.Constant(value)));
    }
};

/**
 * @param {PropertyDescriptor} property
 * @param {boolean=} [allowBoolean=false] if true the property may be a boolean, otherwise only string, number and datetime are allowed
 * @return {?ValueDef}
 */
export const getValueDefFor = (property, allowBoolean=false) => {
    const db = DBView.get();
    const propertyTypeTag = db.getUniqueRelated(/** @type {!HasInstanceTag} */ (property), PropertyModel.typeRel);  // Property type cannot be edited in Draw

    // String
    if (propertyTypeTag === instanceToTag(StringPrimitive)) {
        return new valuedefs.StringProperty(property);
    }
    // Number
    if (propertyTypeTag === instanceToTag(NumberPrimitive)) {
        return new valuedefs.NumberProperty(property);
    }
    // DateTime
    if (propertyTypeTag === instanceToTag(DatetimePrimitive)) {
        return new valuedefs.DateTimeProperty(property);
    }
    // Boolean
    if (allowBoolean === true && propertyTypeTag === instanceToTag(BooleanPrimitive)) {
        return new valuedefs.BooleanProperty(property);
    }
    // Enum: check if model of the property type is an Enum
    if (db.model(propertyTypeTag) === instanceToTag(Enum)) {
        return new valuedefs.StringProperty(property);
    }
    return null;
};
