import {CloudObject, Brick, registerBrick, ErrorFlow} from 'olympe';
import {handleExcelToJSON, handleJsonToCloudObjects} from './helpers/dataFormatHandlers';

export default class ExcelToCloudObjects extends Brick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} excelFile
     * @param {CloudObject} dataType
     * @param {string} sheetName
     * @param {boolean} persist
     * @param {string} range
     * @param {function()} forwardEvent
     * @param {function(CloudObject | CloudObject[])} setCloudObjects
     */
    async update($, [excelFile, dataType, sheetName, persist, range], [forwardEvent, setCloudObjects]) {
        try {
            const json = await handleExcelToJSON(excelFile, sheetName, range);
            const objectsList = handleJsonToCloudObjects(json, dataType, persist);
            setCloudObjects(objectsList);
            forwardEvent();
        } catch (error) {
            throw ErrorFlow.create(`Excel To CloudObjects: Error converting Excel to Cloud Objects: ${error.message}`, 1);
        }
    }
}

registerBrick('018ecca79692eb5c229e', ExcelToCloudObjects);
