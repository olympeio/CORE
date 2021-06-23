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

import {FunctionBrick, registerBrick, ListDef, transformers} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Filter out duplicate items from a list. The object tags are used to identify duplicates.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object list | List | List with duplicate items to filter out. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Filtered list | List | The filtered list without duplicate items. |

**/
export default class FilterListDistinct extends FunctionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {!Array|!ListDef} list
     * @param {function(!Array|!ListDef)} setFiltered
     */
    onUpdate(context, [list], [setFiltered]) {
        const logger = getLogger('Filter List Distinct');
        if(Array.isArray(list)){
            setFiltered(Array.from(new Set(list)));
        } else if (list instanceof ListDef) {
            setFiltered(list.transform(new transformers.Distinct()));
        } else {
            logger.error('List is not a ListDef or an Array');
        }
    }
}

registerBrick('0171839084d99a3f99e1', FilterListDistinct);
