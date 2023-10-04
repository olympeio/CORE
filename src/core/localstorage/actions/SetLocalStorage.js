import { ActionBrick, registerBrick } from 'olympe'
import {getLogger} from '@olympeio/core';
import {LocalStorageManager} from '../LocalStorageManager';

export default class SetLocalStorage extends ActionBrick {
  /**
   * @protected
   * @param {Context} context
   * @param {string} key
   * @param {string} value
   * @param {function()} forwardEvent
   */
  update(context, [key, value], [forwardEvent]) {
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
    forwardEvent();
  }
}

registerBrick('017c262ecca7e515c0ca', SetLocalStorage)
