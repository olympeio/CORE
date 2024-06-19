import {ActionBrick, ErrorFlow, registerBrick} from 'olympe';
import {handleExcelToCSV} from './helpers/dataFormatHandlers';

export default class ExcelToCSV extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} source
     * @param {string} sheetName
     * @param {string} separator
     * @param {?string} range
     * @param {function()} forwardEvent
     * @param {function(File)} setResult
     */
    async update($, [source, sheetName, separator, range], [forwardEvent, setResult]) {
        try {
            setResult(await handleExcelToCSV(source, sheetName, separator, range));
            forwardEvent();
        } catch (error) {
            throw ErrorFlow.create(`Excel To CSV: Error converting Excel to CSV: ${error.message}`, 1);
        }
    }
}

registerBrick('018ecd37ac6f34045515', ExcelToCSV);
