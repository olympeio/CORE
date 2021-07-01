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

import ParseJson from '../../../src/core/data/json/ParseJson.js';
import testEqual from '../../helpers/testEqual.mjs';
import {Context} from 'olympe';

describe('ParseJson brick', () => {
    it('should do correctly parse a path', () => {
        testEqual(new ParseJson(), ['{ "a": { "b": "hello"}}', 'a.b'], ['hello']);
    });

    it('should do correctly parse a path with an array', () => {
        testEqual(new ParseJson(), ['[ "a", "b", "c"]', '[1]'], ['b']);
    });

    it('should not set the output when given an incorrect JSON', () => {
        // When
        const setter = jasmine.createSpy().and.callFake(() => {});

        // Then
        const run = () => new ParseJson().onUpdate(new Context(), ['{ "a": { "b": "hello"}', 'a.b'], [setter]);

        expect(run).not.toThrowError();
        expect(setter).not.toHaveBeenCalled();
    });
});
