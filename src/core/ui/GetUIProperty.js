
import { FunctionBrick, registerBrick, Context, PropertyPrimitive } from 'olympe';

/**
## Description
Retrieves the value of the specified property from the selected UI element. For example the text color of a label.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| UI Property | Property | The selected property. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | The value of the property. |

**/
export default class GetUIProperty extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} _
     * @param {PropertyPrimitive} uiProperty
     * @param {function(PropertyPrimitive)} setValue
     */
    onUpdate(_, [uiProperty], [setValue]) {
        setValue(uiProperty)
    }
}

registerBrick('0162de7dd5abdc9dec7f', GetUIProperty);
