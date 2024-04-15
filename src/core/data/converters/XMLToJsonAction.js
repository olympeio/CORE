import {ActionBrick, registerBrick} from 'olympe';
import {handleError} from './helpers/handleError';
import {handleXMLToJson} from './helpers/dataFormatHandlers';

export default class XMLToJSON extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Object} source
     * @param {function()} forwardEvent
     * @param {function(*)} setResult
     */
    async update($, [source], [forwardEvent, setResult]) {
        const componentName = 'XML to JSON';
        try {
            const json = await handleXMLToJson(source);
            setResult(json);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting XML to JSON: ${error.message}`, error);
        }
    }
}

registerBrick('018ed062e5bc672bb648', XMLToJSON);
