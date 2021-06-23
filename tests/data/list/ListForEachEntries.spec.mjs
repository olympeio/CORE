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

import ListForEachEntries from '../../../src/core/data/list/ListForEachEntries.js';


// Mocked ListDef
class ListDef {
    forEach() {
        return null;
    }
}

describe('ListForEachEntries brick', () => {
    it('should call the forEach method for a listdef', () => {
        // TODO
    });
    it('should return all the objects already in the listdef', () => {
        // TODO
    });
    it('should return an object added after forEach was called for a listdef', () => {
        // TODO
    });
    it('should return all the objects in an array', () => {
        // TODO
    });
    it('should do nothing for an empty array', () => {
        // TODO
    });
    it('should handle the case when the input has an incorrect type gracefully', () => {
        // TODO
    });
});
