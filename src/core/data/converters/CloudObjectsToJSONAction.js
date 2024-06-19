import {
    ActionBrick,
    CloudObject,
    ErrorFlow,
    ListDef,
    QueryResult,
    registerBrick,
    Relation,
    RelationModel
} from 'olympe';

export default class CloudObjectsToJSONAction extends ActionBrick {
    /**
     * Convert CloudObjects To JSON
     *
     * @param {CloudObject | CloudObject[] | QueryResult | ListDef} source
     * @param {boolean} withRelations
     * @return {Object | Object[]} JSON representation of the provided CloudObject(s)
     */
    static convertCloudObjectsToJson(source, withRelations) {
        try {
            let json;
            if (source instanceof Array || source instanceof QueryResult) {
                json = [];
                source.forEach((item) => {
                    json.push(this.cloudObjectToJson(item, withRelations));
                });
            } else if (source instanceof CloudObject) {
                json = this.cloudObjectToJson(source, withRelations);
            } else if (source instanceof ListDef) {
                json = [];
                source.forEachCurrentValue((item) => {
                    json.push(this.cloudObjectToJson(item, withRelations));
                });
            } else {
                throw new Error('Provided source is not a Cloud Object or List of Cloud Objects');
            }
            return json;
        } catch (e) {
            throw ErrorFlow.create('Error while creation of json from CloudObject list: ' + e.message, 1);
        }
    }

    /**
     * @param {CloudObject} instance
     * @param {boolean} withRelations
     * @return {Object}
     */
    static cloudObjectToJson(instance, withRelations) {
        if (CloudObject.exists(instance)) {
            return Object.assign(
                instance.toObject(true, true),
                withRelations ? this.parseRelations(instance) : {}
            );
        } else {
            throw new Error(`Provided Cloud Object "${instance}" does not exist`);
        }
    }

    /**
     * Return the JSON representation of the relations of the specified instance.
     *
     * @param {CloudObject} instance
     * @return {!Object}
     */
    static parseRelations(instance) {
        return instance.getModel().query()
            // Retrieve the model and all its extensions
            .followRecursively(CloudObject.extendRel, true)
            .executeFromCache()
            // Do not consider the CloudObject model relations themselves
            .filter((model) => !model.equals(CloudObject))
            // For all models, retrieve the relations defined on them
            .flatMap((model) => model.follow(RelationModel.originModelRel.getInverse()).executeFromCache().toArray())
            // For each relation, retrieve the related objects and serialize them to JSON recursively
            .reduce((result, relation) => {
                const relName = relation.name();
                result[relName] = instance.follow(new Relation(relation)).executeFromCache()
                    .map((obj) => this.cloudObjectToJson(obj, true));
                return result;
            }, {});
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {CloudObject | CloudObject[] | QueryResult | ListDef} source
     * @param {boolean=} propertiesOnly
     * @param {function()} forwardEvent
     * @param {function(Object | Object[])} setResult
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update($, [source, propertiesOnly], [forwardEvent, setResult, setErrorFlow]) {
        try {
            setResult(CloudObjectsToJSONAction.convertCloudObjectsToJson(source, !propertiesOnly));
            forwardEvent();
        } catch (error) {
            setErrorFlow(ErrorFlow.create(`Cloud Object To JSON: ${error.message}`, 1));
        }
    }
}

registerBrick('018ecac077f5ecb07375', CloudObjectsToJSONAction);
