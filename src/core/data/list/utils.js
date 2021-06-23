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
