import { Brick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';
import { XMLBuilder } from 'fast-xml-parser';

export default class JSONToXML extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {string} rootTag
     * @param {function(string)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, rootTag], [setResult, setErrorFlow]) {
        const logger = getLogger('JSON To XML');

        // Guards
        if (typeof source !== 'object' && typeof source !== 'string') {
            logger.error('Provided source is not object or string');
            return;
        }

        if (typeof rootTag !== 'string') {
            logger.error('Provided rootTag is not a string');
            return;
        }

        const builder = new XMLBuilder();

        let json;
        try {
            json = (typeof source === 'string') ? JSON.parse(source) : source;
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source: ' + e.message, 1));
            return;
        }

        if (Array.isArray(json)) {
            logger.error('Json supposed to be object, not array');
            setErrorFlow(ErrorFlow.create('Json supposed to be object, not array', 1));
        } else {
            const wrappedJson = {};
            wrappedJson[rootTag] = json;
            const xml = builder.build(wrappedJson);
            setResult(xml);
        }
    }
}

registerBrick('017fbc4a23d3b8b55945', JSONToXML);
