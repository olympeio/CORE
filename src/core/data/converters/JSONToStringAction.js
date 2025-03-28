import {Brick, registerBrick} from 'olympe';
import {handleJsonToString} from './helpers/dataFormatHandlers';
import {handleError} from './helpers/handleError';

export default class JSONToString extends Brick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Object} source
     * @param {number} spaces
     * @param {function()} forwardEvent
     * @param {function(string)} setResult
     */
    update($, [source, spaces], [forwardEvent, setResult]) {
        const componentName = 'JSON To String';
        try {
            const json = handleJsonToString(source, spaces);
            setResult(json);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting JSON to string`, error);
        }
    }
}

registerBrick('018ed04946c9b8e3e98c', JSONToString);
