import { ActionBrick, registerBrick} from 'olympe';

export default class GetMapEntries extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Map | !Object} map
     * @param {function()} forwardEvent
     * @param {function(!Array<Object>)} setList
     */
    update(context, [map], [forwardEvent, setList]) {
        const createEntry = (key, value) => {
            return {
                key: key,
                value: value,
            };
        }
        let list;
        if (map instanceof Map) {
            list = [];
            map.forEach((value, key) => {
                list.push(createEntry(key, value));
            });
        } else if (map instanceof Object) {
            list = Object.entries(map).map(([key, value]) => createEntry(key, value));
        } else {
            throw new Error('Only support Map and plain JS Object');
        }

        setList(list);
        forwardEvent();
    }
}

registerBrick('017bc4cf2ff993582f03', GetMapEntries);
