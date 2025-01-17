const FileConnectorsRegistry = {
    registry: {},

    /**
     * Register file operations for a specific connector type.
     * @param {string} connectorType - The type of connector.
     * @param {function(function(string):*)} loader - A function that loads the operations.
     */
    register(connectorType, loader) {
        this.registry[connectorType] = loader;
    },

    /**
     * Get file operations for a specific connector type.
     * @param {string} connectorType - The type of connector.
     * @param {function(string):*} configGetter - A function that gets the configuration.
     * @returns {object} - The file operations implementation.
     */
    get(connectorType, configGetter) {
        if (!this.registry[connectorType]) {
            throw new Error(`File operations for connector type "${connectorType}" are not registered.`);
        }
        return this.registry[connectorType](configGetter);
    },
};
export default FileConnectorsRegistry;
