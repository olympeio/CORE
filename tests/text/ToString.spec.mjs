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

import ToString from '../../src/core/text/ToString.js';
import testEqual from '../helpers/testEqual.mjs';

describe('ToString brick', () => {
    it('should correctly parse null', () => {
        testEqual(new ToString(), [null], ['null']);
    });
    it('should correctly parse undefined', () => {
        testEqual(new ToString(), [undefined], ['undefined']);
    });
    it('should correctly parse a number', () => {
        const func = new ToString();
        testEqual(func, [4], ['4']);
        testEqual(func, [NaN], ['NaN']);
    });
    it('should correctly parse a boolean', () => {
        testEqual(new ToString(), [false], ['false']);
    });
    it('should correctly parse an array', () => {
        const func = new ToString();
        testEqual(func, [[]], ['']);
        testEqual(func, [[42]], ['42']);
        testEqual(func, [[42, 'toto', true]], ['42,toto,true']);
    });
    it('should correctly parse an object without a toString method', () => {
        testEqual(new ToString(), [{}], ['[object Object]']);
    });
    it('should correctly parse an object with a toString method', () => {
        testEqual(new ToString(), [{ toString() { return 'toto';}}], ['toto']);
    });
});
