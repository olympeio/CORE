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

import { FunctionBrick, registerBrick, Sync } from 'olympe';

/**
## Description
Access an object's property value.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The object. |
| Property | Property | The property. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Value | Object | The value of the property for that object. |

**/
export default class GetObjectProperty extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!InstanceTag} object
     * @param {!Property<*>} property
     * @param {function(*)} setValue
     */
    onUpdate(context, [object, property], [setValue]) {
        const objectSync = Sync.getInstance(object);
        objectSync.observeProperty(property).subscribe(setValue);
    }
}

registerBrick('01632a1a376f822b77c0', GetObjectProperty);
