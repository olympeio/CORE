
/**
 * Helper class to register multiple callbacks on browser localstorage events
 */
export class LocalStorageManager {
    /**
     * Register a callback listening on local storage changes
     */
    static initCallbackRegistry() {
        if(LocalStorageManager.onStorageCallbacksMap === undefined) {
            /**
             * @type {Map<string, Map<number,function()>>}
             */
            LocalStorageManager.onStorageCallbacksMap = new Map();

            /**
             * Counter to provide IDs
             *
             * @type {number}
             */
            LocalStorageManager.counter = 0;

            // listen to the local storage updates coming from other tabs only (see https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event)
            window.addEventListener('storage', (storageEvent) => {
                LocalStorageManager.notifyValueUpdate(storageEvent.key, storageEvent.newValue);
            });
        }
    }

    /**
     * Notify that a value was updated to the registered callbacks
     *
     * @param {string} key
     * @param {?string} value
     */
    static notifyValueUpdate(key, value) {
        const callbacksForKey = LocalStorageManager.onStorageCallbacksMap && LocalStorageManager.onStorageCallbacksMap.get(key);
        if(callbacksForKey !== undefined) {
            for (const cb of callbacksForKey.values()) {
                cb(value);
            }
        }
    }

    /**
     * Register a callback that will be fired when a new value is stored in the local storage
     *
     * @param {string} forKey
     * @param {function(string)} callback
     * @return {number}
     */
    static registerCallback(forKey, callback) {
        LocalStorageManager.initCallbackRegistry();

        let callbacksForKey;
        const id = LocalStorageManager.counter++;
        if(LocalStorageManager.onStorageCallbacksMap.has(forKey)) {
            callbacksForKey = LocalStorageManager.onStorageCallbacksMap.get(forKey);
        }
        else {
            callbacksForKey = new Map();
            LocalStorageManager.onStorageCallbacksMap.set(forKey, callbacksForKey);
        }
        callbacksForKey.set(id, callback);
        return id;
    }

    /**
     * Unregister a given callback
     *
     * @param {string} forKey
     * @param {number} id
     */
    static unregisterCallback(forKey, id) {
        const callbacksForKey = LocalStorageManager.onStorageCallbacksMap && LocalStorageManager.onStorageCallbacksMap.get(forKey);
        if(callbacksForKey !== undefined) {
            callbacksForKey.delete(id);
        }
    }
}
