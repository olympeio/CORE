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

import DecodeURIComponent from '../../src/core/net/DecodeURIComponent.js';
import testEqual from '../helpers/testEqual.mjs';

describe('DecodeURIComponent brick', () => {
    it('should decode correctly', () => {
        // From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        testEqual(new DecodeURIComponent(), ['%3B%2C%2F%3F%3A%40%26%3D%2B%24', true], [';,/?:@&=+$']);
        testEqual(new DecodeURIComponent(), ['-_.!~*\'()', true], ['-_.!~*\'()']);
        testEqual(new DecodeURIComponent(), ['%23', true], ['#']);
        testEqual(new DecodeURIComponent(), ['ABC%20abc%20123', true], ['ABC abc 123']);
        testEqual(new DecodeURIComponent(), [';,/?:@&=+$', false], [';,/?:@&=+$']);
        testEqual(new DecodeURIComponent(), ['-_.!~*\'()', false], ['-_.!~*\'()']);
        testEqual(new DecodeURIComponent(), ['#', false], ['#']);
        testEqual(new DecodeURIComponent(), ['ABC%20abc%20123', false], ['ABC abc 123']);
    });
});
