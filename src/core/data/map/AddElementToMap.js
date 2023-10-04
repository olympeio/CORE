import { ActionBrick, registerBrick } from 'olympe';
import {getLogger} from "logging";

export default class AddElementToMap extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Map} map
     * @param {string} key
     * @param {*} value
     * @param {function()} forwardEvent
     * @param {function(Map)} setMap
     */
    update(context, [map, key, value], [forwardEvent, setMap]) {
        // Guards
        if(map && !(map instanceof Map)) {
            getLogger('AddElementToMap').error('TypeError: the map should be of type Map');
            return;
        }
        if(typeof key !== 'string') {
            getLogger('AddElementToMap').error('Provided key is not a string:', key);
            return;
        }

        // Create a new map if no map is provided
        if(!map) {
            map = new Map();
        }

        // Set the key/value
        map.set(key, value);
        setMap(map);
        forwardEvent();
    }
}

registerBrick('017a0b2fd7b4c31fd9a1', AddElementToMap);
