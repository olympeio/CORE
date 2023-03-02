import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { Parser } from '@json2csv/plainjs';
import { getLogger } from 'logging';

export default class JSONToCSV extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} json
     * @param {function(*)} setErrorFlow
     * @param {function(string)} setCsv
     */
    update(context, [json], [setErrorFlow, setCsv]) {
        try {
            const jsonList = JSON.parse(json);
            setCsv(new Parser().parse(jsonList));
        } catch (error) {
            getLogger('JSONToCSV').error('Failed at JSONToCSV' + error.message);
            setErrorFlow(ErrorFlow.create('Failed at JSONToCSV' + error.message, 1));
        }
    }
}

registerBrick('017d9071a2a9e5894a96', JSONToCSV);
