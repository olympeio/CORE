import { ActionBrick, registerBrick } from 'olympe';
import {getLogger} from "logging";

export default class GetMapSize extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Map} map
     * @param {function()} forwardEvent
     * @param {function(Map)} setMap
     * @param {function(number)} setSize
     */
    update(context, [map], [forwardEvent, setMap, setSize]) {
        // Guards
        if(!(map instanceof Map)) {
            getLogger('GetMapSize').error('TypeError: the map should be of type Map');
            return;
        }

        // sample the size
        setSize(map.size);
        setMap(map);
        forwardEvent();
    }
}

registerBrick('017a0e96184ab695b1f6', GetMapSize);
