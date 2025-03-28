import {Logger} from 'loglevel';
import {ReactElement} from "react";
import {CloudObject, BrickContext, VisualBrick, Brick, Query, Operation} from "olympe";
import {Knex} from "knex";
import {Readable} from "stream";

/**
 * Return the specified logger
 *
 * @param name the logger name.
 */
export function getLogger(name: string): Logger;


/**
 * @param {string} value
 * @return {!ArrayBuffer}
 */
export function fromBase64(value: string): ArrayBuffer

/**
 * @param {!ArrayBuffer} value
 * @return {string}
 */
export function toBase64(value: ArrayBuffer): string

/**
 * Read a blob and return the ArrayBuffer containing the blob content.
 *
 * @param {!Blob} blob
 * @param {function(!ArrayBuffer)} done
 */
export function readBlob(blob: Blob, done: (ArrayBuffer) => void): void

/**
 * Generates a unique Object URL to access the Blob later on. Format is "blob:...".
 *
 * @param {!Blob} blob
 * @return {string}
 */
export function createObjectUrl(blob: Blob): string

/**
 * Fetch the blob from the specified object url. Call onSuccess if it succeeds, onFailure ontherwise.
 *
 * @param {string} url
 * @param {function(!Blob)} onSuccess
 * @param {function(string)=} onFailure
 */
export function fetchFromObjectUrl(url: string, onSuccess: (ArrayBuffer) => void, onFailure: (string) => void): void

/**
 * An object URL must be revoked when won't be used anymore.
 * It releases memory used to store the binary pointed by the URL and make the URL not usable anymore.
 *
 * @param {string} url
 */
export function revokeObjectUrl(url: string): void

/**
 * Encode the specified UTF8 string into the equivalent base64 string.
 *
 * @param {string} value
 * @return {string}
 */
export function stringToBase64(value: string): string

/**
 * Convert the provided string to an ArrayBuffer, using the UTF-8 encoding.
 *
 * @param {string} string the string to convert
 * @return {!ArrayBuffer}
 */
export function stringToBinary(string: string): ArrayBuffer

/**
 * Decode a base64 string into its equivalent UTF8 string.
 *
 * @param {string} value
 * @return {string}
 */
export function base64ToString(value: string): string


/**
 * Convert the binary buffer content to the corresponding string using UTF-8 encoding.
 *
 * @param {!ArrayBuffer} binary
 * @return {string}
 */
export function binaryToString(binary: ArrayBuffer): string

/**
 * Return a data url based on the provided array buffer and mimeType.
 * It uses the specified encoding to create the base64 transformation.
 *
 * @param {!ArrayBuffer} content
 * @param {string} mimeType
 * @return {string} the data url
 */
export function binaryToDataUrl(content: ArrayBuffer, mimeType: string): string

/**
 * Retrieves the binary content of a base64 data URL.
 *
 * @throws {Error} when the specified url is not a base64 data url.
 * @param {string} url
 * @return {!ArrayBuffer}
 */
export function dataUrlToBinary(url: string): ArrayBuffer

/**
 * Convert Base64 string to Base64Url string
 *
 * @param {string} str
 * @return {string}
 */
export function base64ToBase64Url(str: string): string

/**
 * Convert Base64Url string to Base64 string
 *
 * @param {string} str
 * @return {string}
 */
export function base64UrlToBase64(str: string): string

/**
 * Specialized version of VisualBrick for React.
 */
export class ReactBrick extends VisualBrick {
    /**
     * Specify your React function component by overriding this method
     *
     * @param {BrickContext} $
     * @return {function(Object): ReactElement}
     */
    static getReactComponent($: BrickContext): (properties?: Object) => ReactElement
}

/**
 * Allows to bind a context property to a stateful react value.
 *
 * @param {!BrickContext} $
 * @param {string} property
 * @param {boolean=} [waitForValue=true]
 * @return {*} a stateful value usable in JSX
 */
export function useProperty($: BrickContext, property: string, waitForValue: boolean = true): any

/**
 * Allows to bind a context property to a stateful react value.
 * Provides a setter to update the property accordingly
 *
 * Warning: will replace `useProperty` in a future major version
 *
 * @beta
 * @param {BrickContext} $
 * @param {string} property
 * @param {*=} initialValue
 * @return {Array} a stateful value usable in JSX
 */
export function useProp($: BrickContext, property: string, initialValue?: any): [any, (newValue: any) => void]

/**
 * Allows to bind a context or object property to a stateful react value.
 * Provides a setter to update the property accordingly
 *
 * Be aware that using the provided setter to update the property should be used for occasional updates only since
 * it will perform a micro-transaction. Using it for large volumes of update is unrecommended and may lead to performance
 * issues.
 *
 * If you need to update multiple values at once consider doing a grouped transaction instead.
 * If you need to frequently update a value consider debouncing the setter.
 *
 * @param {BrickContext} $
 * @param {string} property
 * @param {CloudObject} cloudObject
 * @param {*=} initialValue
 * @return {Array} a stateful value usable in JSX
 */
export function useObjectProperty($: BrickContext, cloudObject: CloudObject, property: string, initialValue?: any): [any, (newValue: any) => void]

/**
 * @param {string} text
 * @param {string} element
 * @return {Element}
 */
export function markdownTextToReactElement(text: string, element: string): Element

/**
 * Execute an action lambda and return its outputs as an array when the control flow output gets a value.
 * In case of the error flow output gets an error, the promise is rejected with that error.
 *
 * @param {BrickContext} $
 * @param {!Brick} lambda lambda to be executed
 * @param {!Array<*>} inputsValues input values except for control flow, in order of the function signature.
 * @param {number} customErrorCode
 * @return {Promise<!Array<*>>}
 */
export function executeLambda($: BrickContext, lambda: Brick, inputsValues: any[], customErrorCode: number): Promise<any[]>

/**
 * Static class used to register file connectors for data connectors.
 */
export static class FileConnectorsRegistry {

    /**
     * Register file connector with the given identifier.
     */
    static register(connectorId: string, loader: (configGetter: (path: string) => any) => FileConnector);

    /**
     * Get file operations for a specific connector type.
     */
    static get(connectorId: string, configGetter: (path: string) => any): FileConnector;
}

/**
 * The FileConnector class is an abstract class that provides the interface for file operations.
 */
export class FileConnector {

    constructor(configGetter: (key: string) => any);

    /**
     * Upload file content.
     */
    async uploadFileContent(fileTag: string, dataType: string, binary: Uint8Array): Promise<void>

    /**
     * Download file content.
     */
    async downloadFileContent(fileTag: string, dataType: string): Promise<Uint8Array | Readable>

    /**
     * Delete file content.
     */
    async deleteFileContent(fileTag: string, dataType: string): Promise<void>
}

/**
 * The class used to build SQL queries from Olympe Query objects.
 */
export class SQLQueryExecutor {

    /**
     * Set a function that will handle the execution of the SQL query once built, instead of being applied directly on a local database
     */
    delegateExecution(executor: (builder: Knex.QueryBuilder) => Promise<any>): SQLQueryExecutor

    /**
     * Transform a query to a knex query builder, ready to be executed.
     */
    async executeQuery(query: Query<CloudObject, any>): Promise<any>
}

/**
 * A schema provider is used to interact with the database schema by SQL data connectors
 */
export interface SchemaProvider {
    init(client: Knex, schema: string, ...args: any[]): Promise<void>;
    getSchema(): string;
    getTablesOfType(dataType: string, includeInheritance?: boolean): string[];
    getDBDialectName(): string;
}

/**
 * The schema reader is used to read the schema configuration and bridge the gap between the datamodel and the database schema.
 * It never alters the schema.
 */
export class SchemaReader extends SchemaProvider {}

/**
 * The schema observer is used to observe changes in the datamodel and adapt automatically the database schema to correspond to it.
 * It requires appropriate permissions to alter the schema.
 */
export class SchemaObserver extends SchemaProvider {}


export type BatchInserts = Map<string, Array<object>>;

/**
 * Handles SQL transaction operations.
 */
export class SQLTransactionWriter {

    /**
     * @param logger - Logger instance for logging.
     * @param client - Knex client instance for database operations.
     * @param schemaProvider - Schema provider instance.
     */
    constructor(logger: Logger, client: Knex, schemaProvider: SchemaProvider);

    /**
     * Set a function that will handle the execution of the SQL query once built,
     * instead of being applied directly on a local database.
     *
     * @param executor - Function to handle execution of SQL queries.
     * @returns The instance of SQLTransactionWriter.
     */
    delegateExecution(executor: (queries: any[], batchInserts: BatchInserts | null) => Promise<any>): this;

    /**
     * Execute the list of operations.
     *
     * @param operations - List of operations to execute.
     * @param batch - Whether to batch inserts (default: false).
     * @param raw - Whether to execute raw queries (default: false).
     * @param executor - Optional custom executor function.
     * @returns A promise that resolves when operations are executed.
     */
    async applyOperations(
        operations: Operation[],
        batch?: boolean,
        raw?: boolean,
        executor?: ((queries: any[], batchInserts: BatchInserts | null) => Promise<any>) | null
    ): Promise<void>;
}

export * from './mui';
