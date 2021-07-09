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

import SetObjectProperty from '../../../src/core/data/operation/SetObjectProperty.js';
import testEqual from "../../helpers/testEqual.mjs";
import { Sync, Pro } from "olympe";

describe('SetObjectProperty brick', () => {
    it('should correctly set an object property', () => {
        // TODO
    });

    it('should reject setting a complex property', () => {
        // TODO need to create an object to use as first input
        // const setObjectProperty = new SetObjectProperty();
        // testEqual(setObjectProperty,
        //     ['016778ac9fcc6032ce1d', SetObjectProperty.entry.addProperty('0175e0dbea537ea82a01'), Sync.getInstance('complexPropertyTag')],
        //     [undefined]
        // );
    });
});
