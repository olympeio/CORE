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
