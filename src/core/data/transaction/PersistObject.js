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

import { ActionBrick, registerBrick, BrickContext, tagToString, Transaction, ErrorFlow } from 'olympe';
import {getLogger} from 'logging';

export default class PersistObject extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Tag} objectIn
     * @param {function()} forwardEvent
     * @param {function(Tag)} setObjectOut
     * @param {function(!ErrorFlow)} setErrorFlow
     */
    update(context, [objectIn], [forwardEvent, setObjectOut, setErrorFlow]) {
        const transaction = Transaction.from(context);

        if (typeof objectIn === 'string'  || tagToString(objectIn) !== '') {
            transaction.persistInstance(objectIn, true);
        } else {
            const msg = `Cannot persist object ${objectIn}: Wrong type.`;
            getLogger('Persist Object').error(msg);
            setErrorFlow && setErrorFlow(ErrorFlow.create(msg, 2));
            return;
        }
        Transaction.process(context, transaction)
            .then(() => {
                setObjectOut(objectIn);
                forwardEvent();
            }).catch(reason => {
                const msg = `Persist object ${objectIn} failed: ${reason}`;
                getLogger('Persist Object').error(msg);
                setErrorFlow && setErrorFlow(ErrorFlow.create(msg, 3));
        });
    }
}

registerBrick('0162f670ececab67c134', PersistObject);
