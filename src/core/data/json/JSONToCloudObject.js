import { Brick, BrickContext, InstanceTag, registerBrick, CloudObject, BusinessObject, DBView, Transaction, RelationModel, StringModel, NumberModel, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';

export default class JSONToCloudObject extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {*} businessModel
     * @param {boolean} persist
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, businessModel, persist], [setResult, setErrorFlow]) {
        const logger = getLogger('JSON To Cloud Object');

        // Guards
        if (typeof source !== 'object' && typeof source !== 'string') {
            logger.error('Provided source is not object or string');
            return;
        }
        if (!(businessModel instanceof BusinessObject)) {
            logger.error('Provided model is not an Object');
            return;
        }

        let json;
        try {
            json = (typeof source === 'string') ? JSON.parse(source) : source;
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source string ' + e.message, 1));
            return;
        }

        const db = DBView.get();
        const transaction = Transaction.from($);
        transaction.persist(persist);

        // Check if the instance exists already in db or if it has been processed before to avoid duplication
        const instance = transaction.create(businessModel);

        const existingDataModels = db.getRelated(JSONToCloudObject.BUSINESS_MODEL_TAG, BusinessObject.modelRel.getInverse());
        const mappingModels = new Map();

        existingDataModels.forEach((dataModel) => {
            const name = db.name(dataModel);
            mappingModels.set(name, dataModel);
        });

        let result;
        if (json instanceof Array && json.length > 0) {
            result = [];
            const instanceTags = new Map();

            json.forEach((data) => {
                // Check if the instance exists already in db or if it has been processed before to avoid duplication
                const instanceTag = transaction.create(businessModel);
                this.parseProperties(db, transaction, instanceTag, businessModel, data, mappingModels, instanceTags);
                this.parseRelations(db, transaction, instanceTag, businessModel, data, mappingModels, instanceTags);
                result.push(instanceTag);
            });
        } else {
            this.parseProperties(db, transaction, instance, businessModel, /**@type {!Object}*/(json), mappingModels);
            this.parseRelations(db, transaction, instance, businessModel, /**@type {!Object}*/(json), mappingModels);
            result = instance;
        }

        // Place a callback "afterExecution" to ensure that the transaction
        // has been executed before to call CloudObject.get()
        transaction.afterExecution(() => {
            if(Array.isArray(result)){
                setResult(result.map(CloudObject.get));
            } else {
                setResult(CloudObject.get(result));
            }
        });

        Transaction.process($, transaction)
            .catch(message => {
                setErrorFlow(ErrorFlow.create('Transaction failed: ' + message, 1));
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
    parseProperties(db, transaction, instance, businessModel, data, mappingModels, instanceTags) {
        const properties = db.getRelated(businessModel, BusinessObject.propertyRel);

        properties.forEach((item) => {
            const propName = db.name(item);
            const unifiedProperty = propName.charAt(0).toUpperCase() + propName.slice(1);
            const mappedModel = mappingModels.get(unifiedProperty);
            const isPropertyExists = data && data[propName] !== undefined && (!(data[propName] instanceof Array) && !(data[propName] instanceof Object));

            if (isPropertyExists) {
                transaction.update(instance, item, data[propName]);
            } else if (mappedModel) {
                const newInstance = transaction.create((mappedModel));
                this.parseProperties(db, transaction, newInstance, mappedModel, data[propName], mappingModels, instanceTags);
                transaction.update(instance, item, newInstance);
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

        const filteredRelations = relations.filter((relation) => {
            propName = db.name(relation);
            const unifiedPropName = propName.charAt(0).toUpperCase() + propName.slice(1, propName.length - 1);
            mappedModel = mappingModels.get(unifiedPropName);
            return data[propName] !== undefined || mappedModel;
        });

        filteredRelations.forEach((relation) => {
            propName = db.name(relation);
            const unifiedPropName = propName.charAt(0).toUpperCase() + propName.slice(1, propName.length - 1);
            mappedModel = mappingModels.get(unifiedPropName);
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

JSONToCloudObject.BUSINESS_MODEL_TAG = '016324fde11a836f76c2';

registerBrick('017fc07bf104e6ce60b7', JSONToCloudObject);
