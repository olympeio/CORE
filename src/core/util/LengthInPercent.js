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

import { Brick, registerBrick } from 'olympe';

/**
NO DOC
**/
export default class LengthInPercent extends Brick {

    /**
     * @protected
     * @param {!Context} context
     * @param {number} percent
     * @param {number} containerLength
     * @param {function(number)} setResult
     */
    update(context, [percent, containerLength], [setResult]) {
        setResult(containerLength * percent / 100);
    }
}

registerBrick('016f8f8416f002ae2b00', LengthInPercent);
