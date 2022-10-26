import { Brick, registerBrick, BrickContext } from 'olympe';

export default class GetCurrentContext extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setCurrentContext
     */
    update($, inputs, [setCurrentContext]) {
        setCurrentContext($.getParent());
    }
}

registerBrick('01833b2bfcd0eaa694b9', GetCurrentContext);
