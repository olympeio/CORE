
import {registerBrick, Context, DBView, BusinessObject, InstanceTag} from 'olympe';
import JsonToObject from './JsonToObject.js';

/**
## Description
Parses a json into a list of target business model.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| json | string | Json to parse |
| persist | boolean | indicates if the instance should be persisted, default: false |
| businessModel | Business Model | target business model |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | List | list of instances of business model |

**/
export default class JsonToObjectList extends JsonToObject {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} json
     * @param {InstanceTag} businessModel
     * @param {boolean} persist
     * @param {function(array)} setList
     * @param {function()} forwardEvent
     */
    onUpdate(context, [json, businessModel, persist], [forwardEvent, setList]) {
        const transaction = context.getTransaction();
        transaction.persist(persist);

        const parsedJson = JSON.parse(json);
        const dataArray = parsedJson instanceof Array ? parsedJson : [parsedJson];

        const db = DBView.get();
        // TODO should add BusinessModel in public api?
        const existingDataModels = db.getRelated('016324fde11a836f76c2', BusinessObject.modelRel.getInverse());
        const mappingModels = new Map();


        existingDataModels.forEach((dm) => {
            const name = db.name(dm);
            mappingModels.set(name, dm);
        });

        const instanceTags = new Map();

        const result = [];

        dataArray.forEach((data) => {
            // Check if the instance exists already in db or if it has been processed before to avoid duplication
            const instance = transaction.create((businessModel));
            this.parseProperties(db, transaction, instance, businessModel, data, mappingModels, instanceTags);
            this.parseRelations(db, transaction, instance, businessModel, data, mappingModels, instanceTags);
            result.push(instance);
        });

        transaction.execute((success) => {
            if (success) {
                setList(result);
            }
            forwardEvent();
        });

    }
}

registerBrick('0175b6a2f27ee65c01bd', JsonToObjectList);
