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

import { ActionBrick, registerBrick, ErrorFlow } from "olympe";
import getScopeContext from "./util/updateContextProperty";
import {getLogger} from 'logging';

/**
## Description
Sets the specified UI Property to the provided value.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| UI Property | Property | The UI property. |
| Value | Object | The value. |
## Errors
| Code | Description |
| --- | --- |
| undefined | undefined | The property doesn't exist for that component. |
| undefined | undefined | The scope (or context) couldn't be found. |

**/
export default class SetUIProperty extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {*} _
     * @param {*} value
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} dispatchErrorFlow
     */
    onUpdate(context, [_, value], [forwardEvent, dispatchErrorFlow]) {
        const [scope, property] = getScopeContext(this, this.getInputs()[1]);
        if (scope && property) {
            const scopeContext = context.getOtherContext(scope);
            if (scopeContext === null) {
                getLogger('Set UI Property').error('The scope where to set the UI Property has not been found.\n',
                    '\tIt could be because you try to write on a scope of a model without adding the proper alias:', scope,
                    '\n\tOr because the context was not started at the time of the property was set.');
                dispatchErrorFlow(ErrorFlow.create('Unknown scope', 2));
                return;
            }
            scopeContext.set(property, value);
            forwardEvent();

        } else {
            dispatchErrorFlow(ErrorFlow.create('Unknown Property', 1));
        }
    }
}

registerBrick('0162d2938cadad968805', SetUIProperty);
