import { ActionBrick, registerBrick } from 'olympe'
import {getLogger} from '@olympeio/core';

export default class GetLocalStorage extends ActionBrick {
  /**
   * @protected
   * @param {Context} context
   * @param {string} key
   * @param {function()} forwardEvent
   * @param {function(string)} setValue
   */
  update(context, [key], [forwardEvent, setValue]) {
      // Guards
      if (typeof localStorage === 'undefined') {
          throw new Error(`Your browser does not support the window.localStorage API`);
      }
      if (typeof key !== 'string') {
          throw new Error(`Provided key is not of type string: ${key}`);
      }
      setValue(localStorage.getItem(key));
      forwardEvent();
  }
}

registerBrick('017c262ed0fc842b0f70', GetLocalStorage)
