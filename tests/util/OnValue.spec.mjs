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

import OnValue from '../../src/core/util/OnValue.js';
import testEqual from '../helpers/testEqual.mjs';

describe('On Value brick', () => {
    it('should forward any value given as input and emit event', () => {
        const onValue = new OnValue();
        testEqual(onValue, [2], [2], 0);
        testEqual(onValue, [null], [null], 0);
    });
});
