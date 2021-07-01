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

import {ActionBrick, registerBrick, Context, DBView, BusinessObject, RelationPrimitive} from 'olympe';

/**
## Description
Parses an object into a json.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | An instance of a BusinessModel. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| json | String | stringified Json |

**/
export default class ObjectToJson extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {BusinessObject} object
     * @param {function(string)} setJson
     * @param {function()} forwardEvent
     */
    onUpdate(context, [object], [forwardEvent, setJson]) {
        const db = DBView.get();
        const json = this.parseProperties(db, object.getTag());

        setJson(JSON.stringify(json));
        forwardEvent();
    }



    /**
     * @protected
     * @param {DBView} db
     * @param {string} instance
     * @param {boolean=} [isPrimitiveRelation=false]
     * @return {!Object}
     */
    parseProperties(db, instance, isPrimitiveRelation = false) {
        let json = isPrimitiveRelation ? null : {};
        const properties = db.getProperties(instance);
        properties.forEach((value, key) => {
            const propName = db.name(key);

            if (isPrimitiveRelation) {
                json = value;
            } else {
                json[propName] = db.exist(value) ? this.parseProperties(db, key) : value;
            }
        });

        const model = db.getUniqueRelated(instance, BusinessObject.modelRel);
        // TODO should add BusinessModel in public api?
        const extendedModels = db.getRecursiveRelated(model, BusinessObject.extendRel, '016324fde11a836f76c2');
        extendedModels.unshift(model);
        const rels = extendedModels.map((extendedModel) => {
            return db.getRelated(extendedModel, RelationPrimitive.originModelRel.getInverse());
        }).flat();

        rels.forEach((relationTag, key) => {
            const relationOfPrimitive = db.isExtending(db.getUniqueRelated(relationTag, RelationPrimitive.destinationModelRel), 'ff021000000000000019');

            const children = db.getRelated(instance, new RelationPrimitive(relationTag));
            const relationName = db.name(relationTag);

            json[relationName] = [];
            children.forEach((child) => {
                json[relationName].push(this.parseProperties(db, child, relationOfPrimitive));
            });
        });
        return /**@type {!Object}*/(json);
    }

}

registerBrick('0175b1ab88cf39df4c54', ObjectToJson);
