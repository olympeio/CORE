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

import { Brick, registerBrick } from 'olympe';
import getScopeContext from "./util/updateContextProperty";
import {castPrimitiveValue} from "../data/transaction/_helpers";
import {map} from 'rxjs/operators'

export default class FeedUIProperty extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        // Ensure to resolve anytime a value comes, and propagate null too.
        return $.observe(this.getInputs()[1]).pipe(map((v) => [v]));
    }

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {*} _
     * @param {*} value
     * @param {!Array} outputs
     */
    update(context, [value], outputs) {
        const [scope, property] = getScopeContext(this, this.getInputs()[0]);
        if (scope && property) {
            context.onContext(scope, (scopeContext) => {
                scopeContext.set(property, castPrimitiveValue(value));
            });
        }
    }
}

registerBrick('0179f157cb4687706403', FeedUIProperty);
