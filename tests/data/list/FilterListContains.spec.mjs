import FilterListContains from '../../../src/core/data/list/FilterListContains.js'

describe('FilterListContains brick', () => {
    it('should do something', () => {
        new FilterListContains().onUpdate('a', {'Property': '', 'Object list': ['a', 'b', 'c'], 'Substring': 'a'},  {'Filtered list' : () => {}});
    });
});
