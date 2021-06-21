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
