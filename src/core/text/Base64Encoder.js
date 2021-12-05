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

import {FunctionBrick, registerBrick} from 'olympe';
import {toBase64, stringToBase64} from 'helpers/binaryConverters';

export default class Base64Encoder extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} input
     * @param {string} encoding
     * @param {function(string)} output
     * @param {!Array} outputs
     */
    update(context, [input, encoding], [output]) {
        let encoded = '';
        switch (encoding.toLowerCase()) {
            case 'binary' :
            case 'bin' :
                const bufferView = new Uint8Array(new ArrayBuffer(input.length));
                for (let i = 0, l = input.length; i < l; i++) {
                    bufferView[i] = input.charCodeAt(i);
                }
                encoded = toBase64(bufferView.buffer);
                break;
            case 'utf-8' :
            case 'utf8' :
            default:
                encoded = stringToBase64(input);
        }
        output(encoded);
    }
}

registerBrick('016cb9162263a22bcaba', Base64Encoder);
