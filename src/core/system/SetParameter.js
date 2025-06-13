import {Brick, ErrorFlow, registerBrick} from 'olympe';

export default class SetParameter extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} name
     * @param {*} value
     * @param {function()} forwardEvent
     */
    update($, [name, value], [forwardEvent]) {
        if (typeof name !== 'string') {
            throw ErrorFlow.create('Parameter name is not a string', 1);
        }

        globalThis['updateConfig'](name, value);
        forwardEvent();
    }
}

registerBrick('0195899061ff9975014b', SetParameter);
