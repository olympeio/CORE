
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
    onUpdate(context, [xml, wrappersPath], [dispatchErrorFlow, setJson]) {
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
