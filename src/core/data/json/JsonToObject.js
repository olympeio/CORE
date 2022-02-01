
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

import {
    ActionBrick,
    registerBrick,
    Context,
    Sync,
    BusinessObject,
    DBView,
    Transaction,
    RelationModel,
    StringPrimitive,
    NumberPrimitive,
    InstanceTag
} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Parses a json into target business model.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| json | string | Json to parse |
| persist | boolean | indicates if the instance should be persisted, default: false |
| businessModel | Business Model | target business model |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | instance of business model |

**/
export default class JsonToObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} json
     * @param {InstanceTag} businessModel
     * @param {boolean} persist
     * @param {function(BusinessObject)} setObject
     * @param {function()} forwardEvent
     */
    update(context, [json, businessModel, persist], [forwardEvent, setObject]) {
        const parsedJson = JSON.parse(json);
        // If we receive an array, try parsing the first element
        const data = parsedJson instanceof Array && parsedJson.length > 0 ? parsedJson[0] : parsedJson;

        const db = DBView.get();
        const transaction = context.getTransaction();
        transaction.persist(persist);

        // Check if the instance exists already in db or if it has been processed before to avoid duplication
        const instance = transaction.create((businessModel));

        const mappingModels = new Map();
        // TODO should add BusinessModel in public api?
        db.getRelated('016324fde11a836f76c2', BusinessObject.modelRel.getInverse())
            .forEach((buInstance) => {
                const name = db.name(buInstance);
                mappingModels.set(name, buInstance);
            });

        this.parseProperties(db, transaction, instance, businessModel, /**@type {!Object}*/(data), mappingModels);
        this.parseRelations(db, transaction, instance, businessModel, /**@type {!Object}*/(data), mappingModels);

        transaction.execute((success, msg) => {
            if (success) {
                setObject(/**@type{BusinessObject}*/Sync.getInstance(instance));
                forwardEvent();
            } else {
                getLogger('JSON To Object').error(`Transaction failed: ${msg}`);
            }
        });

    }

    /**
     * @protected
     * @param {!DBView} db
     * @param {!Transaction} transaction
     * @param {InstanceTag} instance
     * @param {!string} businessModel
     * @param {!Object} data
     * @param {!Map} mappingModels
     * @param {!Map<string, !Map<string, string>>=} instanceTags
     */
    parseProperties(db, transaction, instance, businessModel, data, mappingModels, instanceTags) {
        const properties = db.getRelated(businessModel, BusinessObject.propertyRel);

        properties.forEach((item) => {
            const propName =  db.name(item);
            const mappedModel = mappingModels.get(propName.charAt(0).toUpperCase() + propName.slice(1));
            if (data && data[propName] !== undefined && (!(data[propName] instanceof Array) && !(data[propName] instanceof Object))) {
                transaction.update(instance, item, data[propName]);
            } else if (mappedModel) {
                const buInstance = transaction.create((mappedModel)).getTag();
                this.parseProperties(db, transaction, buInstance, mappedModel, data[propName], mappingModels, instanceTags);
                transaction.update(instance, item, buInstance);
            }
        });
    }

    /**
     * @protected
     * @param {!DBView} db
     * @param {!Transaction} transaction
     * @param {InstanceTag} instance
     * @param {!string} businessModel
     * @param {!Object} data
     * @param {!Map<string, string>} mappingModels
     * @param {!Map<string, !Map<string, string>>=} instanceTags
     */
    parseRelations(db, transaction, instance, businessModel, data, mappingModels, instanceTags) {
        const relations = db.getRelated(businessModel, RelationModel.originModelRel.getInverse());

        let propName, mappedModel;
        relations.filter((relation) => {
            propName = db.name(relation);
            mappedModel = mappingModels.get(propName.charAt(0).toUpperCase() + propName.slice(1, propName.length - 1));
            return data[propName] !== undefined || mappedModel;
        }).forEach((relation) => {
            propName = db.name(relation);
            mappedModel = mappingModels.get(propName.charAt(0).toUpperCase() + propName.slice(1, propName.length - 1));
            if (!data[propName]) {
                return;
            }
            const processRelatedObjectData = (relatedObjectData) => {
                if (mappedModel) {
                    const relatedInstance = transaction.create((mappedModel)).getTag();
                    this.parseProperties(db, transaction, relatedInstance, mappedModel, relatedObjectData, mappingModels, instanceTags);
                    this.parseRelations(db, transaction, relatedInstance, mappedModel, relatedObjectData, mappingModels, instanceTags);
                    transaction.createRelation(relation, instance, relatedInstance);
                } else if (!(relatedObjectData instanceof Object)) {
                    const obj = transaction.create(db.getUniqueRelated(relation, RelationModel.destinationModelRel));
                    const propToUpdate = typeof relatedObjectData === 'string'
                        ? StringPrimitive.valueProp
                        : NumberPrimitive.valueProp;
                    transaction.update(obj, propToUpdate, relatedObjectData);
                    transaction.createRelation(relation, instance, obj);
                }
            };

            if (data[propName] instanceof Array) {
                data[propName].forEach((relatedObjectData) => {
                    processRelatedObjectData(relatedObjectData);
                });
            } else {
                processRelatedObjectData(data[propName])
            }
        });
    }
}

registerBrick('017598dae77177e73462', JsonToObject);
