import {ActionBrick, ErrorFlow, registerBrick} from 'olympe';
import {handleJsonToExcel} from './helpers/dataFormatHandlers';
import CloudObjectsToJSONAction from "./CloudObjectsToJSONAction";

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
    async update($, [cloudObjects, excelFileName], [forwardEvent, setResult]) {
        try {
            const json = CloudObjectsToJSONAction.convertCloudObjectsToJson(cloudObjects, false);
            const file = await handleJsonToExcel(json, excelFileName);
            setResult(file);
            forwardEvent();
        } catch (error) {
            throw ErrorFlow.create(`CloudObject To Excel: Error converting Cloud Object to Excel: ${error.message}`, 1);
        }
    }
}

registerBrick('018ec6e2210b9f202b73', CloudObjectToExcel);
