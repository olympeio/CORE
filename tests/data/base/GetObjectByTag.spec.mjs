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

import GetObjectByTag from '../../../src/core/data/base/GetObjectByTag.js';
import testEqual from '../../helpers/testEqual.mjs';

describe('GetObject brick', () => {
    it('should correctly retrieve an object given a tag', () => {
        // TODO
    });

    it('should return null if the object with the given tag does not exist', () => {
        const getObject = new GetObjectByTag();
        testEqual(getObject, ['this tag does not exist'], [null]);
    });
});
