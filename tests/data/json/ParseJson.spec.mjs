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

    it('should display an error given an incorrect json', () => {
        // When
        const setter = jasmine.createSpy().and.callFake(() => {});
        spyOn(console, 'error');

        // Then
        new ParseJson().onUpdate(new Context(), ['{ "a": { "b": "hello"}', 'a.b'], [setter]);

        expect(console.error).toHaveBeenCalled();
        expect(setter).not.toHaveBeenCalled();
    });
});
