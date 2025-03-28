import {Brick, registerBrick} from 'olympe';
import {handleError} from './helpers/handleError';
import {handleJsonToXML} from './helpers/dataFormatHandlers';

export default class JSONToXML extends Brick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Object} source
     * @param {string} rootTag
     * @param {function()} forwardEvent
     * @param {function(string)} setResult
     */
    update($, [source, rootTag], [forwardEvent, setResult]) {
        const componentName = 'JSON to XML';
        try {
            const xml = handleJsonToXML(source, rootTag);
            setResult(xml);
            forwardEvent();
        } catch (error) {
            handleError(componentName, `Error converting JSON to XML: ${error.message}`, error);
        }
    }
}

registerBrick('018ed05890a0e7789b56', JSONToXML);
