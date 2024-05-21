import {Brick, BrickContext, registerBrick} from 'olympe';
import {merge} from 'rxjs';
import {map} from 'rxjs/operators';
import {handleExcelToCSV} from './helpers/dataFormatHandlers';
import { handleError } from './helpers/handleError';

export default class ExcelToCSV extends Brick {

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
     * @param {string} separator
     * @param {string} range
     * @param {function(File)} setResult
     */
    async update($, [source, sheetName, separator, range], [setResult]) {
        const componentName = 'Excel To CSV';
        try {
            const result = await handleExcelToCSV($, source, sheetName, separator, range);
            setResult(result);
        } catch (error) {
            handleError(componentName, `Error converting Excel to CSV`, error);
        }
    }
}

registerBrick('018484fe35c7283a093e', ExcelToCSV);
