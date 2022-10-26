import { Brick, registerBrick } from 'olympe';
import {getLogger} from "logging";
import { Application, Screen_, Runnable } from '../../helpers/common/tags';

export default class GetClosestContext extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} modelType
     * @param {function(*)} setContext
     */
    update($, [modelType], [setContext]) {
        const logger = getLogger('GetClosestContext');
        if (typeof modelType !== 'string') {
            logger.warn('Invalid modelType provided: must be a string');
            return;
        }
        const selector = {modelTag: modelType};

        switch (modelType) {
            case 'parent':
                selector.modelTag = Runnable;
                break;
            case 'application':
                selector.modelTag = Application;
                break;
            case 'screen':
                selector.modelTag = Screen_;
                break
        }
        const closestContext = $.getParent()?.getClosest(selector);
        setContext(closestContext);
    }
}

registerBrick('01833b2bd5b1be12d776', GetClosestContext);
