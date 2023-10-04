import { Brick, registerBrick } from 'olympe';
import {getLogger} from '@olympeio/core';
import {LocalStorageManager} from '../LocalStorageManager';

export default class SetLocalStorage extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} key
     * @param {string} value
     * @param {!Array} outputs
     */
    update(context, [key, value], outputs) {
        // Guards
        if (typeof localStorage === 'undefined') {
            throw new Error(`Your browser does not support the window.localStorage API`);
        }
        if (typeof key !== 'string') {
            throw new Error(`Provided key is not of type string: ${key}`);
        }
        if (typeof value !== 'string') {
            throw new Error(`Provided value is not of type string: ${value}`);
        }
        localStorage.setItem(key, value);

        // notify brick GetLocalStorage
        LocalStorageManager.notifyValueUpdate(key, value);
    }
}

registerBrick('017c264b251d136e7ce4', SetLocalStorage);
