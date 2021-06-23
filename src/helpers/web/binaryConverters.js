/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * @param {string} value
 * @return {!ArrayBuffer}
 */
export function fromBase64(value) {
    const binStr = window.atob(value);
    // Char after char, recreate UInt8 array.
    const bufferView = new Uint8Array(new ArrayBuffer(binStr.length));
    for (let i = 0, l = binStr.length; i < l; i++) {
        bufferView[i] = binStr.charCodeAt(i);
    }
    return bufferView.buffer;
}

/**
 * @param {!ArrayBuffer} value
 * @return {string}
 */
export function toBase64(value) {
    let binStr = '';
    // Byte after byte, recreate the binary string.
    const bytes = new Uint8Array(value);
    for (let i = 0, l = bytes.length; i < l; i++) {
        binStr += String.fromCodePoint(bytes[i]);
    }
    return window.btoa(binStr);
}

/**
 * Read a blob and return the ArrayBuffer containing the blob content.
 *
 * @param {!Blob} blob
 * @param {function(!ArrayBuffer)} done
 */
export function readBlob(blob, done) {
    const reader = new FileReader();
    reader.onload = () => {
        done(/** @type {!ArrayBuffer} */ (reader.result));
    };
    reader.readAsArrayBuffer(blob);
}

/**
 * Generates a unique Object URL to access the Blob later on. Format is "blob:...".
 *
 * @param {!Blob} blob
 * @return {string}
 */
export function createObjectUrl(blob) {
    return URL.createObjectURL(blob);
}

/**
 * Fetch the blob from the specified object url. Call onSuccess if it succeeds, onFailure ontherwise.
 *
 * @param {string} url
 * @param {function(!Blob)} onSuccess
 * @param {function(string)=} onFailure
 */
export function fetchFromObjectUrl(url, onSuccess, onFailure) {
    fetch(url)
        .then((r) => r.blob())
        .then(onSuccess)
        .catch((reason) => {
            onFailure && onFailure(reason.toString());
        });
}

/**
 * An object URL must be revoked when won't be used anymore.
 * It releases memory used to store the binary pointed by the URL and make the URL not usable anymore.
 *
 * @param {string} url
 */
export function revokeObjectUrl(url) {
    URL.revokeObjectURL(url);
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
