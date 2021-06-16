
import {
    ActionBrick,
    registerBrick,
    Context,
    Sync,
    BusinessObject,
    DBView,
    Transaction,
    RelationPrimitive,
    StringPrimitive,
    NumberPrimitive
} from 'olympe';

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
     * @param {Sync} businessModel
     * @param {boolean} persist
     * @param {string} identifierField
     * @param {function(BusinessObject)} setObject
     * @param {function()} dispatchControlFlow
     */
    onUpdate(context, [json, businessModel, persist, identifierField], [setObject, dispatchControlFlow]) {
        const parsedJson = JSON.parse(json);
        // If we receive an array, try parsing the first element
        const data = parsedJson instanceof Array && parsedJson.length > 0 ? parsedJson[0] : parsedJson;

        const db = DBView.get();
        const transaction = context.getTransaction();
        transaction.persist(persist);

        // Check if the instance exists already in db or if it has been processed before to avoid duplication
        const instance = this.checkExisitingInstances(db, transaction, (businessModel.getTag()), identifierField, data[identifierField]);

        const mappingModels = new Map();
        // TODO should add BusinessModel in public api?
        db.getRelated('016324fde11a836f76c2', BusinessObject.modelRel.getInverse())
            .forEach((buInstance) => {
                const name = db.name(buInstance);
                mappingModels.set(name, buInstance);
            });

        this.parseProperties(db, transaction, instance, businessModel.getTag(), /**@type {!Object}*/(data), mappingModels, identifierField);
        this.parseRelations(db, transaction, instance, businessModel.getTag(), /**@type {!Object}*/(data), mappingModels, identifierField);

        transaction.execute(() => {
            setObject(/**@type{BusinessObject}*/Sync.getInstance(instance));
            dispatchControlFlow();
        });

    }

    /**
     * Checks if the instance exists already in db or if it has been processed before to avoid duplication.
     * If the identifierField param is empty we simply create an instance of the businessModel and return it.
     * If the identifierField is set, we first check in the database if the model exists already
     * based on the identifierField and identifierValue
     *  if so, we return it
     * If the instance wasn't yet found, we check the instanceTags maps which contains the elements created
     * in this action.
     * If not found, we return a new instance of the businessModel
     *
     *
     * @protected
     * @param {DBView} db
     * @param {Transaction} transaction
     * @param {string} businessModel
     * @param {string} identifierField
     * @param {string} identifierValue
     * @param {Map<string, Map<string, string>>=} instanceTags
     * @return {string}
     */
    checkExisitingInstances(db, transaction, businessModel, identifierField, identifierValue, instanceTags) {
        if (identifierField.length === 0) {
            return transaction.create((businessModel)).getTag();
        }
        let existingInstance = this.tryRetrieveInstanceFromMap(businessModel, identifierValue, instanceTags);
        if (existingInstance) {
            return existingInstance;
        }
        const instancesOfBusinessModel = db.getRelated(businessModel, BusinessObject.modelRel.getInverse());

        const businessModelProperties = db.getRelated(businessModel, BusinessObject.propertyRel);
        const matchingProperty = businessModelProperties
            .find((propertyTag) => {
                const propertyName = db.name(propertyTag);
                return propertyName === identifierField;
            });

        existingInstance = instancesOfBusinessModel.find((instance) => {
            return matchingProperty !== undefined && identifierValue !== null && db.getProperty(instance, matchingProperty) === identifierValue.valueOf();
        });

        if (existingInstance === undefined) {
            existingInstance = transaction.create((businessModel)).getTag();
        }

        if (identifierValue !== undefined && identifierValue !== null) {
            this.setInstanceToMap(businessModel, existingInstance, identifierValue, instanceTags);
        }

        return existingInstance;
    }

    /**
     * @private
     * @param {string} businessModel
     * @param {?string} identifierValue
     * @param {Map<string, Map<string, string>>=} instanceTags
     * @return {string | null}
     */
    tryRetrieveInstanceFromMap(businessModel, identifierValue, instanceTags) {
        if (instanceTags === undefined || identifierValue === null) {
            return null;
        }
        const businessModelInstanceMap = instanceTags.get(businessModel);
        if (businessModelInstanceMap === undefined) {
            return null;
        }
        const instance = businessModelInstanceMap.get(identifierValue);
        return instance !== undefined ? instance : null;
    }
    /**
     * @private
     * @param {!string} businessModel
     * @param {!string} newInstanceTag
     * @param {!string} identifierValue
     * @param {!Map<string, !Map<string, string>>=} instanceTags
     */
    setInstanceToMap(businessModel, newInstanceTag, identifierValue, instanceTags) {
        if(instanceTags === undefined || identifierValue === undefined || identifierValue === null) {
            return;
        }
        const businessModelInstanceMap = instanceTags.get(businessModel) || new Map();
        businessModelInstanceMap.set(identifierValue, newInstanceTag);
        instanceTags.set(businessModel, businessModelInstanceMap);
    }

    /**
     * @protected
     * @param {!DBView} db
     * @param {!Transaction} transaction
     * @param {!string} instance
     * @param {!string} businessModel
     * @param {!Object} data
     * @param {!Map} mappingModels
     * @param {string} identifierField
     * @param {!Map<string, !Map<string, string>>=} instanceTags
     */
    parseProperties(db, transaction, instance, businessModel, data, mappingModels, identifierField, instanceTags) {
        const properties = db.getRelated(businessModel, BusinessObject.propertyRel);

        properties.forEach((item) => {
            const propName =  db.name(item);
            const mappedModel = mappingModels.get(propName.charAt(0).toUpperCase() + propName.slice(1));
            if (data && data[propName] !== undefined && (!(data[propName] instanceof Array) && !(data[propName] instanceof Object))) {
                transaction.update(instance, item, data[propName]);
            } else if (mappedModel) {
                const buInstance = this.checkExisitingInstances(db, transaction, mappedModel, identifierField, data[propName] ? data[propName][identifierField] : null, instanceTags);
                this.parseProperties(db, transaction, buInstance, mappedModel, data[propName], mappingModels, identifierField, instanceTags);
                transaction.update(instance, item, buInstance);
            }
        });
    }

    /**
     * @protected
     * @param {!DBView} db
     * @param {!Transaction} transaction
     * @param {!string} instance
     * @param {!string} businessModel
     * @param {!Object} data
     * @param {!Map<string, string>} mappingModels
     * @param {string} identifierField
     * @param {!Map<string, !Map<string, string>>=} instanceTags
     */
    parseRelations(db, transaction, instance, businessModel, data, mappingModels, identifierField, instanceTags) {
        const relations = db.getRelated(businessModel, RelationPrimitive.originModelRel.getInverse());

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
                    const relatedInstance = this.checkExisitingInstances(db, transaction, mappedModel, identifierField, relatedObjectData[identifierField], instanceTags);
                    this.parseProperties(db, transaction, relatedInstance, mappedModel, relatedObjectData, mappingModels, identifierField, instanceTags);
                    this.parseRelations(db, transaction, relatedInstance, mappedModel, relatedObjectData, mappingModels, identifierField, instanceTags);
                    transaction.createRelation(relation, instance, relatedInstance);
                } else if (!(relatedObjectData instanceof Object)) {
                    const obj = transaction.create(db.getUniqueRelated(relation, RelationPrimitive.destinationModelRel));
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
