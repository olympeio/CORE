import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { Parser } from 'json2csv';
import { getLogger } from 'logging';

export default class JSONToCSV extends Brick {

    /**
     * Executed every time an input (json) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!BrickContext} context
     * @param {string} json
     * @param {function(*)} setErrorFlow
     * @param {function(string)} setCsv
     */
    onUpdate(context, [json], [setErrorFlow, setCsv]) {
        try {
            const jsonList = JSON.parse(json);
            const parser = new Parser();
            const csv = parser.parse(jsonList);
            setCsv(csv);
        } catch (error) {
            getLogger('JSONToCSV').error('Failed at JSONToCSV' + error.message);
            setErrorFlow(ErrorFlow.create('Failed at JSONToCSV' + error.message, 1));
        }
    }
}

registerBrick('017d9071a2a9e5894a96', JSONToCSV);
