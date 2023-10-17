import { Brick, registerBrick,BrickContext } from 'olympe';
import { map } from 'rxjs';

export default class OnControlFlow extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const [controlFlow, data] = this.getInputs();
        return $.observe(controlFlow).pipe(map((_val) => [$.get(data)]));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} data
     * @param {function()} forwardEvent
     * @param {function(*)} setData
     */
    update($, [data], [forwardEvent, setData]) {
        setData(data);
        forwardEvent();
    }
}

registerBrick('01808e07d4d6010a8c9a', OnControlFlow);
