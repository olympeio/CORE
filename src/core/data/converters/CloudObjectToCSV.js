import {BrickContext, registerBrick, ListDef, ActionBrick, ErrorFlow} from 'olympe';
import {handleExcelToCSV, handleJsonToExcel} from './helpers/dataFormatHandlers';
import CloudObjectsToJSONAction from "./CloudObjectsToJSONAction";

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
        try {
            const json = CloudObjectsToJSONAction.convertCloudObjectsToJson(source, false);
            const excelFile = await handleJsonToExcel(json, excelFileName);
            const csvFile = await handleExcelToCSV(excelFile);
            setResult(csvFile);
            forwardEvent();
        } catch (error) {
            throw ErrorFlow.create(`CloudObject To CSV: Error converting Cloud Objects to CSV: ${error.message}`, 1);
        }
    }
}

registerBrick('018eb82110167f8587f5', CloudObjectToCSV);
