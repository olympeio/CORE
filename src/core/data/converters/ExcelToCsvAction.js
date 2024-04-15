import {ActionBrick, registerBrick} from 'olympe';
import {handleError} from './helpers/handleError';
import {handleExcelToCSV} from './helpers/dataFormatHandlers';

export default class ExcelToCSV extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} source
     * @param {string} sheetName
     * @param {string} separator
     * @param {function()} forwardEvent
     * @param {function(File)} setResult
     */
    async update($, [source, sheetName, separator], [forwardEvent, setResult]) {
        const componentName = 'Excel To CSV';
        try {
            const result = await handleExcelToCSV($, source, sheetName, separator);
            setResult(result);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting Excel to CSV: ${error.message}`, error);
        }
    }
}

registerBrick('018ecd37ac6f34045515', ExcelToCSV);
