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
import {getLogger} from 'logging';

/**
## Description
This function creates 3 data-flows from the geo-location of the device.
This is updated in real time, but can require a permission check with the user.
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| longitude | Number | The longitude. |
| latitude | Number | The latitude. |
| altitude | Number | The altitude. |

**/
export default class GetGeolocation extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {Array} _
     * @param {function(number)} setLongitude
     * @param {function(number)} setLatitude
     * @param {function(number)} setAltitude
     */
    onUpdate(context, _, [setLongitude, setLatitude, setAltitude]) {
        const logger = getLogger('Geolocation');

        // Check if the geolocation is accessible
        if(!navigator.geolocation) {
            logger.error('Cannot access geolocation data. Please make sure you allowed the geolocation feature for this page.');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                setLongitude(position.coords.longitude);
                setLatitude(position.coords.latitude);
                setAltitude(position.coords.altitude);
            }, (error) => {
                logger.error(error);
            });
        }
    }
}

registerBrick('0162d8ec885fdf7a6b69', GetGeolocation);
