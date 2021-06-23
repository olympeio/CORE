import ListForEachRemovedEntries from '../../../src/core/data/list/ListForEachRemovedEntries.js';

describe('ListForEachRemovedEntries brick', () => {
    it('should do something', () => {
        // Write your tests here
    });
});


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
    it('should not return anything until an object is removedin the listdef', () => {
        // TODO
    });
    it('should return an object removed after forEach was called', () => {
        // TODO
    });
    it('should display an error when trying to call it with an array', () => {
        // TODO
    });
    it('should handle the case when the input has an incorrect type gracefully', () => {
        // TODO
    });
});
