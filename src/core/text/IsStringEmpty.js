import { Brick, registerBrick } from 'olympe';
import { map } from 'rxjs/operators';
export default class IsStringEmpty extends Brick {
    /**
     * @override
     */
    setupExecution($) {
        const [value] = this.getInputs();
        return $.observe(value, false).pipe(map((value) => [value]));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} input
     * @param {function(boolean)} setIsEmpty
     */
    update($, [input], [setIsEmpty]) {
        //Checks if trimmed input is empty
        setIsEmpty(input === null || input === undefined || (typeof input === 'string' && input.trim() === ''));
    }
}

registerBrick('018ad7390f6f70de24ec', IsStringEmpty);
