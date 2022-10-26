import { ActionBrick, registerBrick, BrickContext } from 'olympe';
import {getLogger} from 'logging';

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
        const logger = getLogger('SetInContext')
        if (!(context instanceof BrickContext)) {
            logger.warn('Invalid context provided');
            return;
        }
        if (typeof key !== 'string' || key.length < 1) {
            logger.warn('Invalid key provided');
            return;
        }
        context.set(key, value);
        forwardEvent();
    }
}

registerBrick('01833b2db24111318fb4', SetInContext);
