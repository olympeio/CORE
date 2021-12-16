
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

import { FunctionBrick, registerBrick, Context, ErrorFlow } from 'olympe';
import { parse } from 'fast-xml-parser';

/**
## Description
Parses a Xml string into a json, extracting the object or array specified by the path (if any).
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| xml | string | Xml to parse |
| wrappersPath | string | the path, specified in dotted form, default: '' |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| json | string | the equivalent Json. |
## Errors
| Code | Description |
| --- | --- |
| undefined | undefined | The Xml is not valid. |

**/
export default class XmlToJson extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} xml
     * @param {string} wrappersPath
     * @param {function(ErrorFlow)} dispatchErrorFlow
     * @param {function(string)} setJson
     */
    update(context, [xml, wrappersPath], [dispatchErrorFlow, setJson]) {
        try {
            if (xml.length !== 0) {
                const parsedXml = parse(xml, undefined, true);
                const json = wrappersPath.length !== 0 ? wrappersPath.split('.').reduce((obj, key) => obj[key], parsedXml) : parsedXml;
                setJson(JSON.stringify(json));
            } else {
                setJson('');
            }
        } catch (error) {
            dispatchErrorFlow(ErrorFlow.create(error.message, 1));
        }

    }
}

registerBrick('017802c59d239537f597', XmlToJson);
