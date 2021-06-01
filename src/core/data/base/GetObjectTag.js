import { FunctionBrick, registerBrick, Context, instanceToTag } from 'olympe';

/**
## Description
Get the tag of an object.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The object. |
| Name | Type | Description |
| --- | :---: | --- |
| value | string | The object tag. |
**/
export default class GetObjectTag extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTa} object
     * @param {function(string)} setValue
     */
    onUpdate(context, [object], [setValue]) {
        setValue(instanceToTag(object));
    }
}

registerBrick('0164136be50e7c4cd5a8', GetObjectTag);
