import { Brick, registerBrick, Process, ErrorFlow } from 'olympe';

export default class GoOnline extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(*)} setError
     */
    async update($, inputs, [forwardEvent, setError]) {
        try {
            await Process.connect();
            forwardEvent();
        } catch (error) {
            setError(ErrorFlow.create(`Failed to Go Online: ${error}`, 0));
        }
    }
}

registerBrick('0189f81d484d8193ec6d', GoOnline);
