import { Brick, registerBrick, BrickContext, CloudObject, tagToString } from 'olympe';
import { getLogger } from "logging";

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
        const logger = getLogger('GetFromContext');
        if (typeof key !== 'string' && !(key instanceof CloudObject)) {
            logger.warn('Invalid key provided. Must be a string or a CloudObject.');
            return;
        }
        if (context instanceof BrickContext) {
            const sub = context.observe(tagToString(key), false, true).subscribe(setValue);
            $.onClear(() => sub.unsubscribe());
        }
    }
}

registerBrick('01833b2d211c06d24c64', GetFromContext);
