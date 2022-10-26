import { Brick, registerBrick, BrickContext } from 'olympe';

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
            setParentContext(context.getParent());
        } else {
            setParentContext(null);
        }
    }
}

registerBrick('01833b2d4ecc48c97004', GetParentOfContext);
