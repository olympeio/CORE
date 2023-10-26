import { Brick, registerBrick, BrickContext } from 'olympe';
import {LocalStorageManager} from '../LocalStorageManager';

export default class GetLocalStorage extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} key
     * @param {function(string)} setValue
     */
    update(context, [key], [setValue]) {
        // Guards
        if (typeof localStorage === 'undefined') {
            throw new Error(`Your browser does not support the window.localStorage API`);
        }
        if (typeof key !== 'string') {
            throw new Error(`Provided key is not of type string: ${key}`);
        }

        // unregister a previous listener for the key
        this.cleanLatestCallback(context);

        // register a new listener
        let cbIndex = LocalStorageManager.registerCallback(key, setValue);
        context.set(GetLocalStorage.INPUT_KEY, key);
        context.set(GetLocalStorage.CALLBACK_INDEX, cbIndex);

        // return current stored value
        setValue(localStorage.getItem(key));
    }

    /**
     * @private
     * @param {BrickContext} context
     */
    cleanLatestCallback(context) {
        if(context.get(GetLocalStorage.INPUT_KEY) !== undefined && context.get(GetLocalStorage.CALLBACK_INDEX) !== undefined) {
            LocalStorageManager.unregisterCallback(context.get(GetLocalStorage.INPUT_KEY), context.get(GetLocalStorage.CALLBACK_INDEX))
        }
    }

    /**
     * @param {BrickContext} context
     */
    destroy(context) {
        this.cleanLatestCallback(context);
    }

    /**
     * @private
     * @type {string}
     */
    static INPUT_KEY = "INPUT_KEY";

    /**
     * @private
     * @type {string}
     */
    static CALLBACK_INDEX = "CALLBACK_INDEX";

}

registerBrick('017c263ad2cf51e19947', GetLocalStorage);
