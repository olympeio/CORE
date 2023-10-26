/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Brick, registerBrick, CloudObject, QueryResult, BrickContext, ListDef} from 'olympe';
import {getLogger} from 'logging';
import {combineLatest} from 'rxjs';

export default class DebugLog extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const [levelInput, prefixInput, valueInput] = this.getInputs();
        // Listen to changes on prefix and value inputs and propagate null.
        return combineLatest([$.observe(levelInput, false), $.observe(prefixInput), $.observe(valueInput)]);
    }

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {string} method
     * @param {?string} prefix
     * @param {?*} value
     * @param {function(*)} setValue
     */
    update($, [loglevel, prefix, value], [setValue]) {
        DebugLog.log(loglevel, prefix, value);
        setValue(value);
    }

    /**
     * @param {?string} loglevel
     * @param {?string} prefix
     * @param {?*} value
     */
    static log(loglevel, prefix, value) {
        const logger = getLogger('Draw');
        try {
            const validMethods = ['trace', 'debug', 'info', 'log', 'warn', 'error'];
            const method = validMethods[validMethods.indexOf(loglevel?.toLowerCase())] ?? 'info';
            const showPrefix = ((prefix !== null && prefix !== undefined ) ? prefix + ': ' : '')
            const serializedValue = DebugLog.serialize(value);
            logger[method](showPrefix + JSON.stringify(serializedValue, undefined, 4));
        } catch(err) {
            logger.error(`Something went wrong: ${err}`)
        }
    }

    /**
     * @private
     * @param {*} rawValue
     * @return {!Object | !Array | string | number | boolean | null | undefined}
     */
    static serialize(rawValue) {
        if (rawValue !== Object(rawValue)) { // check isPrimitive
            return rawValue;
        }

        else if (rawValue instanceof CloudObject) { // check isCloudObject
            return Object.assign(rawValue.toObject(true, true), {'tag': rawValue.getTag()});
        }

        // Handle collections
        let value = rawValue;
        if (rawValue instanceof Map) {
            value = Object.fromEntries(rawValue);
        }

        else if (rawValue instanceof Set) {
            value = Array.from(rawValue);
        }

        else if (rawValue instanceof QueryResult) {
            value = rawValue.toArray();
        }

        else if (rawValue instanceof ListDef) {
            value = [];
            rawValue.forEachCurrentValue((item) => { value.push(item); });
        }

        if (Array.isArray(value)) {
            return value.map((item) => this.serialize(item));
        }

        // Check if the object does override toJSON method (used by stringify)
        else if (rawValue.toJSON !== undefined) {
            return rawValue;
        }

        // If the object has override the toString method, use it to log the object.
        else if (value.toString !== Object.prototype.toString) {
            return value.toString();
        }

        // Finally, if the object is a simple collection of key-values, serialize all the values recursively
        else if (value.constructor === Object) {
            return Object.entries(/** @type {!Object}*/ (value)).reduce((serialized, [k, v]) => {
                serialized[k] = this.serialize(v);
                return serialized;
            }, {});
        }

        // Do not know how to deal with this object, transform it to a String.
        return String(rawValue);
    }
}

registerBrick('016324e7338307c3ed94', DebugLog);
