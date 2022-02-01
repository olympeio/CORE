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

import { ActionBrick, registerBrick, Context, InstanceTag, instanceToTag } from 'olympe';
import {getLogger} from 'logging';

export default class PersistObject extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {InstanceTag} objectIn
     * @param {function()} forwardEvent
     * @param {function(InstanceTag)} setObjectOut
     */
    update(context, [objectIn], [forwardEvent, setObjectOut]) {
        const transaction = context.getTransaction();

        if (typeof objectIn === 'string'  || instanceToTag(objectIn) !== '') {
            transaction.persistInstance(objectIn, true);
        } else {
            getLogger('Persist Object').error('Cannot persist object', objectIn);
        }
        context.releaseTransaction( () => {
            setObjectOut(objectIn);
            forwardEvent();
        });
    }
}

registerBrick('0162f670ececab67c134', PersistObject);
