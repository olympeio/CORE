
/**
 * This map is used as index of all created object urls. It makes possible to simulate the creation of ObjectURL from a Blob
 * as it is done by Browsers with URL.createObjectURL.
 * Blobs in Node are here implemented using the Buffer API from NodeJS. Therefore, the memory allocation is already
 * handled internally by NodeJS through this Buffer objects.
 *
 * @type {!Map<string, !Blob>}
 */
const URLS = new Map();

/**
 * @param {string} value
 * @return {!ArrayBuffer}
 */
export function fromBase64(value) {
    return new Uint8Array(Buffer.from(value, 'base64')).buffer;
}

/**
 * @param {!ArrayBuffer} value
 * @return {string}
 */
export function toBase64(value) {
    return Buffer.from(value).toString('base64');
}

/**
 * Read a blob and return the ArrayBuffer containing the blob content.
 *
 * @param {!Blob} blob
 * @param {function(!ArrayBuffer)} done
 */
export function readBlob(blob, done) {
    blob.arrayBuffer().then(done);
}

/**
 * Generates a unique Object URL to access the Blob later on. Format is "blob:...".
 *
 * @param {!Blob} blob
 * @return {string}
 */
export function createObjectUrl(blob) {
    const rnd = () => Math.random().toString(16).slice(-4);
    const uuid = `${rnd()}${rnd()}-${rnd()}-${rnd()}-${rnd()}-${rnd()}${rnd()}${rnd()}`;

    // Create a fake blob url : blob://e27881c4-f924-b8f7-59d9-525878c7a812
    const url = `blob://${uuid}`;
    URLS.set(url, blob);
    return url;
}

/**
 * Fetch the blob from the specified object url. Call onSuccess if it succeeds, onFailure ontherwise.
 *
 * @param {string} url
 * @param {function(!Blob)} onSuccess
 * @param {function(string)=} onFailure
 */
export function fetchFromObjectUrl(url, onSuccess, onFailure) {
    if (URLS.has(url)) {
        onSuccess(URLS.get(url));
    } else {
        onFailure && onFailure('No object has been found for that url. Maybe the URL has already been revoked');
    }
}

/**
 * An object URL must be revoked when won't be used anymore.
 * It releases memory used to store the binary pointed by the URL and make the URL not usable anymore.
 *
 * @param {string} url
 */
export function revokeObjectUrl(url) {
    URLS.delete(url);
}

/**
 * Encode the specified UTF8 string into the equivalent base64 string.
 *
 * @param {string} value
 * @return {string}
 */
export function stringToBase64(value) {
    return toBase64(stringToBinary(value));
}

/**
 * Convert the provided string to an ArrayBuffer, using the UTF-8 encoding.
 *
 * @param {string} string the string to convert
 * @return {!ArrayBuffer}
 */
export function stringToBinary(string) {
    return new TextEncoder().encode(string).buffer;
}

/**
 * Decode a base64 string into its equivalent UTF8 string.
 *
 * @param {string} value
 * @return {string}
 */
export function base64ToString(value) {
    return binaryToString(fromBase64(value));
}

/**
 * Convert the binary buffer content to the corresponding string using UTF-8 encoding.
 *
 * @param {!ArrayBuffer} binary
 * @return {string}
 */
export function binaryToString(binary) {
    return new TextDecoder('utf8').decode(binary);
}

/**
 * Return a data url based on the provided array buffer and mimeType.
 * It uses the specified encoding to create the base64 transformation.
 *
 * @param {!ArrayBuffer} content
 * @param {string} mimeType
 * @return {string} the data url
 */
export function binaryToDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${toBase64(content)}`;
}

/**
 * Retrieves the binary content of a base64 data URL.
 *
 * @throws {Error} when the specified url is not a base64 data url.
 * @param {string} url
 * @return {!ArrayBuffer}
 */
export function dataUrlToBinary(url) {
    const regex = /^data:.*;base64,(.*)/;
    const res = regex.exec(url.trim());
    if (res.length !== 2) {
        throw new Error('Try to retrieve binary from data url that has wrong format.');
    }
    return fromBase64(/** @type {string } */(res[1]));
}

/**
 * Convert Base64 string to Base64Url string
 *
 * @param {string} str
 * @return {string}
 */
export function base64ToBase64Url(str) {
    return str.replace('+', '-').replace('/', '_');
}

/**
 * Convert Base64Url string to Base64 string
 *
 * @param {string} str
 * @return {string}
 */
export function base64UrlToBase64(str) {
    return str.replace('-', '+').replace('_', '/');
}
