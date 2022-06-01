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

import { Brick, registerBrick, BrickContext, ErrorFlow } from 'olympe';

export default class DecodeURIComponent extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} str
     * @param {boolean} entireURL
     * @param {function(string)} setDecoded
     * @param {function(*)} setErrorFlow
     */
    update($, [str, entireURL], [setDecoded, setErrorFlow]) {
        let decoded = null;
        try {
            decoded = entireURL ? decodeURIComponent(String(str)) : decodeURI(String(str));
            setDecoded(decoded);
        } catch (e) {
            setErrorFlow(ErrorFlow.create(e.message, 1))
        }
    }
}

registerBrick('0179c79a6fb65e17624d', DecodeURIComponent);
