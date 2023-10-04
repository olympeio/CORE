import { Brick, registerBrick } from 'olympe';

export default class CreateListFunction extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} _
     * @param {function(Array)} setList
     */
    update(context, _, [setList]) {
        setList([]);
    }
}

registerBrick('017acce60376dbc2b1b2', CreateListFunction);
