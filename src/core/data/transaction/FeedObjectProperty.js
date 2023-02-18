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

import {Brick, registerBrick, BurstTransaction, tagToString} from 'olympe';
import {getLogger} from 'logging';
import {combineLatest, Subject} from "rxjs";
import {map} from "rxjs/operators"
import {castPrimitiveValue} from "./_helpers";

export default class FeedObjectProperty extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        const logger = getLogger('Feed Object Property');
        const transaction = new BurstTransaction();
        const [eventInput, objectInput, propertyInput, valueInput] = this.getInputs();

        const flow = new Subject();
        combineLatest([$.observe(propertyInput), $.observe(valueInput)]).subscribe(([property, value]) => {
            flow.next(new Map().set(tagToString(property), castPrimitiveValue(value)));
        });

        $.onDestroy(() => {
            transaction.complete().catch((errorMsg) => {
                logger.error(`Impossible to complete the continuous update: ${errorMsg}`);
            });
        });

        return $.observe(eventInput).pipe(map((event) => {
            const object = $.get(objectInput);

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
    update($, [object], [forwardEvent, setObject]) {
        setObject(object);
        forwardEvent(Date.now());
    }
}

registerBrick('017b9bbd4e0b670170ad', FeedObjectProperty);
