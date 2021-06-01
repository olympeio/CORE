
import { FunctionBrick, registerBrick, Context, instanceToTag } from 'olympe';

/**

**/
export default class GetObjectTag extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [object], [setValue]) {
        setValue(instanceToTag(object));
    }
}

registerBrick('0164136be50e7c4cd5a8', GetObjectTag);
