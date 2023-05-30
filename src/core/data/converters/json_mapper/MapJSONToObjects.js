import { ActionBrick, registerBrick, BrickContext, CloudObject } from 'olympe';
import { getLogger } from 'logging';
import { getMapper } from './MapperConfig';

export default class MapJSONToObjects extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} _$
     * @param {string | Object | Array} json
     * @param {CloudObject} objectType
     * @param {MapperConfig} mapperConfig
     * @param {boolean} autoMapping
     * @param {boolean} unique
     * @param {function()} forwardEvent
     * @param {function(!Array<CloudObject>)} setObjects
     */
    update(_$, [json, objectType, mapperConfig, autoMapping, unique], [forwardEvent, setObjects]) {
        const logger = getLogger('Map JSON To Objects');

        // Inputs guard
        if (!objectType) {
            logger.warn('object type is not defined');
            return;
        }
        if (!mapperConfig && !autoMapping) {
            logger.warn('mapper config can only be undefined if auto mapping is set to true');
            return;
        }

        // Get data from JSON
        let data = [];
        try {
            const safeJson = typeof json === 'string' ? json : JSON.stringify(json);
            data = JSON.parse(safeJson);
            if (!Array.isArray(data)) {
                data = [data];
            }
        } catch(e) {
            logger.error(`cannot parse JSON: ${e.message}`);
        }

        // Get the mapper and map data to objects
        const objects = [];
        const tags = new Set();
        const mapper = getMapper(objectType, mapperConfig, autoMapping);
        data.forEach(objectData => {
            const objectTag = mapper(objectData);
            if (!unique || !tags.has(objectTag)) {
                tags.add(objectTag);
                objects.push(CloudObject.get(objectTag));
            }
        });
        setObjects(objects);
        forwardEvent();
    }
}

registerBrick('0188202f5925ed8be613', MapJSONToObjects);
