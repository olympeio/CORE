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

import JsonToXml from '../../../../src/core/data/json/deprecated/JsonToXml.js';
import testEqual from '../../../helpers/testEqual.mjs';
import {Context} from 'olympe';

describe('JsonToXml brick', () => {
    it('should return an empty string given an empty json', () => {
        // When
        const json = JSON.stringify({});
        const wrappersPath = '';

        const expectedXml = '';

        testEqual(new JsonToXml(), [json, wrappersPath], [undefined, expectedXml]);
    });

    it('should return a correct xml string given a json', () => {
        // When
        const json = JSON.stringify({
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
        const wrappersPath = '';

        // Then
        const expectedXml = '<menu><id>file</id><value>File</value><popup><menuitem><value>New</value><onclick>CreateNewDoc()</onclick></menuitem><menuitem><value>Open</value><onclick>OpenDoc()</onclick></menuitem><menuitem><value>Close</value><onclick>CloseDoc()</onclick></menuitem></popup></menu>';

        testEqual(new JsonToXml(), [json, wrappersPath], [undefined, expectedXml]);
    });

    it('should return the desired xml string given a json and a path', () => {

        // When
        const json = JSON.stringify({
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
        const wrappersPath = 'wrapOne.wrapTwo';

        // Then
        const expectedXml = '<wrapOne><wrapTwo><menu><id>file</id><value>File</value><popup><menuitem><value>New</value><onclick>CreateNewDoc()</onclick></menuitem><menuitem><value>Open</value><onclick>OpenDoc()</onclick></menuitem><menuitem><value>Close</value><onclick>CloseDoc()</onclick></menuitem></popup></menu></wrapTwo></wrapOne>';

        testEqual(new JsonToXml(), [json, wrappersPath], [undefined, expectedXml]);
    });

    it('should trigger the error flow given an incorrect json', () => {
        // When
        const json = '{"a": }';
        const wrappersPath = '';
        const errorSetter = jasmine.createSpy().and.callFake(() => {});
        const xmlSetter = jasmine.createSpy().and.callFake(() => {});

        // Then
        new JsonToXml().update(new Context(), [json, wrappersPath], [errorSetter, xmlSetter]);
        expect(errorSetter).toHaveBeenCalled();
        expect(xmlSetter).not.toHaveBeenCalled();
    });

});
