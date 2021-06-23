import { FunctionBrick, registerBrick, ListDef } from 'olympe';

/**
## Description
Retrieve an object given its tag.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Tag | String | The tag of the requested object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The Object. |
**/
export default class GetObjectByTag extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} tag
     * @param {function(!Sync)} setObject
     */
    onUpdate(context, [tag], [setObject]) {
        new ListDef(tag, []).observeFirst().subscribe(setObject);
    }
}

registerBrick('016324f5cf507031f6a3', GetObjectByTag);
