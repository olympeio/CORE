const FileConnectorsRegistry = {
    registry: {},

    /**
     * Register file operations for a specific connector type.
     *
     * @param {string} connectorId - The file connector id.
     * @param {function(function(string):*)} loader - The function that instantiate the file connector.
     */
    register(connectorId, loader) {
        this.registry[connectorId] = loader;
    },

    /**
     * Get file operations for a specific connector type.
     * @param {string} connectorId - The file connector id.
     * @param {function(string):*} configGetter - The getter function, provided by the data source, to retrieve the configuration values.
     * @returns {object} - The file operations implementation.
     */
    get(connectorId, configGetter) {
        if (!this.registry[connectorId]) {
            throw new Error(`File operations for connector type "${connectorId}" are not registered.`);
        }
        return this.registry[connectorId](configGetter);
    },
};
export default FileConnectorsRegistry;
