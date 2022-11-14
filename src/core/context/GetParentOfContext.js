import { Brick, registerBrick, BrickContext } from 'olympe';
import { Runnable } from "../../helpers/common/tags";

export default class GetParentOfContext extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} context
     * @param {function(*)} setParentContext
     */
    update($, [context], [setParentContext]) {
        if (context instanceof BrickContext) {
            const selector = {modelTag: Runnable};
            setParentContext(context.getClosest(selector));
        } else {
            setParentContext(null);
        }
    }
}

registerBrick('01833b2d4ecc48c97004', GetParentOfContext);
