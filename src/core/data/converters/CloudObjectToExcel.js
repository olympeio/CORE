import {ActionBrick, registerBrick} from 'olympe';
import {handleCloudObjectToJson, handleJsonToExcel} from './helpers/dataFormatHandlers';
import {handleError} from './helpers/handleError';

export default class CloudObjectToExcel extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {ListDef} cloudObjects
     * @param {string} excelFileName
     * @param {function()} forwardEvent
     * @param {function(File)} setResult
     */
    update($, [cloudObjects, excelFileName], [forwardEvent, setResult]) {
        const componentName = 'Cloud Object To Excel';

        try {
            const json = handleCloudObjectToJson(cloudObjects);
            if (json) {
                const file = handleJsonToExcel(json, excelFileName);
                setResult(file);
                forwardEvent();
            }
        } catch (error) {
            handleError(componentName, `Error converting Cloud Object to Excel`, error);
        }
    }
}

registerBrick('018ec6e2210b9f202b73', CloudObjectToExcel);
