import { ActionBrick, registerBrick } from 'olympe';

export default class GetFromMap extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Map} map
     * @param {string} key
     * @param {function()} forwardEvent
     * @param {function(Map)} setMap
     * @param {function(*)} setValue
     */
    update(context, [map, key], [forwardEvent, setMap, setValue]) {
        // Guards
        if(!(map instanceof Map)) {
            throw new Error('TypeError: the map should be of type Map');
        }
        if(typeof key !== 'string') {
            throw new Error(`Provided key is not a string: ${key}`);
        }

        // get the value
        setValue(map.get(key) ?? null);
        setMap(map);
        forwardEvent();
    }
}

registerBrick('017a0e976061af25b22e', GetFromMap);
