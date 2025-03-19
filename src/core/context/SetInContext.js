import { Brick, registerBrick, BrickContext, CloudObject, tagToString, ErrorFlow } from 'olympe';

export default class SetInContext extends Brick {

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
            throw ErrorFlow.create('Invalid context provided', 1);
        }
        if (typeof key !== 'string' && !(key instanceof CloudObject)) {
            throw ErrorFlow.create('Invalid key provided. Must be a string or a CloudObject.', 2);
        }
        context.set(tagToString(key), value);
        forwardEvent();
    }
}

registerBrick('01833b2db24111318fb4', SetInContext);
