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

import { ActionBrick, registerBrick, ErrorFlow } from "olympe";
import getScopeContext from "./util/updateContextProperty";
import {getLogger} from 'logging';
import {castPrimitiveValue} from "../data/transaction/_helpers";

export default class SetUIProperty extends ActionBrick {

    /**
     * @protected
     * @param {!Context} context
     * @param {*} _
     * @param {*} value
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} dispatchErrorFlow
     */
    update(context, [_, value], [forwardEvent, dispatchErrorFlow]) {
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
            scopeContext.set(property, castPrimitiveValue(value));
            forwardEvent();

        } else {
            dispatchErrorFlow(ErrorFlow.create('Unknown Property', 1));
        }
    }
}

registerBrick('0162d2938cadad968805', SetUIProperty);
