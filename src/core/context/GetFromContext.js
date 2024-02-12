import { Brick, registerBrick, BrickContext, CloudObject, tagToString, ErrorFlow } from 'olympe';

export default class GetFromContext extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} key
     * @param {*} context
     * @param {function(*)} setValue
     */
    update($, [context, key], [setValue]) {
        if (typeof key !== 'string' && !(key instanceof CloudObject)) {
            throw ErrorFlow.create('Invalid key provided. Must be a string or a CloudObject.', 1);
        }
        if (context instanceof BrickContext) {
            const sub = context.observe(tagToString(key), false, true).subscribe(setValue);
            $.onClear(() => sub.unsubscribe());
        } else {
            throw ErrorFlow.create('Invalid context provided.', 2);
        }
    }
}

registerBrick('01833b2d211c06d24c64', GetFromContext);
