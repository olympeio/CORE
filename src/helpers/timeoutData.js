/**
 * @template T
 */
export class TimeoutSet {

    /**
     * @param {number} timeout
     * @param {number=} refreshRate
     */
    constructor(timeout, refreshRate = timeout / 2) {

        /**
         * @private
         * @type {number}
         */
        this.timeout = timeout;

        /**
         * @private
         * @type {number}
         */
        this.refreshRate = refreshRate;

        /**
         * @private
         * @type {!Map<T, number>}
         */
        this.values = new Map();

        /**
         * @private
         * @type {?number}
         */
        this.timeoutId = null;

        /**
         * @private
         * @type {?function(T)}
         */
        this.timeoutHandler = null;

        /**
         * @private
         * @type {?function()}
         */
        this.emptyHandler = null;
    }

    /**
     * Insert the specified value in the set.
     *
     * @param {T} value
     */
    add(value) {
        this.values.set(value, Date.now());
        if (this.timeoutId === null) {
            this.checkValues();
        }
    }

    /**
     * Return whether the specified value is already in the set
     *
     * @param {!T} value
     * @return {boolean}
     */
    has(value) {
        return this.values.has(value);
    }

    /**
     * Refresh the timeout of the specified value. Return true if the value was there and so refreshed.
     *
     * @param {!T} value
     * @return {boolean}
     */
    refresh(value) {
        if (this.values.has(value)) {
            this.values.set(value, Date.now());
            return true;
        }
        return false;
    }

    /**
     * Return the current size of the set
     *
     * @return {number}
     */
    getSize() {
        return this.values.size;
    }

    /**
     * Remove the specified value from the set.
     *
     * @param {!T} value
     * @return {boolean}
     */
    delete(value) {
        const res = this.values.delete(value);
        if (this.values.size === 0) {
            this.timeoutId && clearTimeout(this.timeoutId);
            this.timeoutId = null;
            this.emptyHandler && this.emptyHandler();
        }
        return res;
    }

    /**
     * Clear the Set and cancel the timeouts.
     *
     * @return {!TimeoutSet};
     */
    clear() {
        this.timeoutId && clearTimeout(this.timeoutId);
        this.timeoutId = null;
        this.values.clear();
        return this;
    }

    /**
     * Define a function to call when a value reached the timeout.
     *
     * @param {function(T)} handler
     * @return {!TimeoutSet} this
     */
    onTimeout(handler) {
        this.timeoutHandler = handler;
        return this;
    }

    /**
     * Define a function to call every time the set becomes empty
     *
     * @param {function()} handler
     * @return {!TimeoutSet} this
     */
    onEmpty(handler) {
        this.emptyHandler = handler;
        return this;
    }

    /**
     * @private
     */
    checkValues() {
        this.timeoutId = setTimeout(() => {
            const now = Date.now();
            const timeout = this.timeout;
            for (const [value, time] of this.values) {
                if (now - time > timeout) {
                    this.delete(value);
                    this.timeoutHandler && this.timeoutHandler(value);
                }
            }

            if (this.values.size > 0) {
                this.checkValues();
            } else {
                this.emptyHandler && this.emptyHandler();
            }

        }, this.refreshRate);
    }
}

/**
 * @template K, V
 */
export class TimeoutMap {

    /**
     * @param {number} timeout
     * @param {number=} refreshRate
     */
    constructor(timeout, refreshRate) {

        /**
         * @private
         * @type {!TimeoutSet<K>}
         */
        this.timeoutSet = new TimeoutSet(timeout, refreshRate).onTimeout((key) => {
            const value = this.values.get(key);
            this.values.delete(key);
            this.timeoutHandler && this.timeoutHandler(key, value);
        });

        /**
         * @private
         * @type {!Map<K, V>}
         */
        this.values = new Map();

        /**
         * @private
         * @type {?function(!K, !V)}
         */
        this.timeoutHandler = null;
    }

    /**
     * Insert the specified key-value pair in the map.
     *
     * @param {!K} key
     * @param {!V} value
     * @return {!TimeoutMap} this
     */
    set(key, value) {
        this.values.set(key, value);
        this.timeoutSet.add(key);
        return this;
    }

    /**
     * Return whether the specified key is already in the map
     *
     * @param {!K} key
     * @return {boolean}
     */
    has(key) {
        return this.values.has(key);
    }

    /**
     * Return the value associated to the specified key, if still present in the map.
     *
     * @param {!K} key
     * @return {!V | undefined}
     */
    get(key) {
        return this.values.get(key);
    }

    /**
     * Refresh the timeout of the specified key. Return true if the value was there and so refreshed.
     *
     * @param {!K} key
     * @return {boolean}
     */
    refresh(key) {
        return this.timeoutSet.refresh(key);
    }

    /**
     * Return the current size of the map
     *
     * @return {number}
     */
    getSize() {
        return this.values.size;
    }

    /**
     * Remove the specified value from the set.
     *
     * @param {!K} key
     * @return {boolean}
     */
    delete(key) {
        const res = this.timeoutSet.delete(key);
        this.values.delete(key);
        return res;
    }

    /**
     * Clear the Map and cancel the timeouts.
     *
     * @return {!TimeoutMap};
     */
    clear() {
        this.timeoutSet.clear();
        this.values.clear();
        return this;
    }

    /**
     * Define a function to call when a value reached the timeout.
     *
     * @param {function(!K, !V)} handler
     * @return {!TimeoutMap} this
     */
    onTimeout(handler) {
        this.timeoutHandler = handler;
        return this;
    }

    /**
     * Define a function to call every time the map becomes empty
     *
     * @param {function()} handler
     * @return {!TimeoutMap} this
     */
    onEmpty(handler) {
        this.timeoutSet.onEmpty(handler);
        return this;
    }
}
