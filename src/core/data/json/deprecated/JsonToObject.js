
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
    BrickContext,
    InstanceTag,
    registerBrick,
    CloudObject,
    DBView,
    Transaction,
    RelationModel,
    StringModel,
    NumberModel
} from 'olympe';
import {getLogger} from 'logging';
import JSONToCloudObject from "./JSONToCloudObjectOld";

export default class JsonToObject extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {string} json
     * @param {InstanceTag} businessModel
     * @param {boolean} persist
     * @param {function(CloudObject)} setObject
     * @param {function()} forwardEvent
     */
    update($, [json, businessModel, persist], [forwardEvent, setObject]) {
        const parsedJson = JSON.parse(json);
        // If we receive an array, try parsing the first element
        const data = parsedJson instanceof Array && parsedJson.length > 0 ? parsedJson[0] : parsedJson;

        const db = DBView.get();
        const transaction = new Transaction(persist);

        // Check if the instance exists already in db or if it has been processed before to avoid duplication
        const instance = transaction.create(businessModel);

        const mappingModels = new Map();

        // Tag of DataType
        db.getRelated(JSONToCloudObject.BUSINESS_MODEL_TAG, CloudObject.modelRel.getInverse())
            .forEach((buInstance) => {
                const name = db.name(buInstance);
                mappingModels.set(name, buInstance);
            });

        this.parseProperties(db, transaction, instance, businessModel, /**@type {!Object}*/(data), mappingModels);
        this.parseRelations(db, transaction, instance, businessModel, /**@type {!Object}*/(data), mappingModels);

        transaction.execute().then(() => {
            setObject(CloudObject.get(instance));
            forwardEvent();
        }).catch(msg => getLogger('JSON To Object').error(`Transaction failed: ${msg}`));
    }

    /**
     * @protected
     * @param {!DBView} db
     * @param {!Transaction} transaction
     * @param {InstanceTag} instance
     * @param {!string} businessModel
     * @param {!Object} data
     * @param {!Map} mappingModels
     * @param {!Map<string, !Map<string, string> >=} instanceTags
     */
    parseProperties(db, transaction, instance, businessModel, data, mappingModels, instanceTags) {
        const properties = db.getRelated(businessModel, CloudObject.propertyRel);

        properties.forEach((item) => {
            const propName =  db.name(item);
            const mappedModel = mappingModels.get(propName.charAt(0).toUpperCase() + propName.slice(1));
            if (data && data[propName] !== undefined && (!(data[propName] instanceof Array) && !(data[propName] instanceof Object))) {
                transaction.update(instance, item, data[propName]);
            } else if (mappedModel) {
                const buInstance = transaction.create(mappedModel);
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
     * @param {!Map<string, !Map<string, string> >=} instanceTags
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
                    const relatedInstance = transaction.create((mappedModel));
                    this.parseProperties(db, transaction, relatedInstance, mappedModel, relatedObjectData, mappingModels, instanceTags);
                    this.parseRelations(db, transaction, relatedInstance, mappedModel, relatedObjectData, mappingModels, instanceTags);
                    transaction.createRelation(relation, instance, relatedInstance);
                } else if (!(relatedObjectData instanceof Object)) {
                    const obj = transaction.create(db.getUniqueRelated(relation, RelationModel.destinationModelRel));
                    const propToUpdate = typeof relatedObjectData === 'string'
                        ? StringModel.valueProp
                        : NumberModel.valueProp;
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
