import { Brick, registerBrick,BrickContext } from 'olympe';
import { map } from 'rxjs';

export default class OnControlFlow extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const [controlFlow, data] = this.getInputs();
        return $.observe(controlFlow).pipe(map(val => [val, $.get(data)]));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} controlFlow
     * @param {*} data
     * @param {function(*)} setData
     */
    update($, [controlFlow, data], [setData]) {
        setData(data);
    }
}

registerBrick('01808e07d4d6010a8c9a', OnControlFlow);
