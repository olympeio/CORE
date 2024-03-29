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

import {registerBrick, BrickContext, InstanceTag, DBView, CloudObject, Transaction} from 'olympe';
import JsonToObject from './JsonToObject.js';
import JSONToCloudObject from "./JSONToCloudObjectOld";

export default class JsonToObjectList extends JsonToObject {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string|Object} json
     * @param {InstanceTag} businessModel
     * @param {boolean} persist
     * @param {function(array)} setList
     * @param {function()} forwardEvent
     */
    update(context, [json, businessModel, persist], [forwardEvent, setList]) {
        // Try to parse the input JSON (parsing may fail if input is e.g. an array or an object). Return the result as is if its an array or wrapped in an array.
        let dataArray;
        if (typeof(json) === 'string') {
            const parsedJson = JSON.parse(json);
            dataArray = Array.isArray(parsedJson) ? parsedJson : [parsedJson];
        } else {
            dataArray = Array.isArray(json) ? json : [json]
        }

        const db = DBView.get();
        const existingDataModels = db.getRelated(JSONToCloudObject.BUSINESS_MODEL_TAG, CloudObject.modelRel.getInverse());
        const mappingModels = new Map();

        existingDataModels.forEach((dm) => {
            const name = db.name(dm);
            mappingModels.set(name, dm);
        });

        const instanceTags = new Map();
        const transaction = new Transaction(persist);

        const result = [];

        dataArray.forEach((data) => {
            // Check if the instance exists already in db or if it has been processed before to avoid duplication
            const instanceTag = transaction.create(businessModel);
            this.parseProperties(db, transaction, instanceTag, businessModel, data, mappingModels, instanceTags);
            this.parseRelations(db, transaction, instanceTag, businessModel, data, mappingModels, instanceTags);
            result.push(instanceTag);
        });

        // Place a callback "afterExecution" to ensure that the transaction
        // has been executed before to call CloudObject.get()
        transaction.afterExecution(() => setList(result.map(CloudObject.get)));

        Transaction.process(context, transaction)
            .finally(() => forwardEvent());
    }
}

registerBrick('0175b6a2f27ee65c01bd', JsonToObjectList);
