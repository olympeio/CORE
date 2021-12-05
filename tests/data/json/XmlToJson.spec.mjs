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
        new XmlToJson().update(new Context(), [xml, wrappersPath], [errorSetter, jsonSetter]);
        expect(errorSetter).toHaveBeenCalled();
        expect(jsonSetter).not.toHaveBeenCalled();
    });

});
