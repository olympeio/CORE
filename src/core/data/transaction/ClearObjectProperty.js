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

import {Brick, registerBrick, Transaction, BrickContext, ErrorFlow} from 'olympe';

export default class ClearObjectProperty extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Tag} object
     * @param {!Property} property
     * @param {function()} forwardEvent
     * @param {function(ErrorFlow)} setErrorFlow
     * @param {function(Tag)} setObject
     */
    update(context, [object, property], [forwardEvent, setErrorFlow, setObject]) {
        const transaction = Transaction.from(context);
        transaction.update(object, property, null);
        Transaction.process(context, transaction).then(() => {
            setObject(object);
            forwardEvent();
        }).catch((message) => {
            setErrorFlow(ErrorFlow.create(`Clear Object Property: ${message}`, 1));
        });
    }
}

registerBrick('017a382f3df9e2dcb12a', ClearObjectProperty);
