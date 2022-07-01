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

import { ActionBrick, BrickContext, registerBrick, CloudObject, Transaction, RelationModel, ErrorFlow } from 'olympe';
import { getAsJson } from './helper';

export default class JSONToCloudObject extends ActionBrick {

    /**
     * @override
     * @param {!BrickContext} $
     * @param {Object | string} source
     * @param {!CloudObject} businessModel
     * @param {boolean} persist
     * @param {function()} forwardEvent
     * @param {function(!ErrorFlow)} setErrorFlow
     * @param {function(!Array | !CloudObject)} setResult
     */
    update($, [source, businessModel, persist], [forwardEvent, setErrorFlow, setResult]) {
        // Guards
        if (source === null) {
            setErrorFlow(ErrorFlow.create('Provided source null', 1));
            return;
        }
        if (typeof source !== 'object' && typeof source !== 'string') {
            setErrorFlow(ErrorFlow.create('Provided source is not an object or a string', 1));
            return;
        }
        if (!(businessModel instanceof CloudObject)) {
            setErrorFlow(ErrorFlow.create('Provided model is not a Type', 1));
            return;
        }

        let json;
        try {
            // Try to parse the json if it is a string or keep the object otherwise.
            json = (typeof source === 'string') ? JSON.parse(source) : source;
        } catch(e) {
            setErrorFlow(ErrorFlow.create(`Error while parsing the source string: ${e.message}`, 1));
            return;
        }

        const transaction = new Transaction(persist);

        // Result is either an array of tags or a single tag depending on the JSON source.
        const result = Array.isArray(json)
            ? json.map((data) => this.parseInstance(transaction, businessModel, data))
            : this.parseInstance(transaction, businessModel, json);

        transaction.execute().then(() => {
            setResult(Array.isArray(result) ? result.map(CloudObject.get) : CloudObject.get(result));
            forwardEvent();
        }).catch(message => {
            setErrorFlow(ErrorFlow.create('Transaction failed: ' + message, 1));
        });
    }

    /**
     * @private
     * @param {!Transaction} transaction
     * @param {!CloudObject} model
     * @param {!Object} data
     * @return {string}
     */
    parseInstance(transaction, model, data) {
        const properties = this.parseProperties(model, data);
        const instanceTag = transaction.create(model, properties);
        this.parseRelations(transaction, instanceTag, model, data);
        return instanceTag;
    }

    /**
     * @private
     * @param {!CloudObject} model
     * @param {!Object} data
     * @return {!Map<Tag, *>}
     */
    parseProperties(model, data) {
        const properties = model.follow(CloudObject.propertyRel).executeFromCache();
        return properties.reduce((map, property) => {
            const value = data[property.name()];
            if (value !== undefined && (!(value instanceof Array) && !(value instanceof Object))) {
                map.set(property, value);
            }
            return map;
        }, new Map());
    }

    /**
     * @private
     * @param {!Transaction} transaction
     * @param {string} instance
     * @param {!CloudObject} model
     * @param {!Object} data
     */
    parseRelations(transaction, instance, model, data) {
        const createDestinationObject = (relation, destinationObject) => {
            const destinationModel = relation.followSingle(RelationModel.destinationModelRel).executeFromCache();
            const relatedInstance = this.parseInstance(transaction, destinationModel, destinationObject);
            transaction.createRelation(relation, instance, relatedInstance);
        };

        const relations = model.follow(RelationModel.originModelRel.getInverse()).executeFromCache();
        relations.forEach((relation) => {
            const destinationObject = data[relation.name()];
            if (Array.isArray(destinationObject)) {
                destinationObject.forEach(createDestinationObject.bind(this, relation));
            } else if (destinationObject instanceof Object) {
                createDestinationObject(relation, destinationObject);
            }
        });
    }
}

registerBrick('018162fcbe206603fdf5', JSONToCloudObject);
