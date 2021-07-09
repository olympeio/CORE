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

import GetDateTimeAttributes from '../../src/core/datetime/GetDateTimeAttributes.js';
import testEqual from '../helpers/testEqual.mjs';

describe('GetDateTimeAttributes brick', () => {
    it('should return the date attributes', () => {

        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        testEqual(new GetDateTimeAttributes(), [date], [2014, 7, 10, 12, 45, 30]);
    });
});
