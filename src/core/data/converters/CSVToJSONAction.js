import {ActionBrick, ErrorFlow, registerBrick} from 'olympe';
import {handleCSVToJSON} from './helpers/dataFormatHandlers';

export default class CSVToJSON extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {File} source
     * @param {function()} forwardEvent
     * @param {function(Object | Object[])} setResult
     */
    async update($, [source], [forwardEvent, setResult]) {
        try {
            setResult(await handleCSVToJSON(source));
            forwardEvent();
        } catch (error) {
            throw ErrorFlow.create(`CSV To JSON: Error converting CSV to JSON: ${error.message}`, 1);
        }
    }
}

registerBrick('018ecc9c95e6c434a6e3', CSVToJSON);
