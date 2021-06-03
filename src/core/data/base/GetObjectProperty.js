import { FunctionBrick, registerBrick, Sync, InstanceTag, Property } from 'olympe';

/**
## Description
Access an object's property value.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The object. |
| Property | Property | The property. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | The value of the property for that object. |

**/
export default class GetObjectProperty extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!InstanceTag} object
     * @param {!Property<*>} property
     * @param {function(*)} setValue
     */
    onUpdate(context, [object, property], [setValue]) {
        const objectSync = Sync.getInstance(object);
        objectSync.observeProperty(property).subscribe(setValue);
    }
}

registerBrick('01632a1a376f822b77c0', GetObjectProperty);
