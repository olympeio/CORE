/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
