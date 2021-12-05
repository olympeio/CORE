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

import { FunctionBrick, registerBrick, BurstTransaction, instanceToTag } from 'olympe';
import {getLogger} from 'logging';
import {Subject} from "rxjs";
import {combineLatestWith, map} from "rxjs/operators"
import {castPrimitiveValue} from "./_helpers";

export default class FeedObjectProperty extends FunctionBrick {

    /**
     * The label used as key to save the burst transaction
     *
     * @return {string}
     */
    static get burstTransaction() { return 'BURST'; }

    /**
     * @override
     */
    init(context) {
        context.set(FeedObjectProperty.burstTransaction, new BurstTransaction());
    }

    /**
     * @override
     */
    setupExecution(context) {
        const logger = getLogger('Update property');
        const transaction = /** @type {!BurstTransaction} */ (context.get(FeedObjectProperty.burstTransaction));
        const [eventInput, objectInput, propertyInput, valueInput] = this.getInputs();

        const flow = new Subject();
        context.observe(propertyInput).pipe(combineLatestWith(context.observe(valueInput)))
            .subscribe(([property, value]) => {
                flow.next(new Map().set(instanceToTag(property), castPrimitiveValue(value)));
            });

        return context.observe(eventInput).pipe(map((event) => {
            const object = context.get(objectInput);

            if (event == null || object === null) {
                object === null && logger.warn('Try to feed new property value to a null object');
                return null;
            }

            transaction.push(object, flow);
            return object;
        }));
    }

    /**
     * @override
     */
    update(context, [object], [forwardEvent, setObject]) {
        setObject(object);
        forwardEvent(Date.now());
    }

    /**
     * @override
     */
    destroy(context) {
        /** @type {!BurstTransaction} */ (context.get(FeedObjectProperty.burstTransaction))
            .complete()
            .catch((errorMsg) => {
                getLogger('Update property').error(`Impossible to complete the continuous update: ${errorMsg}`);
            });
    }
}

registerBrick('017b9bbd4e0b670170ad', FeedObjectProperty);
