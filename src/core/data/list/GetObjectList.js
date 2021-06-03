
import { FunctionBrick, registerBrick, Context, ListDef, Sync, InstanceTag } from 'olympe';

/**
## Description
Gets a list of all the instances of a given model.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Model | Model | The model. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list of instances. |

**/
export default class GetObjectList extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} model
     * @param {function(!ListDef)} setList
     */
    onUpdate(context, [model], [setList]) {
        setList(Sync.getInstancesOf(model));
    }
}

registerBrick('016324f41f20cc166cab', GetObjectList);
