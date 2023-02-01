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

        /**
         * @private
         * @type {!Map<string, function(!HashChangeEvent)>}
         */
        this.onHashChangeHandlers = new Map();
        window.addEventListener('hashchange', (event) => {
            this.onHashChangeHandlers.forEach((handler) => handler(event));
        });

        /**
         * @private
         * @type {!Map<string, function(!PopStateEvent)>}
         */
        this.onPopStateHanlders = new Map();
        window.addEventListener('popstate', (event) => {
            this.onPopStateHanlders.forEach((handler) => handler(event));
        });
    }

    /**
     * Register a callback triggered when the browser fires an onhashchange event
     *
     * @param {function(!HashChangeEvent)} callback
     * @param {string=} id
     * @return {string}
     */
    onOnHashChange(callback, id) {
        const finalId = id ?? NavigationManager.generateUniqueCallbackId();
        this.onHashChangeHandlers.set(id, callback);
        return finalId;
    }

    /**
     * Unregister a onhashchange callback
     *
     * @param {string} id
     */
    offOnHashChange(id) {
        this.onHashChangeHandlers.delete(id);
    }

    /**
     * Register a callback triggered when the browser fires an onpopstate event
     *
     * @abstract
     * @param {function(!PopStateEvent)} callback
     * @param {string=} id
     * @return {string}
     */
    onOnPopState(callback, id) {
        const finalId = id ?? NavigationManager.generateUniqueCallbackId();
        this.onPopStateHanlders.set(id, callback);
        return finalId;
    }

    /**
     * Unregister a onpopstate callback
     *
     * @param {string} id
     */
    offOnPopState(id) {
        this.onPopStateHanlders.delete(id);
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
