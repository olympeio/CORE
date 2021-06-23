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

import {FunctionBrick, registerBrick} from 'olympe';
import {fromBase64, binaryToString} from 'helpers/binaryConverters';
import {getLogger} from "../../helpers/logging";

export default class Base64Decoder extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} input
     * @param {string} encoding
     * @param {function(string)} output
     */
    onUpdate(context, [input, encoding], [output]) {
        const logger = getLogger('Base 64 Decoder');
        try {
            let decoded = '';
            switch (encoding.toLowerCase()) {
                case 'binary' :
                case 'bin' :
                    const bytes = new Uint8Array(fromBase64(input));
                    for (let i = 0, l = bytes.byteLength; i < l; i++) {
                        decoded += String.fromCodePoint(bytes[i]);
                    }
                    break;
                case 'utf-8' :
                case 'utf8' :
                default:
                    decoded = binaryToString(fromBase64(input));
            }
            output(decoded);
        } catch (e) {
            logger.error(e);
        }
    }
}

registerBrick('016cb933f367c3d1db7a', Base64Decoder);
