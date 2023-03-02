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

import { Brick, registerBrick, Color } from 'olympe';

/**
## Description
Creates a color based on the 3 RGB values provided.
Each value has to be in the 0 - 255 range.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| red | Number | Value for the red channel. |
| green | Number | Value for the green channel. |
| blue | Number | Value for the blue channel. |
| alpha | Number | Value for the alpha channel. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| color | Color | The created color. |
**/
export default class CreateColor extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     * @param {function(!Color)} setResult
     */
    update(context, [r, g, b, a], [setResult]) {
        r = Math.min(255, Math.max(0, r));
        b = Math.min(255, Math.max(0, b));
        g = Math.min(255, Math.max(0, g));

        const c = Color.create(r, g, b, a);
        setResult(c);
    }
}

registerBrick('01633eb5bdb4e94f82d1', CreateColor);
