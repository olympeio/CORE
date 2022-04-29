import JSONToXML from '../../../src/core/data/json/JSON_To_XML.js';
import testEqual from '../../helpers/testEqual.mjs';
import { BrickContext } from 'olympe';

describe('JSONToXML brick', () => {
    it('should return a correct json given a xml string', () => {
        const jsonAsString = JSON.stringify({
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

        const json = {
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
        };

        const expectedXML = '<root><menu><id>file</id><value>File</value><popup><menuitem><value>New</value><onclick>CreateNewDoc()</onclick></menuitem><menuitem><value>Open</value><onclick>OpenDoc()</onclick></menuitem><menuitem><value>Close</value><onclick>CloseDoc()</onclick></menuitem></popup></menu></root>';
        testEqual(new JSONToXML(), [json, 'root'], [expectedXML]);
        testEqual(new JSONToXML(), [jsonAsString, 'root'], [expectedXML]);
    });

    it('should trigger the error flow given an incorrect json', () => {
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});

        new JSONToXML().update(new BrickContext(), ['{"a":"test",', 'root'], [setResult, setError]);
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });

    it('should not return anything if provided input is not string or json object', () => {
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        const run = () =>  new JSONToXML().update(new BrickContext(), [344, 'root'], [setResult, setError]);

        expect(run).not.toThrowError();
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).not.toHaveBeenCalled();
    });
});
