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

import {ActionBrick, registerBrick, Sync, instanceToTag} from 'olympe';
import {getLogger} from 'logging';

/**
## Description
Creates a local instance (not yet persisted in the database) of a model.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| model | Model | The model. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| object | Object | The created object or its tag if used inside a Begin/End. |
**/
export default class CreateLocalObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Sync} model
     * @param {function()} forwardEvent
     * @param {function(!Sync)} setObject
     */
    update(context, [model], [forwardEvent, setObject]) {
        const logger = getLogger('Create Local Object');

        // Guards
        if (!instanceToTag(model)) {
            logger.warn('no model specified');
            return;
        }

        // Transaction
        const instance = context.getTransaction().create(model).persist(false);
        context.releaseTransaction((executed, success, message) => {
            if(executed && !success)
                logger.error(`transaction error: ${message}`);
            setObject(executed ? Sync.getInstance(instance) : instance);
            forwardEvent();
        });
    }
}

registerBrick('0162f2e963b6c9ed85b7', CreateLocalObject);
