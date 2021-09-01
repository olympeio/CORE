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
import {BehaviorSubject, combineLatest} from "rxjs";

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
    onInit(context) {
        context.set(FeedObjectProperty.burstTransaction, new BurstTransaction());
    }

    /**
     * @override
     */
    setupUpdate(context, runUpdate, clean) {
        const logger = getLogger('Update property');
        const transaction = /** @type {!BurstTransaction} */ (context.get(FeedObjectProperty.burstTransaction));
        const [eventInput, objectInput, propertyInput, valueInput] = this.getInputs();

        const flow = new BehaviorSubject(new Map());
        let currentObject = null;

        context.observe(eventInput, true).subscribe((_) => {
            if (currentObject !== null) {
                transaction.push(currentObject, flow);
                runUpdate([currentObject]);
            } else {
                logger.warn('Try to feed new property value to a null object');
            }
        });

        context.observe(objectInput, true).subscribe((object) => {
            currentObject = object;
        });

        combineLatest(context.observe(propertyInput, true), context.observe(valueInput, true))
            .subscribe(([property, value]) => {
                flow.next(new Map().set(instanceToTag(property), value.valueOf()));
            }
        );
    }

    /**
     * @override
     */
    onUpdate(context, [object], [forwardEvent, setObject]) {
        setObject(object);
        forwardEvent(Date.now());
    }

    /**
     * @override
     */
    onDestroy(context) {
        /** @type {!BurstTransaction} */ (context.get(FeedObjectProperty.burstTransaction))
            .complete()
            .catch((errorMsg) => {
                getLogger('Update property').error(`Impossible to complete the continuous update: ${errorMsg}`);
            });
    }
}

registerBrick('017b9bbd4e0b670170ad', FeedObjectProperty);
