import {Brick, BrickContext, ErrorFlow, registerBrick} from 'olympe';
import CloudObjectToJSONAction from './CloudObjectsToJSONAction';

export default class CloudObjectToJSON extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {boolean} propertiesOnly
     * @param {function(Object | Object[])} setResult
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update($, [source, propertiesOnly], [setResult, setErrorFlow]) {
        try {
            setResult(CloudObjectToJSONAction.convertCloudObjectsToJson(source, !propertiesOnly));
        } catch(e) {
            setErrorFlow(ErrorFlow.create(`CloudObject To JSON: ${e.message}`, 1));
        }
    }
}

registerBrick('017fc0743bebe690bfef', CloudObjectToJSON);
