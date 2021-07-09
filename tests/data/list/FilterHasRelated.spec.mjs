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

import FilterHasRelated from '../../../src/core/data/list/FilterHasRelated.js';


// Mocked ListDef
class ListDef {
    filter() {
        return null;
    }
}

describe('ListForEachEntries brick', () => {
    it('should call the filter method for a listdef', () => {
        // TODO
    });
    it('should filter out an object that does not have a relation to the object for a listdef', () => {
        // TODO
    });
    it('should not filter out an object that does have a relation to the object for a listdef', () => {
        // TODO
    });
    it('should not filter out an object that does not have a relation to the object when the filter in inverted for a listdef', () => {
        // TODO
    });
    it('should filter out an object that does have a relation to the object when the filter in inverted for a listdef', () => {
        // TODO
    });
    it('should filter out an object that does not have a relation to the object for an array', () => {
        // TODO
    });
    it('should not filter out an object that does have a relation to the object for an array', () => {
        // TODO
    });
    it('should not filter out an object that does not have a relation to the object when the filter in inverted for an array', () => {
        // TODO
    });
    it('should filter out an object that does have a relation to the object when the filter in inverted for an array', () => {
        // TODO
    });
    it('should handle the case when the input has an incorrect type gracefully', () => {
        // TODO
    });
});
