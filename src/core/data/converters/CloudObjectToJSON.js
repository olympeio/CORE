import { Brick, BrickContext, registerBrick, ListDef, QueryResult, ErrorFlow, CloudObject } from 'olympe';
import { getLogger } from 'logging';

export default class CloudObjectToJSON extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} source
     * @param {boolean} propertiesOnly
     * @param {function(*)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, propertiesOnly], [setResult, setErrorFlow]) {
        const json = CloudObjectToJSON.handleCloudObjectToJson(source, propertiesOnly, setErrorFlow);
        if (json) {
            setResult(json);
        }
    }

    /**
     * @override
     * @param {*} source
     * @param {boolean} propertiesOnly
     * @param {function(*)} setErrorFlow
     */
    static handleCloudObjectToJson(source, propertiesOnly, setErrorFlow) {
        const logger = getLogger('Cloud Object To JSON');

        let json;
        try {
            if (source instanceof ListDef) {
                json = [];
                source.forEachCurrentValue((item) => {
                    json.push(this.parseProperties(item, propertiesOnly));
                });
            } else if (source instanceof Array || source instanceof QueryResult) {
                json = [];
                source.forEach((item) => {
                    json.push(this.parseProperties(item, propertiesOnly));
                });
            } else if (source instanceof CloudObject) {
                json = this.parseProperties(source, propertiesOnly);
            } else {
                logger.error('Provided source is not a Cloud Object or List of Cloud Objects');
                return;
            }

            return json;
        } catch (e) {
            if (setErrorFlow) {
                setErrorFlow(ErrorFlow.create('Provided source is not a correct Cloud Object or List of Cloud Objects: ' + e.message, 1));
            }
            return;
        }
    }

    /**
     * @param {string | CloudObject} instance
     * @param {boolean=} propertiesOnly
     * @return {Object}
     */
    static parseProperties(instance, propertiesOnly) {
        const logger = getLogger('Cloud Object To JSON');
        if(CloudObject.exists(instance)) {
           return instance.toObject(propertiesOnly, true)
        } else {
            logger.error(`Provided Cloud Object "${instance}" does not exist`);
            return null;
        }
    }
}

registerBrick('017fc0743bebe690bfef', CloudObjectToJSON);
