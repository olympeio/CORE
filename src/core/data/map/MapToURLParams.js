import { Brick, registerBrick } from 'olympe';

export default class MapToURLParams extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Map} paramsMap
     * @param {function()} forwardEvent
     * @param {function(string)} setParamsString
     */
    update($, [paramsMap], [forwardEvent, setParamsString]) {
        // Guards
        if(!(paramsMap instanceof Map)) {
            throw new Error('TypeError: the paramsMap should be of type Map');
        }

        let paramsString = '';
        paramsMap.forEach((value, key) => {
            if(value !== undefined && value !== null) {
                paramsString += `&${key}=${encodeURIComponent(value)}`;
            }
        });
        if(paramsString.startsWith('&')) {
            paramsString=paramsString.substring(1);
        }
        setParamsString(paramsString);
        forwardEvent();
    }
}

registerBrick('017ff8d3a788809cb5d9', MapToURLParams);
