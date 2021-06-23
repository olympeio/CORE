import GetObjectByTag from '../../../src/core/data/base/GetObjectByTag.js';
import testEqual from '../../helpers/testEqual.mjs';

describe('GetObject brick', () => {
    it('should correctly retrieve an object given a tag', () => {
        // TODO
    });

    it('should return undefined if the object with the given tag does not exist', () => {
        const getObject = new GetObjectByTag();
        testEqual(getObject, ['this tag does not exist'], [undefined]);
    })
});
