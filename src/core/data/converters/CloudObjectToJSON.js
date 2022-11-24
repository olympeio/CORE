import { Brick, BrickContext, InstanceTag, registerBrick, ListDef, QueryResult, DBView, ErrorFlow, BusinessObject, CloudObject, transformers, RelationModel } from 'olympe';
import { getLogger } from 'logging';

export default class CloudObjectToJSON extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {boolean} propertiesOnly
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, propertiesOnly], [setResult, setErrorFlow]) {
        const logger = getLogger('Cloud Object To JSON');

        let json;
        try {
            if (source instanceof ListDef) {
                json = [];
                source.forEachCurrentValue((item) => {
                    json.push(this.parseProperties(item.getTag(), propertiesOnly));
                });
            } else if (source instanceof Array || source instanceof QueryResult) {
                json = [];
                source.forEach((item) => {
                    json.push(this.parseProperties(item, propertiesOnly));
                });
            } else if (source instanceof CloudObject) {
                json = this.parseProperties(source.getTag(), propertiesOnly);
            } else {
                logger.error('Provided source is not a Cloud Object or List of Cloud Objects');
                return;
            }
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Provided source is not a correct Cloud Object or List of Cloud Objects: ' + e.message, 1));
            return;
        }

        setResult(json);
    }

    /**
     * private
     * @param {string} instance
     * @param {boolean=} propertiesOnly
     * @param {boolean=} [isPrimitiveRelation=false]
     * @return {!Object}
     */
    parseProperties(instance, propertiesOnly, isPrimitiveRelation = false) {
        const db = DBView.get();
        let json = isPrimitiveRelation ? null : {};
        const properties =  /**@type {!Map<string, ?*>}*/ db.getProperties(instance);
        properties.delete(CloudObjectToJSON.MODEL_NAME_TAG);

        properties.forEach((propertyValue, propertyTag) => {
            const propName = db.name(propertyTag);

            if (isPrimitiveRelation) {
                json = propertyValue;
            } else {
                json[propName] = db.exist(propertyValue) ? this.parseProperties(propertyTag, propertiesOnly) : propertyValue;
            }
        });

        const model = db.getUniqueRelated(instance, BusinessObject.modelRel);
        const extendedModels = db.getRecursiveRelated(model, BusinessObject.extendRel, CloudObjectToJSON.DATA_TYPE_TAG);
        extendedModels.unshift(model);
        const relations = extendedModels.map((extendedModel) => {
            return db.getRelated(extendedModel, RelationModel.originModelRel.getInverse());
        }).flat();

        if (!propertiesOnly){
            relations.forEach((relationTag, key) => {
                const uniqueObjects = db.getUniqueRelated(relationTag, RelationModel.destinationModelRel);
                const relationOfPrimitive = db.isExtending(uniqueObjects, CloudObjectToJSON.OLYMPE_PRIMITIVE_TAG);

                const children = db.getRelated(instance, new transformers.Related(relationTag));
                const relationName = db.name(relationTag);
                json[relationName] = [];
                children.forEach((child) => {
                    json[relationName].push(this.parseProperties(child, propertiesOnly, relationOfPrimitive));
                });
            });
        }
        return /**@type {!Object}*/(json);
    }
}

CloudObjectToJSON.DATA_TYPE_TAG = '016324fde11a836f76c2';
CloudObjectToJSON.OLYMPE_PRIMITIVE_TAG = 'ff021000000000000019';
CloudObjectToJSON.MODEL_NAME_TAG = 'ff023000000000000011';

registerBrick('017fc0743bebe690bfef', CloudObjectToJSON);
