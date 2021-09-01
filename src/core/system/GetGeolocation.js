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