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
