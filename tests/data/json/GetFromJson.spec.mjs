import GetFromJSON from '../../../src/core/data/json/GetFromJSONFunction.js';
import testEqual from '../../helpers/testEqual.mjs';
import { BrickContext } from 'olympe';

describe('GetFromJSON brick', () => {
    it('should correctly parse a path in an object', () => {
        testEqual(new GetFromJSON(), [{ "a": { "b": "hello" } }, 'a.b'], ['hello']);
    });

    it('should correctly parse a path/index in an array', () => {
        testEqual(new GetFromJSON(), [["a", "b", "c"], '[1]'], ['b']);
        testEqual(new GetFromJSON(), [["a", "b", "c"], '1'], ['b']);
    });

    it('should correctly parse a path with special characters', () => {
        const data = { "GlobalQuote": { "01. symbol": "AAPL", "05. price": "153.1200" } };
        testEqual(new GetFromJSON(), [data, '["GlobalQuote"]["01. symbol"]'], ['AAPL']);
        testEqual(new GetFromJSON(), [data, "GlobalQuote['05. price']"], ['153.1200']);
    });

    it('should return null when no result found', () => {
        testEqual(new GetFromJSON(), [{ "a": { "b": "hello" } }, 'a.b.c'], [null]);
        testEqual(new GetFromJSON(), [["a", "b", "c"], '4'], [null]);
        testEqual(new GetFromJSON(), ['""', '4'], [null]);
    });

    it('should return null when using an array path in an object', () => {
        testEqual(new GetFromJSON(), [{ "a": { "b": "hello" } }, '0'], [null]);
    });

    it('should return null when using an object path in an array', () => {
        testEqual(new GetFromJSON(), [["a", "b", "c"], 'a.b'], [null]);
    });

    it('should not set the output when given an empty path', () => {
        // When
        const outputValue = jasmine.createSpy();
        const setError = jasmine.createSpy();

        // Then
        const run = () => new GetFromJSON().update(new BrickContext(), [{ "a": { "b": "hello" } }, ''], [outputValue, setError]);

        expect(run).not.toThrowError();
        expect(outputValue).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });

    it('should return a object if the result found is an object', () => {
        testEqual(new GetFromJSON(), [{ "a": { "b": "hello" } }, 'a'], [{"b":"hello"}]);
    });

    it('should return the typed object itself if the result found is not an object', () => {
        // array
        testEqual(new GetFromJSON(), [{ "a": [1, 2, 3] }, 'a'], [[1, 2, 3]]);
        // number
        testEqual(new GetFromJSON(), [{ "a": 5 }, 'a'], [5]);
        // boolean
        testEqual(new GetFromJSON(), [{ "a": false }, 'a'], [false]);
        // null
        testEqual(new GetFromJSON(), [{ "a": null }, 'a'], [null]);
    });

    it('should support advanced pathing capabilities provided by jsonpath lib', () => {
        const brick = new GetFromJSON();
        const data = JSON.stringify({
            "store": {
                "book": [
                    {
                        "category": "reference",
                        "author": "Nigel Rees",
                        "title": "Sayings of the Century",
                        "price": 8.95
                    }, {
                        "category": "fiction",
                        "author": "Evelyn Waugh",
                        "title": "Sword of Honour",
                        "price": 12.99
                    }, {
                        "category": "fiction",
                        "author": "Herman Melville",
                        "title": "Moby Dick",
                        "isbn": "0-553-21311-3",
                        "price": 8.99
                    }, {
                        "category": "fiction",
                        "author": "J. R. R. Tolkien",
                        "title": "The Lord of the Rings",
                        "isbn": "0-395-19395-8",
                        "price": 22.99
                    }
                ],
                "bicycle": {
                    "color": "red",
                    "price": 19.95
                }
            }
        });

        // recursive access
        testEqual(brick, [data, '$..author'], [["Nigel Rees", "Evelyn Waugh", "Herman Melville", "J. R. R. Tolkien"]]);

        // last object
        testEqual(brick, [data, '$..book[-1:].title'], ["The Lord of the Rings"]);

        // multiple objects
        testEqual(brick, [data, '$..book[0:2].title'], [["Sayings of the Century", "Sword of Honour"]]);

        // filtering
        testEqual(brick, [data, '$..book[?(@.price<20 && @.category=="fiction")].title'], [["Sword of Honour", "Moby Dick"]]);
    });

    it('should not set the output when given an incorrect JSON', () => {
        const setResult = jasmine.createSpy();
        const setError = jasmine.createSpy();

        new GetFromJSON().update(new BrickContext(), ['{ "a": { "b": "hello"}', 'a.b'], [setResult, setError]);

        expect(setError).toHaveBeenCalled();
        expect(setResult).not.toHaveBeenCalled();
    });
});
