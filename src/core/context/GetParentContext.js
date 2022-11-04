import { Brick, registerBrick } from 'olympe';
import { Runnable } from '../../helpers/common/tags';

export default class GetParentContext extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {function(*)} setParentContext
     */
    update($, [], [setParentContext]) {
        const selector = {modelTag: Runnable};
        setParentContext($.getParent()?.getClosest(selector));
    }
}

registerBrick('01833b2d39efc164ad54', GetParentContext);
