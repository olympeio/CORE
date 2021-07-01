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

import { ActionBrick, registerBrick } from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Outputs a message on the console.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| prefix | String | A label to put in front of the message. |
| message | String | The message to display. |
**/
export default class Log extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} prefix
     * @param {string} message
     * @param {function()} forwardEvent
     */
    onUpdate(context, [prefix, message], [forwardEvent]) {
        getLogger('Log').info((prefix ? prefix + ': ' : '') + message);
        forwardEvent();
    }
}

registerBrick('0162afedd7acb5c5451a', Log);
