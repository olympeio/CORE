import {CloudObject, ActionBrick, registerBrick, ErrorFlow} from 'olympe';
import {handleCSVToJSON, handleJsonToCloudObjects} from './helpers/dataFormatHandlers';

export default class CSVToCloudObjects extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} CSVFile
     * @param {CloudObject} dataType
     * @param {boolean} persist
     * @param {function()} forwardEvent
     * @param {function(CloudObject | CloudObject[])} setCloudObjects
     */
    async update($, [CSVFile, dataType, persist], [forwardEvent, setCloudObjects]) {
        try {
            const json = await handleCSVToJSON(CSVFile);
            const objectsList = handleJsonToCloudObjects(json, dataType, persist);
            setCloudObjects(objectsList);
            forwardEvent();
        } catch (error) {
            throw ErrorFlow.create(`CSV To Cloud Objects: Error converting CSV to Cloud Objects: ${error.message}`, 1);
        }
    }
}

registerBrick('018ecae7fa6a15640ad0', CSVToCloudObjects);
