import {ActionBrick, registerBrick} from 'olympe';

export default class ClearLocalStorage extends ActionBrick {
    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     */
    update(context, inputs, [forwardEvent]) {
        // Guards
        if (typeof localStorage === 'undefined') {
            throw new Error(`Your browser does not support the window.localStorage API`);
        }
        localStorage.clear();
        forwardEvent();
    }
}

registerBrick('017c262d269bc6bed265', ClearLocalStorage);
