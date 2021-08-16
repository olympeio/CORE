/**
 * Helper class to register multiple callbacks on browser navigation events
 */
export class NavigationManager {

    /**
     * Return the singleton instance of the navigation manager
     *
     * @static
     * @return {!NavigationManager}
     */
    static get() {
        if (NavigationManager.instance === undefined) {
            NavigationManager.instance = new NavigationManager();
        }
        return NavigationManager.instance;
    }

    /**
     * Return a function summoning all the callbacks stored in a registry
     *
     * @static
     * @param {!Object<Function>} handlerCallbacksRegistry
     * @return {Function}
     */
    static createHandler(handlerCallbacksRegistry) {
        return (_event) => {
            // Call all callbacks in the registry
            Object.values(handlerCallbacksRegistry).forEach((_callback) => {
                _callback(_event);
            });
        };
    }

    /**
     * Register a callback to a specific event handler
     *
     * @static
     * @param {Object<Function>} eventHandlerCallbacksRegistry
     * @param {Function} callback
     * @param {string=} id
     * @return {string} The assigned id.
     */
    static registerCallbackOnEventHandler(eventHandlerCallbacksRegistry, callback, id) {
        id = id || NavigationManager.generateUniqueCallbackId();
        eventHandlerCallbacksRegistry[id] = callback;
        return id;
    }

    /**
     * Generate a simple unique ID for the callback
     *
     * @static
     * @return {string}
     */
    static generateUniqueCallbackId() {
        let id = '';
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 6; i++) {
            id += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        return id;
    }

    constructor() {

        /** @private {Object<function(window.HashChangeEvent)>} */
        this.onHashChangeCallbacksRegistry = Object.create(null);

        /** @private {?function(window.HashChangeEvent)} */
        this.onHashChangeHandler = NavigationManager.createHandler(this.onHashChangeCallbacksRegistry);
        window.onhashchange = this.onHashChangeHandler.bind(this);

        /** @private {Object<function(window.HashChangeEvent)>} */
        this.onPopStateCallbacksRegistry = Object.create(null);

        /** @private {?function(window.HashChangeEvent)} */
        this.onPopStateHandler = NavigationManager.createHandler(this.onPopStateCallbacksRegistry);
        window.onpopstate = this.onPopStateHandler.bind(this);
    }

    /**
     * Register a callback triggered when the browser fires an onhashchange event
     *
     * @param {function(window.HashChangeEvent)} callback
     * @param {string=} id
     * @return {string}
     */
    onOnHashChange(callback, id) {
        return NavigationManager.registerCallbackOnEventHandler(
            this.onHashChangeCallbacksRegistry,
            callback,
            id
        );
    }

    /**
     * Unregister a onhashchange callback
     *
     * @param {string} id
     */
    offOnHashChange(id) {
        delete this.onHashChangeCallbacksRegistry[id];
    }

    /**
     * Register a callback triggered when the browser fires an onpopstate event
     *
     * @abstract
     * @param {function(window.PopStateEvent)} callback
     * @param {string=} id
     * @return {string}
     */
    onOnPopState(callback, id) {
        return NavigationManager.registerCallbackOnEventHandler(
            this.onPopStateCallbacksRegistry,
            callback,
            id
        );
    }

    /**
     * Unregister a onpopstate callback
     *
     * @param {string} id
     */
    offOnPopState(id) {
        delete this.onPopStateCallbacksRegistry[id];
    }
}

/**
 * Parse current navigation hash from URL.
 *
 * @return {string}
 */
export function parseCurrentHash() {
    return window.location.hash.split('#')[1] || '';
}

/**
 * Update (push or replace) the navigation state
 *
 * As for now, this is just a trick to control the browser history. The state data are always null.
 *
 * @param {string} state
 * @param {boolean} push
 */
export function updateNavigationState(state, push) {

    const hash = '#'.concat(state);  // For now, the URL hash is simply the serialized state
    const currentHash = parseCurrentHash();

    // Push/Replace state in history
    if(push) {
        history.pushState(null, '', hash);
    } else {
        history.replaceState(null, '', hash);
    }

    // Fire manually the hash changed event if the hash has changed
    if (currentHash !== state) {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
}
