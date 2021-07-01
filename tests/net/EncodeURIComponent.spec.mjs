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

import EncodeURIComponent from '../../src/core/net/EncodeURIComponent.js';
import testEqual from '../helpers/testEqual.mjs';

describe('EncodeURIComponent brick', () => {
    it('should encode correctly', () => {
        // From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        testEqual(new EncodeURIComponent(), [';,/?:@&=+$', true], ['%3B%2C%2F%3F%3A%40%26%3D%2B%24']);
        testEqual(new EncodeURIComponent(), ['-_.!~*\'()', true], ['-_.!~*\'()']);
        testEqual(new EncodeURIComponent(), ['#', true], ['%23']);
        testEqual(new EncodeURIComponent(), ['ABC abc 123', true], ['ABC%20abc%20123']);
        testEqual(new EncodeURIComponent(), [';,/?:@&=+$', false], [';,/?:@&=+$']);
        testEqual(new EncodeURIComponent(), ['-_.!~*\'()', false], ['-_.!~*\'()']);
        testEqual(new EncodeURIComponent(), ['#', false], ['#']);
        testEqual(new EncodeURIComponent(), ['ABC abc 123', false], ['ABC%20abc%20123']);
    });
});
