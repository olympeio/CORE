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
