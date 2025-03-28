import { Brick, ErrorFlow, Process, registerBrick } from 'olympe';

export default class GoOffline extends Brick {

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
            await Process.disconnect();
            forwardEvent()
        } catch (error) {
            setError(ErrorFlow.create(`Failed to Go Offline: ${error}`, 0));
        }
    }
}

registerBrick('0189f81cfbd7e53738b3', GoOffline);
