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

import {ActionBrick, registerBrick, instanceToTag} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Creates a specified relation between 2 given objects.

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
export default class CreateRelation extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Sync} origin
     * @param {!Relation} relation
     * @param {!Sync} destination
     * @param {function()} forwardEvent
     * @param {function(!Sync)} setOrigin
     */
    onUpdate(context, [relation, origin, destination], [forwardEvent, setOrigin]) {
        const logger = getLogger('Create Relation');

        // Guards
        if (instanceToTag(relation) === '') {
            logger.error('No relation specified');
            return;
        }
        if (instanceToTag(origin) === '') {
            logger.error('No origin object specified');
            return;
        }
        if (instanceToTag(destination) === '') {
            logger.error('No destination object specified');
            return;
        }

        // Transaction
        context.getTransaction().createRelation(relation, origin, destination);
        context.releaseTransaction((executed, success, message) => {
            if(executed && !success) {
                logger.error(`Transaction error: ${message}`);
            } else {
                setOrigin(origin);
                forwardEvent();
            }
        });
    }
}

registerBrick('01694800e25a7c39f7b0', CreateRelation);
