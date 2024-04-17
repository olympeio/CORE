import {ActionBrick, registerBrick} from 'olympe';
import {handleCloudObjectToJson} from './helpers/dataFormatHandlers';
import {handleError} from './helpers/handleError';

export default class CloudObjectsToJSON extends ActionBrick {
    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {ListDef} cloudObject
     * @param {boolean=} propertiesOnly
     * @param {function()} forwardEvent
     * @param {function(*)} setResult
     */
    update($, [cloudObject, propertiesOnly], [forwardEvent, setResult]) {
        const componentName = 'Cloud Object To JSON';
        try {
            const json = handleCloudObjectToJson(cloudObject, propertiesOnly);
            if (json) {
                setResult(json);
                forwardEvent();
            }
        } catch (error) {
            handleError(componentName, `Error converting Cloud Objects to JSON`, error);
        }
    }
}

registerBrick('018ecac077f5ecb07375', CloudObjectsToJSON);
