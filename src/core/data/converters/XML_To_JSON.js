import { Brick, BrickContext, registerBrick, ErrorFlow, File as OFile } from 'olympe';
import { getLogger } from 'logging';
import { XMLParser } from 'fast-xml-parser';

export default class XMLToJSON extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    async update($, [source], [setResult, setErrorFlow]) {
        const logger = getLogger('JSON To XML');

        let xml;
        if (source instanceof OFile) {
            try {
                xml = await source.getContentAsString();
            } catch (error) {
                throw ErrorFlow.create('Failed to retrieve the file content: ' + error.message, 1);
            }
        } else if (typeof source === 'string') {
            xml = source;
        } else {
            logger.error('Provided source is not a string or a File');
            return;
        }

        const parser = new XMLParser();

        try {
            const json = parser.parse(xml);
            setResult(json)
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source: ' + e.message, 1));
        }
    }
}

registerBrick('017fbc594a3b3b32e812', XMLToJSON);
