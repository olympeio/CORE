import {ActionBrick, registerBrick} from 'olympe';
import {handleError} from './helpers/handleError';
import {handleCSVToJSON} from './helpers/dataFormatHandlers';

export default class CSVToJSON extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} source
     * @param {function()} forwardEvent
     * @param {function(ListDef)} setResult
     */
    async update($, [source], [forwardEvent, setResult]) {
        const componentName = 'CSV To JSON';
        try {
            const json = await handleCSVToJSON(source);
            setResult(json);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting CSV to JSON: ${error.message}`, error);
        }
    }
}

registerBrick('018ecc9c95e6c434a6e3', CSVToJSON);
