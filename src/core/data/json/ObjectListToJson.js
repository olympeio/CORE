
import { ActionBrick, registerBrick, Context, DBView, ListDef } from 'olympe';

/**
## Description
Parses a list of object into a json.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | List | A list of instances of a BusinessModel. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Object | String | stringified Json |

**/
export default class ObjectListToJson extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef|!Array} list
     * @param {function(string)} setJson
     * @param {function()} dispatchControlFlow
     */
    onUpdate(context, [list], [setJson, dispatchControlFlow]) {
        const db = DBView.get();
        const json = [];

        if (list instanceof ListDef) {
            list.forEachCurrentValue((item) => {
                json.push(this.parseProperties(db, item));
            });
        } else {
            list.forEach((item) => {
                json.push(this.parseProperties(db, item));
            });
        }

        setJson(JSON.stringify(json));
        dispatchControlFlow();
    }
}

registerBrick('0175b6513d6d8f1e484e', ObjectListToJson);
