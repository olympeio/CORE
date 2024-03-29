
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

import { Brick, registerBrick, BrickContext, ErrorFlow } from 'olympe';
import { XMLBuilder } from 'fast-xml-parser';

/**
## Description
Parses a Json into a Xml string, wrapping the result in a series of tags specified by the path (if any).
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| json | string | Json to parse |
| wrappersPath | string | the path, specified in dotted form, default: '' |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| xml | string | the equivalent Xml string |
## Errors
| Code | Description |
| --- | --- |
| undefined | undefined | Parsing error. |

**/
export default class JsonToXml extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} json
     * @param {string} wrappersPath
     * @param {function(ErrorFlow)} dispatchErrorFlow
     * @param {function(string)} setXML
     */
    update(context, [json, wrappersPath], [dispatchErrorFlow, setXML]) {
        try {
            const parser = new XMLBuilder();
            const jsonObj = JSON.parse(json);
            const jsonToParse = wrappersPath.length !== 0 ? wrappersPath.split('.').reverse().reduce((obj, key) => ({[key]: obj}), jsonObj) : jsonObj;
            const xml = parser.build(jsonToParse);
            setXML(xml);
        } catch (error) {
            dispatchErrorFlow(ErrorFlow.create(error.message, 1));
        }

    }
}

registerBrick('017802c8cd51d09059d6', JsonToXml);
