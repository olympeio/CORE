import { Brick, registerBrick, ErrorFlow } from 'olympe';
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
        if (typeof modelType !== 'string') {
            throw ErrorFlow.create('Invalid modelType provided: must be a string', 1);
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
        if(!closestContext) {
            logger.warn(`Cannot find the closest context for model: ${modelType}`);
        }
        setContext(closestContext);
    }
}

registerBrick('01833b2bd5b1be12d776', GetClosestContext);
