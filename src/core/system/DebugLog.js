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

import { Brick, registerBrick, CloudObject, QueryResult } from 'olympe';
import {getLogger} from 'logging';
import {combineLatest} from "rxjs";
import CloudObjectToJSON from '../data/converters/CloudObjectToJSON';

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
        try {
            const validMethods = ['trace', 'debug', 'info', 'log', 'warn', 'error'];
            const method = validMethods[validMethods.indexOf(loglevel?.toLowerCase())] ?? 'info';
            const showPrefix = ((prefix !== null && prefix !== undefined ) ? prefix + ': ' : '')
    
            if (value !== Object(value)) { // check isPrimitive
                getLogger('Draw')[method](showPrefix + String(value));
                return;
            }

            if (value instanceof CloudObject) { // check isCloudObject
                const obj = CloudObjectToJSON.handleCloudObjectToJson(value, true);
                getLogger('Draw')[method](showPrefix + JSON.stringify(obj, undefined, 4));
                return;
            }

            if (value instanceof Map) {
                value = Object.fromEntries(value);
            }

            if (value instanceof QueryResult) {
                value = value.toArray();
            }

            if (Array.isArray(value)) {
                const checkCloudObjArr = (value || []).some(obj => obj instanceof CloudObject); // check array of cloudObject
                if (checkCloudObjArr) {
                    const json = CloudObjectToJSON.handleCloudObjectToJson(value, true);
                    getLogger('Draw')[method](showPrefix + JSON.stringify(json, undefined, 4));
                    return;
                }
            }
    
            getLogger('Draw')[method](showPrefix + String(JSON.stringify(value, undefined, 4)));
        } catch(err) {
            if (err) {
                getLogger('Draw')['error'](`Something went wrong: ${err}`)
            }
        }
    }
}

registerBrick('016324e7338307c3ed94', DebugLog);
