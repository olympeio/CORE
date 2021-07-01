/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
