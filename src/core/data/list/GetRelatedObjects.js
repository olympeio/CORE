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

import { FunctionBrick, registerBrick, instanceToTag, RelationPrimitive, Direction, DBView, transformers, ListDef } from 'olympe';
import {getLogger} from 'logging';

/**
 * @param {!InstanceTag} object
 * @param {!InstanceTag} relation
 * @return {transformers.Related<Sync, Sync>}
 */
export const getOrientedRelation = (object, relation) => {
    const db = DBView.get();

    // NB Relation here is a instance of Relation
    // Get model at origin of relation
    const originModel = db.getUniqueRelated(relation, RelationPrimitive.originModelRel);

    // Auto detect the direction in which the relation should be followed : assess whether the provided object is an instance of the relation's origin
    // In case the relation as the same model as origin and destination, the only supported behaviour is origin -> destination (COM-1042)
    const direction = db.getExtendedModels(db.model(object)).includes(originModel) ? Direction.DESTINATION : Direction.ORIGIN;

    return new transformers.Related(relation, direction);
}

/**
 * @param {!InstanceTag} object
 * @param {!InstanceTag} relation
 * @return {ListDef}
 */
export const getRelatedObjects = (object, relation) => {
    return new ListDef(object, getOrientedRelation(object, relation));
};

/**
 ## Description
 Generates a list of all the objects that are connected to the specified object via a relation.
 Note: The direction of the relation is not taken into account.
 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Object | Object | The origin object. |
 | Relation | Relation | The relation. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | List | List | The list of objects. |
 **/
export default class GetRelatedObjects extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, [object, relation], [setList]) {
        const logger = getLogger('Get Related Objects');
        // Prevent errors
        if (instanceToTag(object) === '') {
            logger.error('Invalid `object` provided, must be a business object, or a tag');
            return;
        } else if (instanceToTag(relation) === '') {
            logger.error('Invalid `relation` provided');
            return;
        }

        setList(getRelatedObjects(object, relation));
    }
}

registerBrick('0168190b633088746a60', GetRelatedObjects);
