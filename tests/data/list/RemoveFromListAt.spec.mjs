import RemoveFromListAt from "../../../src/core/data/list/RemoveFromListAt.js";
import testEqual from "../../helpers/testEqual.mjs";

describe('RemoveFromListAt brick', () => {
    it('should remove an element from the list', () => {
        const func = new RemoveFromListAt();
        testEqual(func, [['a', 'b', 'c'], 1], [['a', 'c'], 'b'], 0);
        testEqual(func, [['a', 'b'], 0], [['b'], 'a'], 0);
    });

    it('should not remove an element when given position is out of bounds', () => {
        const func = new RemoveFromListAt();
        testEqual(func, [['a', 'b', 'c'], -1], [['a', 'b', 'c'], null], 0);
        testEqual(func, [['a', 'b', 'c'], 6], [['a', 'b', 'c'], null], 0);
        testEqual(func, [[], 0], [[], null], 0);
    });
});
