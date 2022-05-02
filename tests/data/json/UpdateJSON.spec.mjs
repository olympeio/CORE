import UpdateJSON from '../../../src/core/data/json/UpdateJSONAction.js';
import testEqual from '../../helpers/testEqual.mjs';
import { BrickContext } from 'olympe';

describe('UpdateJSON brick', () => {
    it('should properly insert a simple primitive value in a json', () => {
        const func = new UpdateJSON();

        testEqual(func, ['{"a":"test","b":{}}', 'c', 42], [undefined, {"a":"test","b":{},"c":42}]);
        testEqual(func, [{"a":"test","b":{}}, 'c', true], [undefined, {"a":"test","b":{},"c":true}]);
        testEqual(func, [{"a":"test","b":{}}, 'c', null], [undefined, {"a":"test","b":{},"c":null}]);
    });

    it('should properly add or merge an object to a json', () => {
        const func = new UpdateJSON();
        const source = {"a": "test", "b": [ { "b1": "plouf"}, { "b1": "plouf 2"}]};
        const result1 = {"a":"test","b":[{"b1":{"plouf":"plouf","category":{"b3":"coocoo"}}},{"b1":{"plouf 2":"plouf 2","category":{"b3":"coocoo"}}}]};
        const result2 = {"a":"test", "b":[{"b1": {"b3":"coocoo"}}, {"b1": {"b3":"coocoo"}}]};

        testEqual(func, [source, 'b.[b1].category', { "b3": "coocoo" }], [undefined, result1]);
        testEqual(func, [source, 'b.[b1]', { "b3": "coocoo" }], [undefined, result2]);
    });

    it('should properly insert a string in a json', () => {
        const func = new UpdateJSON();

        testEqual(func, ['{"a":"test","b":{}}', 'c', 'toto'], [undefined, {"a":"test","b":{},"c":"toto"}]);
        testEqual(func, [{}, 'c', 'toto'], [undefined, {"c":"toto"}]);
    });

    it('should properly insert a stringified json in a json', () => {
        const func = new UpdateJSON();

        testEqual(func, ['{"a":"test","b":{}}', 'c', {}], [undefined, {"a":"test","b":{},"c":{}}]);
        testEqual(func, ['{"a":"test","b":{}}', 'c', {"d":"toto"}], [undefined, {"a":"test","b":{},"c":{"d":"toto"}}]);
        testEqual(func, [{"a":"test","b":{}}, 'c', [1,2,3,4,5]], [undefined, {"a":"test","b":{},"c":[1,2,3,4,5]}]);
        testEqual(func, [{"a":"test","b":{}}, 'c', ["a","b","c"]], [undefined, {"a":"test","b":{},"c":["a","b","c"]}]);
    });

    it('should properly display an error when source is not a string', () => {
        const func = new UpdateJSON();

        const context = new BrickContext();
        const forwardEvent = jasmine.createSpy().and.callFake(() => {});
        const setter = jasmine.createSpy().and.callFake(() => {});
        const setterError = jasmine.createSpy().and.callFake(() => {});

        func.update(context, [42, 'c', {}], [ forwardEvent, setter, setterError ]);

        expect(forwardEvent).not.toHaveBeenCalled();
        expect(setter).not.toHaveBeenCalled();
    });
    it('should not set the output when given an empty path', () => {
        const func = new UpdateJSON();

        const context = new BrickContext();
        const forwardEvent = jasmine.createSpy().and.callFake(() => {});
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});

        const run = () => func.update(context, [{ "a": { "b": "hello"}}, '', {}], [ forwardEvent, setResult, setError ]);

        expect(run).not.toThrowError();
        expect(forwardEvent).not.toHaveBeenCalled();
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });

    it('should properly handle an invalid JSON as input', () => {
        const func = new UpdateJSON();

        const context = new BrickContext();
        const forwardEvent = jasmine.createSpy().and.callFake(() => {});
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        const run = () => func.update(context, ['{"a":"test",', 'c', {}], [ forwardEvent, setResult, setError ]);

        expect(run).not.toThrowError();
        expect(forwardEvent).not.toHaveBeenCalled();
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });
});
