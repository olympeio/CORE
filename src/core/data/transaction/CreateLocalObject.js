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
import {ActionBrick, registerBrick, CloudObject, Transaction, tagToString, BrickContext, ErrorFlow} from 'olympe';
import {getLogger} from 'logging';

export default class CreateLocalObject extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!CloudObject} model
     * @param {function()} forwardEvent
     * @param {function(!CloudObject)} setObject
     * @param {function(!ErrorFlow)} setErrorFlow
     */
    update(context, [model], [forwardEvent, setObject, setErrorFlow]) {
        // Guards
        if (!tagToString(model) || !CloudObject.exists(model)) {
            getLogger('Create Local Object').warn(`Specified model (${model}) does not exist.`);
            setErrorFlow(ErrorFlow.create(`Create Local Object: Specified model (${model}) does not exist.`, 1));
            return;
        }

        // Transaction
        const transaction = Transaction.from(context);
        const instanceTag = transaction.create(model)
        transaction.persistInstance(instanceTag, false);
        Transaction.process(context, transaction).then((executed) => {
            setObject(executed ? CloudObject.get(instanceTag) : instanceTag);
            forwardEvent();
        }).catch(message => {
            setErrorFlow(ErrorFlow.create(`Create Local Object: ${message}`, 1));
        });
    }
}

registerBrick('0162f2e963b6c9ed85b7', CreateLocalObject);
