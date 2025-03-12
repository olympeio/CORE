import { Brick, BrickContext, registerBrick } from 'olympe';

export default class RandomAction extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} _inputs
     * @param {function()} forwardEvent
     * @param {function(number)} setValue
     */
    update($: BrickContext, _inputs: any[], [forwardEvent, setValue]: [() => void, (value: number) => void]): void {
        setValue(Math.random());
        forwardEvent();
    }
}

registerBrick('01813e7c39f40fe05634', RandomAction);
