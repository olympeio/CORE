import {ActionBrick, registerBrick, BrickContext, ErrorFlow} from 'olympe';
import {getLogger} from "logging";

export default class JSONToMap extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!string|!Object} source
     * @param {function()} forwardEvent
     * @param {function(!Map)} setMap
     * @param {function(*)} setErrorFlow
     */
    update($, [source], [forwardEvent, setMap, setErrorFlow]) {
        const logger = getLogger('JSONtoMap');
        /**
         * @param {!Object} o 
         * @return {*}
         */
        const toMap = o => {
            if (Array.isArray(o)) {
                const newArray = [];
                for (const elt of o) {
                    newArray.push(toMap(elt));
                }
                return newArray;
            }
            if (typeof o === 'object') {
                const newMap = new Map();
                for (const entry of Object.entries(o)) {
                    newMap.set(entry[0], toMap(entry[1]));
                }
                return newMap;
            }
            return o;
        };
        if (typeof source !== 'object' && typeof source !== 'string') {
            logger.error('Provided input is not an object');
            setErrorFlow(ErrorFlow.create('Provided source is not an object or a string', 1));
            return;
        }

        try {
            const result = typeof source === 'string' ? JSON.parse(source) : source;
            if (result !== null) {
                setMap(toMap(result));
                forwardEvent();
            } else {
                logger.error('Parsed result is null');
                setErrorFlow(ErrorFlow.create('Error while parsing the source string', 2));
            }
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Error while parsing the source string ' + e.message, 3));
        }
    }
}

registerBrick('0183896c8ad7316948a1', JSONToMap);