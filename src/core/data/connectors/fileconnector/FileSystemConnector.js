import { promises as fsp, createReadStream } from 'fs';
import path from 'path';
import {FileConnector} from "./FileConnector";
import FileConnectorsRegistry from "./FileConnectorsRegistry";
import {hashcode} from "../../../../helpers/common/hash";

export default class FileSystemConnector extends  FileConnector{
    constructor(...args) {
        super(...args);

        /**
         * @private
         * @type {?string}
         */
        this.filePath = this.getConfig('filePath');

        // Guards
        if (typeof this.filePath !== 'string') {
            throw new Error('Cannot initialise the File System Connector for a data source: no file path config found');
        }
    }
    /**
     * @override
     */
    async uploadFileContent(fileTag, dataType, binary) {
        const folder = this.getFilePath(fileTag);
        await fsp.mkdir(folder, { recursive: true });
        // encoding "null" means binary file
        await fsp.writeFile(path.join(folder, fileTag), binary, { encoding: null });
    }

    /**
     * @override
     */
    async downloadFileContent(fileTag, dataType) {
        const filePath = path.join(this.getFilePath(fileTag), fileTag);
        try {
            await fsp.access(filePath, fsp.constants.F_OK);
        } catch (e) {
            throw new Error(`File ${filePath} does not exist so it cannot be downloaded`);
        }
        return fsp.readFile(filePath, {encoding: null }).then((buffer) => new Uint8Array(buffer));
        // TODO: To be used in 2.11
        // return createReadStream(filePath, { encoding: null });
    }

    /**
     * @override
     */
    async deleteFileContent(fileTag, dataType) {
        const folder = this.getFilePath(fileTag);
        await fsp.rm(path.join(folder, fileTag));
    }

    /**
     * Generate the path of directories for the specified file, based on its tag.
     *
     * @private
     * @param {string} fileTag
     * @return {string}
     */
    getFilePath(fileTag) {
        const hash = hashcode(fileTag);
        const first = String(hash & 255).padStart(3, '0');
        const second = String((hash >> 8) & 255).padStart(3, '0');
        return path.join(this.filePath, first, second);
    }
};

// Register connector
FileConnectorsRegistry.register('fileSystem', (configGetter) => new FileSystemConnector(configGetter));
