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

import { FunctionBrick, registerBrick } from 'olympe';
import {getBrowserInfo, getOSInfo} from 'helpers/platformInfo';

/**
 ## Description
 Retrieves information about the underlying platform, like operating system and browser name.
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Browser | String | The name of the browser. |
 | Browser Version | String | Version information for the browser. |
 | OS | String | Operating System name. |
 | OS Version | String | Version information for the Operating system. |
 **/
export default class GetPlatformInfo extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} _
     * @param {!Array} inputs
     * @param {function(string)} setOSVersion
     * @param {function(string)} setOS
     * @param {function(string)} setBrowserVersion
     * @param {function(string)} setBrowser
     */
    onUpdate(_, inputs, [setOSVersion, setOS, setBrowserVersion, setBrowser]) {
        const [osName, osVersion] = getOSInfo();
        const [browserName, browserVersion] = getBrowserInfo();

        setBrowser(browserName);
        setBrowserVersion(browserVersion);
        setOS(osName);
        setOSVersion(osVersion);
    }

}

registerBrick('01633f7ff010b741b715', GetPlatformInfo);
