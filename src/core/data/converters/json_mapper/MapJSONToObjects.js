import {ActionBrick, registerBrick, BrickContext, CloudObject, Transaction} from 'olympe';
import {getMapper} from './MapperConfig';

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
     * @param {boolean} persist
     */
    async update(_$, [json, objectType, mapperConfig, autoMapping, unique, persist], [forwardEvent, setObjects]) {
        // Inputs guard
        if (!objectType) {
            throw new Error('object type is not defined');
        }

        if (!mapperConfig && !autoMapping) {
            throw new Error('mapper config can only be undefined if auto mapping is set to true');
        }

        // Get data from JSON
        let data = [];
        try {
            const safeJson = typeof json === 'string' ? json : JSON.stringify(json);
            data = JSON.parse(safeJson);
            if (!Array.isArray(data)) {
                data = [data];
            }
        } catch (e) {
            throw new Error(`cannot parse JSON: ${e.message}`);
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

        if (persist) {
            const transaction = new Transaction(true);
            tags.forEach((tag) => transaction.persistInstance(tag, true));

            try {
                await transaction.execute();
            } catch(e) {
                throw new Error('Transaction failed: ' + e);
            }
        }

        setObjects(objects);
        forwardEvent();
    }
}

registerBrick('0188202f5925ed8be613', MapJSONToObjects);
