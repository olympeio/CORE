import { Brick, registerBrick } from 'olympe';

export default class IsStringEmpty extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} input
     * @param {function(boolean)} setIsEmpty
     */
    update($, [input], [setIsEmpty]) {
        //Checks if trimmed input is empty
        setIsEmpty(input.trim() === '');
    }
}

registerBrick('018ad7390f6f70de24ec', IsStringEmpty);
