import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';
import * as XLSX from 'xlsx';

export default class JSONToCSV extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {function(string)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source], [setResult, setErrorFlow]) {
        const logger = getLogger('JSON To CSV');

        // Guards
        if (typeof source !== 'object' && typeof source !== 'string') {
            logger.error('Provided source is not array or string');
            return;
        }

        try {
            const json = (typeof source === 'string') ? JSON.parse(source) : source;

            if (!Array.isArray(json)) {
                logger.error('Provided source is not array object or string');
                setErrorFlow(ErrorFlow.create('Provided source is not array object or string', 1));
            } else {
                const xlsx = XLSX.utils.json_to_sheet(json);
                const csv = XLSX.utils.sheet_to_csv(xlsx);
                setResult(csv);
            }
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source: ' + e.message, 1));
        }
    }
}

registerBrick('017fbc2cb6fc62c9002a', JSONToCSV);
