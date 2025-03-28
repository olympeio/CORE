import { Brick, registerBrick } from 'olympe';

export default class NewMap extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(Map)} setMap
     */
    update(context, inputs, [forwardEvent, setMap]) {
        setMap(new Map());
        forwardEvent();
    }
}

registerBrick('017a0b2a7a8450867ed7', NewMap);
