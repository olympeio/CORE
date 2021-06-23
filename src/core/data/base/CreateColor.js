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

import { FunctionBrick, registerBrick, Color } from 'olympe';

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
export default class CreateColor extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     * @param {function(!Color)} setResult
     */
    onUpdate(context, [r, g, b, a], [setResult]) {
        r = Math.min(255, Math.max(0, r));
        b = Math.min(255, Math.max(0, b));
        g = Math.min(255, Math.max(0, g));

        const c = Color.create(r, g, b, a);
        setResult(c);
    }
}

registerBrick('01633eb5bdb4e94f82d1', CreateColor);
