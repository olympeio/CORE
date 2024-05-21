import { Brick, BrickContext, registerBrick } from 'olympe';
import {merge} from 'rxjs';
import {map} from 'rxjs/operators';
import {handleExcelToJSON} from './helpers/dataFormatHandlers';
import { handleError } from './helpers/handleError';

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
     * @param {string} range
     * @param {function(*)} setResult
     */
    async update($, [source, sheetName, range], [setResult]) {
        const componentName = 'Excel To JSON';
        try {
            const result = await handleExcelToJSON(source, sheetName, range);
            setResult(result);
        } catch (error) {
            handleError(componentName, `Error converting Excel to JSON`, error);
        }
    }
}

registerBrick('0184be408636ccec07c3', ExcelToJSON);
