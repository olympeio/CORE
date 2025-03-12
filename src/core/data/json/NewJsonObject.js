import { Brick, registerBrick } from 'olympe';

export default class NewJsonObject extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(*)} setJson
     */
    update($, inputs, [forwardEvent, setJson]) {
        setJson({});
        forwardEvent();
    }
}

registerBrick('0186303dacd585f4174c', NewJsonObject);
