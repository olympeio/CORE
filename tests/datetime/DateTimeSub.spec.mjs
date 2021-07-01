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

import DateTimeSub from '../../src/core/datetime/DateTimeSub.js';
import testEqual from '../helpers/testEqual.mjs';
import {sub} from 'date-fns'

describe('DateTimeSub brick', () => {
    it('should subtract the given duration to the date', () => {
        const date = new Date(2014, 6, 10, 12, 45, 30, 0);

        const duration = {
            'years': 1,
            'months': 2,
            'days': 3,
            'weeks': 4,
            'hours': 5,
            'minutes': 6,
            'seconds': 7
        };

        testEqual(new DateTimeSub(), [
            date,
            duration['years'],
            duration['months'],
            duration['days'],
            duration['weeks'],
            duration['hours'],
            duration['minutes'],
            duration['seconds']
        ], [sub(date, duration)]);
    });
});
