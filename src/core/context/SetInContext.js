import { ActionBrick, registerBrick, BrickContext, CloudObject, tagToString } from 'olympe';
import { getLogger } from 'logging';

export default class SetInContext extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} context
     * @param {string} key
     * @param {*} value
     * @param {function()} forwardEvent
     */
    update($, [context, key, value], [forwardEvent]) {
        if (!(context instanceof BrickContext)) {
            throw new Error('Invalid context provided');
        }
        if (typeof key !== 'string' && !(key instanceof CloudObject)) {
            throw new Error('Invalid key provided. Must be a string or a CloudObject.');
        }
        context.set(tagToString(key), value);
        forwardEvent();
    }
}

registerBrick('01833b2db24111318fb4', SetInContext);
