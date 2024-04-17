import {BrickContext, registerBrick, ListDef, ActionBrick} from 'olympe';
import {handleCloudObjectToJson, handleExcelToCSV, handleJsonToExcel} from './helpers/dataFormatHandlers';
import {handleError} from './helpers/handleError';

export default class CloudObjectToCSV extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {ListDef} source
     * @param {string} excelFileName
     * @param {function()} forwardEvent
     * @param {function(File)} setResult
     */
    async update($, [source, excelFileName], [forwardEvent, setResult]) {
        const componentName = 'Cloud Object To CSV';
        try {
            const json = handleCloudObjectToJson(source);

            if (json) {
                const file = handleJsonToExcel(json, excelFileName);
                if (file) {
                    const result = await handleExcelToCSV($, file);
                    setResult(result);
                    forwardEvent();
                }
            }
        } catch (error) {
            handleError(componentName, `Error converting Cloud Objects to CSV: ${error.message}`, error);
        }
    }
}

registerBrick('018eb82110167f8587f5', CloudObjectToCSV);
