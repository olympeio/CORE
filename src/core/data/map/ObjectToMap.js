import {Brick, CloudObject, ErrorFlow, registerBrick} from 'olympe';
import {getLogger} from "logging";

export default class ObjectToMap extends Brick {


    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {CloudObject} object
     * @param {function()} forwardEvent
     * @param {function(Map)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [object], [forwardEvent, setResult, setErrorFlow]) {
        const logger = getLogger('ObjectToMap');

        try {
            if (object instanceof CloudObject) {
                const objectEntries = Object.entries(object.toObject(true, true));
                setResult(new Map(objectEntries));
                forwardEvent();
            } else {
                logger.error('Provided input is not an object');
                setErrorFlow(ErrorFlow.create('Provided object is not a validCloud Object', 1));
            }
        } catch (e) {
            setErrorFlow(ErrorFlow.create('Provided object is not a valid Cloud Object: ' + e.message, 2));
        }
    }
}

registerBrick('01838977742c933a1bb1', ObjectToMap);