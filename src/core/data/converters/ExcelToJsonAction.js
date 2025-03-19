import {Brick, registerBrick} from 'olympe';
import {handleError} from './helpers/handleError';
import {handleExcelToJSON} from './helpers/dataFormatHandlers';

export default class ExcelToJSON extends Brick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} source
     * @param {string} sheetName
     * @param {string} range
     * @param {function()} forwardEvent
     * @param {function(ListDef)} setOutput
     */
    async update($, [source, sheetName, range], [forwardEvent, setOutput]) {
        const componentName = 'Excel To JSON';
        try {
            const result = await handleExcelToJSON(source, sheetName, range);
            setOutput(result);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting Excel to JSON`, error);
        }
    }
}

registerBrick('018ed03ddc02807d4e4b', ExcelToJSON);
