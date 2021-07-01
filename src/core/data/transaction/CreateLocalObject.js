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
    onUpdate(context, [model], [forwardEvent, setObject]) {
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
