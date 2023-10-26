import { ActionBrick, registerBrick } from 'olympe';
import {getLogger} from "logging";

export default class MapHasKey extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Map} map
     * @param {string} key
     * @param {function()} forwardEvent
     * @param {function(Map)} setMap
     * @param {function(boolean)} setHasKey
     */
    update(context, [map, key], [forwardEvent, setMap, setHasKey]) {
        // Guards
        if(!(map instanceof Map)) {
            getLogger('MapHasKey').error('TypeError: the map should be of type Map');
            return;
        }
        if(typeof key !== 'string') {
            getLogger('MapHasKey').error('Provided key is not a string:', key);
            return;
        }

        // check if key exists
        setHasKey(map.has(key));
        setMap(map);
        forwardEvent();
    }
}

registerBrick('017a0e98e5d6014b1669', MapHasKey);
