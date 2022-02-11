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

import { Brick, registerBrick, CloudObject } from 'olympe';

export default class GetObjectProperty extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!InstanceTag} object
     * @param {!Property<*>} property
     * @param {function(*)} setValue
     */
    update($, [object, property], [setValue]) {
        CloudObject.get(object)
            .observe($, property)
            .subscribe(setValue);
    }
}

registerBrick('01632a1a376f822b77c0', GetObjectProperty);
