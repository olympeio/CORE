
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

import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Delete the specified relation between 2 given objects.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin object. |
| relation | Relation | The relation. |
| destination | Object | The destination object. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| origin | Object | The origin Object. |

**/
export default class DeleteRelation extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Sync} origin
     * @param {!Sync} destination
     * @param {!Relation} relation
     * @param {function()} forwardEvent
     * @param {function(!Sync)} setOrigin
     */
    onUpdate(context, [origin, destination, relation], [forwardEvent, setOrigin]) {
        // Get current transaction
        const transaction = context.getTransaction();

        // Delete the specified relation
        transaction.deleteRelation(relation, origin, destination);

        // Release or execute the transaction
        context.releaseTransaction(() => {
            setOrigin(origin);
            forwardEvent();
        });
    }
}

registerBrick('01681960628b0d391ad6', DeleteRelation);
