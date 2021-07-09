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

import {DatetimePrimitive, DBView, instanceToTag, NumberPrimitive, PropertyPrimitive, StringPrimitive, valuedefs} from "olympe";

/**
 * @param {PropertyDescriptor} property
 * @return {?ValueDef}
 */
export const getValueDefFor = (property) => {
    const propertyTypeTag = DBView.get().getUniqueRelated(/** @type {!HasInstanceTag} */ (property), PropertyPrimitive.typeRel);  // Property type cannot be edited in Draw

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
    return null;
};
