import {DatetimePrimitive, DBView, instanceToTag, NumberPrimitive, PropertyPrimitive, StringPrimitive, valuedefs} from "olympe";

/**
 *
 * @param {PropertyDescriptor} property
 * @return {ValueDef}
 */
export default function getValueDefFor(property) {
    const propertyTypeTag = DBView.get().getUniqueRelated(/** @type {!HasInstanceTag} */ (property), PropertyPrimitive.typeRel);  // Property type cannot be edited in Draw

    let valueDef = null;

    // String
    if (propertyTypeTag === instanceToTag(StringPrimitive)) {
        valueDef = new valuedefs.StringProperty(property);
    }
    // Number
    else if (propertyTypeTag === instanceToTag(NumberPrimitive)) {
        valueDef = new valuedefs.NumberProperty(property);
    }
    // DateTime
    else if (propertyTypeTag === instanceToTag(DatetimePrimitive)) {
        valueDef = new valuedefs.DateTimeProperty(property);
    }
    return valueDef;
}
