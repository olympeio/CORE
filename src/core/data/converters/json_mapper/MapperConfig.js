import { register, CloudObject, defineProperty, Query, Transaction } from 'olympe';
import { getLogger } from 'logging';
import { JSONPath } from 'jsonpath-plus';

/**
 * @extends {CloudObject}
 */
export default class MapperConfig extends CloudObject { /* empty */ };

// Hardcoded tags
register('018220ebbffb8198c669', MapperConfig);
MapperConfig.pathProp = defineProperty('018220ebe8b017c4f973');
MapperConfig.propertyProp = defineProperty('018220ebf161aae84548');
MapperConfig.useAsKeyProp = defineProperty('018221101b2c55d03516');

/**
 * Mappers cache: key -> mapper function
 * @type {!Map<string, function(boolean, !Transaction, !Object):string>}
 */
const mappersCache = new Map();

/**
 * Objects cache: key -> tag
 * @type {!Map<string, string>}
 */
const objectsCache = new Map();

/**
 * @param {!CloudObject} objectType
 * @param {MapperConfig} mapperConfig
 * @param {boolean} autoMapping
 * @return {function(!Object):string}
 */
export function getMapper(objectType, mapperConfig, autoMapping) {
    const mapperKey = `${objectType.getTag()}.${mapperConfig?.getTag() ?? 'null'}`;
    let mapper = mappersCache.get(mapperKey);
    if (!mapper) {
        mapper = createMapper(objectType, mapperConfig);
        mappersCache.set(mapperKey, mapper);
    }
    return mapper.bind(null, autoMapping);
}

/**
 * @param {!CloudObject} objectType
 * @param {MapperConfig} mapperConfig
 * @return {function(boolean, !Transaction, !Object):string}
 */
function createMapper(objectType, mapperConfig) {
    const logger = getLogger('Map JSON To Objects');
    const fromJSON = (path, data) => JSONPath({path: path, json: data, wrap: false});

    // Split config keys and data
    const config = mapperConfig ? Query.instancesOf(mapperConfig, false).executeFromCache() : [];
    const configKeys = config.filter(mapping => mapping.get(MapperConfig.useAsKeyProp));
    const configData = config.filter(mapping => !mapping.get(MapperConfig.useAsKeyProp));

    // Map config properties name to tags
    const objectTypeProperties = objectType.follow(CloudObject.propertyRel).executeFromCache().toArray();
    const propertiesNameToTag = new Map(objectTypeProperties.map(property => [property.name(), property.getTag()]));

    // Find properties that are not in the config for an auto 1-to-1 mapping
    const namesInConfig = config.map(mapping => mapping.get(MapperConfig.propertyProp));
    const propertiesLeft = Array.from(propertiesNameToTag).filter(([name]) => !namesInConfig.includes(name));

    // Return mapper function
    const keyPrefix = `${objectType.getTag()}.`;
    return (autoMapping, data) => {
        const transaction = new Transaction(false);

        // Get the object key from data
        const objectKey = keyPrefix + configKeys.map(mapping => fromJSON(mapping.get(MapperConfig.pathProp), data)).join('.');

        // Check cache for the object
        let objectTag = objectKey !== keyPrefix ? objectsCache.get(objectKey) : null;

        // If in cache -> update object if necessary
        if (objectTag && CloudObject.exists(objectTag)) {
            const object = CloudObject.get(objectTag);
            configData.forEach(mapping => {
                const propertyName = mapping.get(MapperConfig.propertyProp);
                const propertyTag = propertiesNameToTag.get(propertyName);
                if (!propertyTag) {
                    logger.warn(`mapping to property name '${propertyName}' not found for object type '${objectType.getTag()}'`);
                    return;
                }
                const dataValue = fromJSON(mapping.get(MapperConfig.pathProp), data);
                if (dataValue !== object.get(propertyTag)) {
                    transaction.update(objectTag, propertyTag, dataValue);
                }
            });
            if (autoMapping) {
                propertiesLeft.forEach(([propertyName, propertyTag]) => {
                    const dataValue = fromJSON(propertyName, data);
                    if (dataValue !== object.get(propertyTag)) {
                        transaction.update(objectTag, propertyTag, dataValue);
                    }
                });
            }
        }

        // Else -> create object and update cache
        else {
            objectTag = transaction.create(objectType);
            transaction.persistInstance(objectTag, false);
            config.forEach(mapping => {
                const propertyName = mapping.get(MapperConfig.propertyProp);
                const propertyTag = propertiesNameToTag.get(propertyName);
                if (!propertyTag) {
                    logger.warn(`mapping to property name '${propertyName}' not found for object type '${objectType.getTag()}'`);
                    return;
                }
                const dataValue = fromJSON(mapping.get(MapperConfig.pathProp), data);
                transaction.update(objectTag, propertyTag, dataValue);
            });
            if (autoMapping) {
                propertiesLeft.forEach(([propertyName, propertyTag]) => {
                    const dataValue = fromJSON(propertyName, data);
                    transaction.update(objectTag, propertyTag, dataValue);
                });
            }

            // Update cache if we have a key
            if (objectKey !== keyPrefix) {
                objectsCache.set(objectKey, objectTag);
            }
        }

        // Sync because persist false
        transaction.execute();
        return objectTag;
    };
}
