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

import { Brick, registerBrick, CloudObject, ErrorFlow } from 'olympe';

export default class GetObjectByTag extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {string} tag
     * @param {function(!CloudObject)} setObject
     */
    async update($, [tag], [setObject]) {
        if (!CloudObject.exists(tag)) {
            throw ErrorFlow.create(`Get Object by Tag: tag ${tag} does not exist in the local database.`, 1)
        }
        // After checking the existence of the instance in the local cache,
        // we can use CloudObject.get instead of using a query to stay synchronous .
        setObject(CloudObject.get(tag));
    }
}

registerBrick('016324f5cf507031f6a3', GetObjectByTag);
