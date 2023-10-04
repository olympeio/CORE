import { ActionBrick, registerBrick } from 'olympe'
import {getLogger} from '@olympeio/core';
import {LocalStorageManager} from '../LocalStorageManager';

export default class RemoveLocalStorage extends ActionBrick {
  /**
   * @protected
   * @param {Context} context
   * @param {string} key
   * @param {function()} forwardEvent
   */
  update(context, [key], [forwardEvent]) {
    // Guards
    if (typeof localStorage === 'undefined') {
      throw new Error(`Your browser does not support the window.localStorage API`);
    }
    if (typeof key !== 'string') {
      throw new Error(`Provided key is not of type string: ${key}`);
    }
    localStorage.removeItem(key);
    // notify brick GetLocalStorage
    LocalStorageManager.notifyValueUpdate(key, null);
    forwardEvent();
  }
}

registerBrick('017c262ec781b6d67195', RemoveLocalStorage)
