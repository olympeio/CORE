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

import { Query, ActionBrick, PropertyModel, BrickContext, registerBrick, CloudObject, Transaction, RelationModel, ErrorFlow, DBView, StringModel, NumberModel, DatetimeModel, BooleanModel } from 'olympe';

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
    update($, [source, businessModel, persist], [forwardEvent, setResult, setErrorFlow]) {
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
        return Query.from(model).followRecursively(CloudObject.extendRel, true).executeFromCache()
            .filter((model) => !model.equals(CloudObject.asInstance()))
            .flatMap((model) => model.follow(CloudObject.propertyRel).executeFromCache().toArray())
            .reduce((map, property) => {
                const value = data[property.name()];
                if (value !== undefined && (!(value instanceof Array) && !(value instanceof Object))) {
                    map.set(property, this.formatValue(value, property));
                }
                return map;
            }, new Map());
    }

    /**
     * @private
     * @param {*} value
     * @param {!CloudObject} property
     * @return {*}
     */
    formatValue(value, property) {
        const propType = property.followSingle(PropertyModel.typeRel).executeFromCache();
        switch (true) {
            case propType === null || value === 'null':
                return null;
            case DBView.get().isExtending(propType, StringModel):
                return String(value);
            case propType.equals(NumberModel.asInstance()):
                return Number(value);
            case propType.equals(DatetimeModel.asInstance()):
                return value instanceof Date ? value : new Date(value);
            case propType.equals(BooleanModel.asInstance()):
                return !!value;
            default:
                return null;
        }
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

        const relations = Query.from(model).followRecursively(CloudObject.extendRel, true).executeFromCache()
            .filter((model) => !model.equals(CloudObject.asInstance()))
            .flatMap((model) => model.follow(RelationModel.originModelRel.getInverse()).executeFromCache().toArray());
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
