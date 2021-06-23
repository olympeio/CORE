
/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { FunctionBrick, registerBrick, Context, ErrorFlow } from 'olympe';
import { j2xParser } from 'fast-xml-parser';

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
export default class JsonToXml extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} json
     * @param {string} wrappersPath
     * @param {function(ErrorFlow)} dispatchErrorFlow
     * @param {function(string)} setXML
     */
    onUpdate(context, [json, wrappersPath], [dispatchErrorFlow, setXML]) {
        try {
            const parser = new j2xParser();
            const jsonObj = JSON.parse(json);
            const jsonToParse = wrappersPath.length !== 0 ? wrappersPath.split('.').reverse().reduce((obj, key) => ({[key]: obj}), jsonObj) : jsonObj;
            const xml = parser.parse(jsonToParse);
            setXML(xml);
        } catch (error) {
            dispatchErrorFlow(ErrorFlow.create(error.message, 1));
        }

    }
}

registerBrick('017802c8cd51d09059d6', JsonToXml);
