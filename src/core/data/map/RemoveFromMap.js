import { Brick, registerBrick } from 'olympe';

export default class RemoveFromMap extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Map} map
     * @param {string} key
     * @param {function()} forwardEvent
     * @param {function(Map)} setMap
     * @param {function(*)} setRemovedObject
     */
    update(context, [map, key], [forwardEvent, setMap, setRemovedObject]) {
        // Guards
        if(!(map instanceof Map)) {
            throw new Error('TypeError: the map should be of type Map');
        }
        if(typeof key !== 'string') {
            throw new Error('Provided key is not a string:', key);
        }

        // get and delete the object from the map
        const object = map.get(key);
        if(object !== undefined) {
            map.delete(key);
            setRemovedObject(object);
        } else {
            setRemovedObject(null);
        }
        setMap(map);
        forwardEvent();
    }
}

registerBrick('017a0b7789afa7d361a1', RemoveFromMap);
