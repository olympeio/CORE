/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ParseJson from '../../../src/core/data/json/ParseJson.js';
import testEqual from '../../helpers/testEqual.mjs';
import {Context} from 'olympe';

describe('ParseJson brick', () => {
    it('should correctly parse a path in an object', () => {
        testEqual(new ParseJson(), ['{ "a": { "b": "hello"}}', 'a.b'], ['hello']);
    });

    it('should correctly parse a path/index in an array', () => {
        testEqual(new ParseJson(), ['[ "a", "b", "c"]', '[1]'], ['b']);
        testEqual(new ParseJson(), ['[ "a", "b", "c"]', '1'], ['b']);
    });

    it('should correctly parse a path with special characters', () => {
        const data = '{"GlobalQuote": {"01. symbol": "AAPL", "05. price": "153.1200"}}';
        testEqual(new ParseJson(), [data, '["GlobalQuote"]["01. symbol"]'], ['AAPL']);
        testEqual(new ParseJson(), [data, "GlobalQuote['05. price']"], ['153.1200']);
    });

    it('should return null when no result found', () => {
        testEqual(new ParseJson(), ['{ "a": { "b": "hello"}}', 'a.b.c'], [null]);
        testEqual(new ParseJson(), ['[ "a", "b", "c"]', '4'], [null]);
    });

    it('should return null when using an array path in an object', () => {
        testEqual(new ParseJson(), ['{ "a": { "b": "hello"}}', '0'], [null]);
    });

    it('should return null when using an object path in an array', () => {
        testEqual(new ParseJson(), ['[ "a", "b", "c"]', 'a.b'], [null]);
    });

    it('should not set the output when given an incorrect JSON', () => {
        // When
        const setter = jasmine.createSpy().and.callFake(() => {});

        // Then
        const run = () => new ParseJson().onUpdate(new Context(), ['{ "a": { "b": "hello"}', 'a.b'], [setter]);

        expect(run).not.toThrowError();
        expect(setter).not.toHaveBeenCalled();
    });

    it('should not set the output when given an empty path', () => {
        // When
        const outputValue = jasmine.createSpy();

        // Then
        const run = () => new ParseJson().onUpdate(new Context(), ['{ "a": { "b": "hello"}}', ''], [outputValue]);

        expect(run).not.toThrowError();
        expect(outputValue).not.toHaveBeenCalled();
    });

    it('should not set the output when given an incorrect path', () => {
        // When
        const outputValue = jasmine.createSpy();

        // Then
        const run = () => new ParseJson().onUpdate(new Context(), ['{ "a": { "b": "hello"}}', '///'], [outputValue]);

        expect(run).not.toThrowError();
        expect(outputValue).not.toHaveBeenCalled();
    });

    it('should return a stringified object if the result found is an object', () => {
        testEqual(new ParseJson(), ['{ "a": { "b": "hello"}}', 'a'], ['{"b":"hello"}']);
    });

    it('should return the typed object itself if the result found is not an object', () => {
        // array
        testEqual(new ParseJson(), ['{"a": [1, 2, 3]}', 'a'], ['[1,2,3]']);
        // number
        testEqual(new ParseJson(), ['{"a": 5}', 'a'], [5]);
        // boolean
        testEqual(new ParseJson(), ['{"a": false}', 'a'], [false]);
        // null
        testEqual(new ParseJson(), ['{"a": null}', 'a'], [null]);
    });

    it('should support advanced pathing capabilities provided by jsonpath lib', () => {
        const brick = new ParseJson();
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
        testEqual(brick, [data, '$..author'], ['["Nigel Rees","Evelyn Waugh","Herman Melville","J. R. R. Tolkien"]']);

        // last object
        testEqual(brick, [data, '$..book[-1:].title'], ["The Lord of the Rings"]);

        // multiple objects
        testEqual(brick, [data, '$..book[0:2].title'], ['["Sayings of the Century","Sword of Honour"]']);

        // filtering
        testEqual(brick, [data, '$..book[?(@.price<20 && @.category=="fiction")].title'], ['["Sword of Honour","Moby Dick"]']);
    });
});
