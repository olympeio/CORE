import { Brick, registerBrick } from 'olympe';

export default class GetUUID extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(string)} setUUID
     */
    update($, inputs, [forwardEvent, setUUID]) {
        setUUID(crypto.randomUUID());
        forwardEvent();
    }
}

registerBrick('01958f7fda4d5e5a7f98', GetUUID);
