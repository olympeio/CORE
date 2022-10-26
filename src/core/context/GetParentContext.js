import { Brick, registerBrick } from 'olympe';

export default class GetParentContext extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {function(*)} setParentContext
     */
    update($, [], [setParentContext]) {
        setParentContext($.getParent().getParent());
    }
}

registerBrick('01833b2d39efc164ad54', GetParentContext);
