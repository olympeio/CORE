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
import getScopeContext from "../util/updateContextProperty";
import {getLogger} from 'logging';

/**
## Description
Dispatches the provided event
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| condition | Boolean | The condition. |
| true flow | Control Flow | The control flow to trigger when condition is `true`. |
| false flow | Control flow | The control flow to trigger when condition is `false`. |

**/
export default class DispatchEvent extends ActionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {*} _
     * @param {function()} forwardEvent
     */
    update(context, [_], [forwardEvent]) {
        const [scope, event] = getScopeContext(this, this.getInputs()[1]);
        const logger = getLogger('Dispatch Event');
        if (scope && event) {
            const scopeContext = context.getOtherContext(scope);
            if (scopeContext === null) {
                logger.error('The scope where to set the UI Property has not been found.\n',
                    '\tIt could be because you try to write on a scope of a model without adding the proper alias:', scope,
                    '\n\tOr because the context was not started at the time of the property was set.');
                return;
            }
            scopeContext.set(event, Date.now());

        } else {
            logger.log('There is no event to dispatch');
        }
        forwardEvent();
    }
}

registerBrick('01619e359987cdf3fc80', DispatchEvent);
