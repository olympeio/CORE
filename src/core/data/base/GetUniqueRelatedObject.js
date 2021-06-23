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

import { FunctionBrick, registerBrick, instanceToTag } from 'olympe';
import {getRelatedObjects} from "../list/GetRelatedObjects";
import {getLogger} from 'logging';


/**
## Description
Retrieves the first object connected to the specified object via a relation.
Note: The direction of the relation is not taken into account.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | Object | The origin object. |
| Relation | Relation | The relation. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The related object. |
**/
export default class GetUniqueRelatedObject extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!InstanceTag} object
     * @param {!InstanceTag} relation
     * @param {function(Sync)} setObject
     */
    onUpdate(context, [object, relation], [setObject]) {
        const logger = getLogger('Get Unique Related Object');

        // Prevent errors
        if (instanceToTag(object) === '') {
            logger.error('Invalid `object` provided');
            return;
        } else if (instanceToTag(relation) === '') {
            logger.error('Invalid `relation` provided');
            return;
        }

        const relatedObjects = getRelatedObjects(object, relation);
        relatedObjects.observeSize().subscribe((size) => {
            if (size.value > 1) {
                logger.warn(`${db.name(db.model(object))} ${instanceToTag(object)} is related to ${size.value} objects through relation ${db.name(relation)}`);
            }
        });
        relatedObjects.observeFirst().subscribe(setObject);
    }
}

registerBrick('0167c09126e60d1955fe', GetUniqueRelatedObject);
