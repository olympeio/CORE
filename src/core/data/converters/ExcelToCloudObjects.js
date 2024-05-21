import {ActionBrick, registerBrick} from 'olympe';
import {handleError} from './helpers/handleError';
import {handleExcelToJSON, handleJsonToCloudObjects} from './helpers/dataFormatHandlers';

export default class ExcelToCloudObjects extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} excelFile
     * @param {Type} dataType
     * @param {string} sheetName
     * @param {boolean} persist
     * @param {string} range
     * @param {function()} forwardEvent
     * @param {function(ListDef)} setCloudObjects
     */
    async update($, [excelFile, dataType, sheetName, persist, range], [forwardEvent, setCloudObjects]) {
        const componentName = 'Excel To Cloud Objects';
        try {
            const json = await handleExcelToJSON(excelFile, sheetName, range);
            const objectsList = handleJsonToCloudObjects(json, dataType, persist, componentName);
            setCloudObjects(objectsList);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting Excel to Cloud Objects`, error);
        }
    }
}

registerBrick('018ecca79692eb5c229e', ExcelToCloudObjects);
