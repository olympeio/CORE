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

import { FunctionBrick, registerBrick, Transaction, instanceToTag } from 'olympe';
import {getLogger} from 'logging';

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
    update(context, [objectIn], [setObjectOut]) {
        const transaction = new Transaction();
        const logger = getLogger('Persist Object');

        if (typeof objectIn === 'string' || instanceToTag(objectIn) !== '') {
            transaction.persistInstance(objectIn, true);
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
