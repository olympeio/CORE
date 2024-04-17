import {ActionBrick, registerBrick} from 'olympe';
import {handleError} from './helpers/handleError';
import {handleCSVToJSON, handleJsonToCloudObjects} from './helpers/dataFormatHandlers';

export default class CSVToCloudObjects extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} CSVFile
     * @param {Type} dataType
     * @param {boolean} persist
     * @param {function()} forwardEvent
     * @param {function(ListDef)} setCloudObjects
     */
    async update($, [CSVFile, dataType, persist], [forwardEvent, setCloudObjects]) {
        const componentName = 'CSV To Cloud Objects';
        try {
            const json = await handleCSVToJSON(CSVFile);
            const objectsList = handleJsonToCloudObjects(json, dataType, persist, componentName);
            setCloudObjects(objectsList);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting CSV to Cloud Objects: ${error.message}`, error);
        }
    }
}

registerBrick('018ecae7fa6a15640ad0', CSVToCloudObjects);
