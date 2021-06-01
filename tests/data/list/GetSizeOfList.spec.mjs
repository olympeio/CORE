import GetSizeOfList from '../../../src/core/data/list/GetSizeOfList.js';
import testEqual from "../../helpers/testEqual.mjs";

describe('GetSizeOfList brick', () => {
    xit('should call the getSize method of the list', () => {
        // TODO
    });

    xit('should return the size of the list', () => {
        // TODO
    });

    xit('should update the returned size if the list changes', () => {
        // TODO
    });

    xit('should work if the list is an array', () => {
        testEqual(new GetSizeOfList(), [[0, 1, 2]], [3]);
    });

    xit('should not execute if the list is not a ListDef nor an Array', () => {
        // TODO
    });
});
