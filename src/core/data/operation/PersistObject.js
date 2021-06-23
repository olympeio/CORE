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

import { FunctionBrick, registerBrick, Transaction, CreateInstance, instanceToTag } from 'olympe';
import {getLogger} from 'logging';

/**
 ## Description
 Persists a local object into the server's database.

 ## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | object | Object | The object to persist. |
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | object | Object | The persisted object. |
 **/
export default class PersistObject extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} objectIn
     * @param {function(InstanceTag)} setObjectOut
     */
    onUpdate(context, [objectIn], [setObjectOut]) {
        const transaction = new Transaction();
        const logger = getLogger('Persist Object');

        if (objectIn instanceof CreateInstance || instanceToTag(objectIn) !== '') {
            transaction.persistInstance(objectIn);
            transaction.execute( (success, message) => {
                if (success) {
                    setObjectOut(objectIn);
                } else {
                    logger.error(message);
                    setObjectOut(objectIn);
                }
            })
        } else {
            logger.error('Cannot persist object', objectIn);
            setObjectOut(objectIn);
        }
    }
}

registerBrick('016c1f1db7d28b4f6db6', PersistObject);
