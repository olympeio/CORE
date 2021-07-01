/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import XmlToJson from '../../../src/core/data/json/XmlToJson.js';
import testEqual from '../../helpers/testEqual.mjs';
import {Context} from 'olympe';

describe('XmlToJson brick', () => {


    it('should return an empty string given an empty xml', () => {
        // When
        const xml = '';
        const wrappersPath = '';

        // Then
        const expectedJson = '';

        testEqual(new XmlToJson(), [xml, wrappersPath], [undefined, expectedJson]);
    });

    it('should return a correct json given a xml string', () => {
        // When
        const xml = '<menu><id>file</id><value>File</value><popup><menuitem><value>New</value><onclick>CreateNewDoc()</onclick></menuitem><menuitem><value>Open</value><onclick>OpenDoc()</onclick></menuitem><menuitem><value>Close</value><onclick>CloseDoc()</onclick></menuitem></popup></menu>';
        const wrappersPath = '';

        // Then
        const expectedJson = JSON.stringify({
            'menu': {
                'id': 'file',
                'value': 'File',
                'popup': {
                    'menuitem': [
                        {
                            'value': 'New',
                            'onclick': 'CreateNewDoc()'
                        },
                        {
                            'value': 'Open',
                            'onclick': 'OpenDoc()'
                        },
                        {
                            'value': 'Close',
                            'onclick': 'CloseDoc()'
                        }
                    ]
                }
            }
        });

        testEqual(new XmlToJson(), [xml, wrappersPath], [undefined, expectedJson]);
    });

    it('should return the desired json given a xml string and a path', () => {
        // When
        const xml = '<menu><id>file</id><value>File</value><popup><menuitem><value>New</value><onclick>CreateNewDoc()</onclick></menuitem><menuitem><value>Open</value><onclick>OpenDoc()</onclick></menuitem><menuitem><value>Close</value><onclick>CloseDoc()</onclick></menuitem></popup></menu>';
        const wrappersPath = 'menu.popup';

        // Then
        const expectedJson = JSON.stringify({
            'menuitem': [
                {
                    'value': 'New',
                    'onclick': 'CreateNewDoc()'
                },
                {
                    'value': 'Open',
                    'onclick': 'OpenDoc()'
                },
                {
                    'value': 'Close',
                    'onclick': 'CloseDoc()'
                }
            ]
        });

        testEqual(new XmlToJson(), [xml, wrappersPath], [undefined, expectedJson]);
    });

    it('should trigger the error flow given an incorrect xml', () => {

        // When
        const xml = '<menu><id>file';
        const wrappersPath = '';
        const errorSetter = jasmine.createSpy().and.callFake(() => {});
        const jsonSetter = jasmine.createSpy().and.callFake(() => {});

        // Then
        new XmlToJson().onUpdate(new Context(), [xml, wrappersPath], [errorSetter, jsonSetter]);
        expect(errorSetter).toHaveBeenCalled();
        expect(jsonSetter).not.toHaveBeenCalled();
    });

});
