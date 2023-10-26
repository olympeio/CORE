import { Brick, BrickContext, registerBrick, ErrorFlow, File as OFile } from 'olympe';
import { getLogger } from 'logging';
import * as XLSX from 'xlsx';
import {merge} from "rxjs";
import {map} from "rxjs/operators";

export default class ExcelToJSON extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const inputs = this.getInputs();
        return merge(...inputs.map((i) => $.observe(i)))
            .pipe(map((value) => {
                return $.get(inputs[0]) === null ? null : inputs.map((i) => $.get(i));
            }));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} source
     * @param {string} sheetName
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, sheetName], [setResult, setErrorFlow]) {
        const logger = getLogger('Excel to JSON');
        if (source instanceof OFile) {
            source.getContentAsBinary(
                (data) => this.convertToJSON($, data, sheetName, setResult, setErrorFlow, logger),
                (message) => {
                    logger.error('Error while reading content as binary: ' + message);
                    setErrorFlow(ErrorFlow.create('Error while reading content as binary: ' + message, 1));
                });
        } else {
            logger.error('Provided source is not a File');
            setErrorFlow(ErrorFlow.create('Provided source is not a File', 1));
        }
    }

    /**
     * @param {!BrickContext} $
     * @param {!ArrayBuffer} data
     * @param {string} sheetName
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     * @param {log.Logger} logger
     */
    convertToJSON($, data, sheetName, setResult, setErrorFlow, logger) {
        try {
            const worksheet = XLSX.read(data, {
                type: 'buffer',
                cellDates: true,
            });
            const finalSheetName = sheetName !== null && sheetName.trim() !== '' ? sheetName : worksheet.SheetNames[0];
            const json = XLSX.utils.sheet_to_json(worksheet.Sheets[finalSheetName]);

            if (json.length === 0) {
                const errorMsg = `${sheetName !== '' ? 'Cannot read from sheet "' + sheetName + '"' : 'Cannot read from first sheet of provided file'}`
                logger.error(errorMsg);
                setErrorFlow(ErrorFlow.create(errorMsg, 1));

            } else {
                setResult(json);
            }
        } catch (error) {
            logger.error('Error while converting content to JSON: ' + error.message);
            setErrorFlow(ErrorFlow.create('Error while converting content to JSON: ' + error.message, 1));
        }
    }
}

registerBrick('0184be408636ccec07c3', ExcelToJSON);
