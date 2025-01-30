/**
 * The FileConnector class is an abstract class that provides the interface for file operations.
 */
export class FileConnector {

    /**
     * @param {function(string):*} configGetter
     */
    constructor(configGetter) {
        /**
         * @private
         * @type {function(string): *}
         */
        this.configGetter = configGetter;
    }

    /**
     * @protected
     * @param {string} key
     * @return {*}
     */
    getConfig(key) {
        return this.configGetter(key);
    }

    /**
     * Upload file content.
     * @abstract
     * @param {string} fileTag - The tag of the file.
     * @param {string} dataType - The data type associated with the file.
     * @param {Uint8Array} binary - The binary data to upload.
     */
    async uploadFileContent(fileTag, dataType, binary) {
        throw new Error('uploadFileContent method must be implemented in subclasses');
    }

    /**
     * Download file content.
     * @abstract
     * @param {string} fileTag - The tag of the file.
     * @param {string} dataType - The data type associated with the file.
     * @returns {Promise<Uint8Array>} The binary file content.
     */
    async downloadFileContent(fileTag, dataType) {
        throw new Error('downloadFileContent method must be implemented in subclasses');
    }

    /**
     * Delete file content.
     * @abstract
     * @param {string} fileTag - The tag of the file.
     * @param {string} dataType - The data type associated with the file.
     */
    async deleteFileContent(fileTag, dataType) {
        throw new Error('deleteFileContent method must be implemented in subclasses');
    }
}
