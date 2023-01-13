import XMLToJSON from '../../../src/core/data/converters/XML_To_JSON.js';
import testEqual from '../../helpers/testEqual.mjs';
import { BrickContext } from 'olympe';

describe('XMLToJSON brick', () => {
    it('should return a correct json given a xml string', () => {
        const xml = '<menu><id>file</id><value>File</value><popup><menuitem><value>New</value><onclick>CreateNewDoc()</onclick></menuitem><menuitem><value>Open</value><onclick>OpenDoc()</onclick></menuitem><menuitem><value>Close</value><onclick>CloseDoc()</onclick></menuitem></popup></menu>';
        const expectedJson = {
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

        testEqual(new XMLToJSON(), [xml], [expectedJson, undefined]);
    });

    it('should trigger the error flow given an incorrect xml', () => {
        const xml = '<menu><i/dile';
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});

        new XMLToJSON().update(new BrickContext(), [xml], [setResult, setError]);
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).toHaveBeenCalled();
    });

    it('should not return anything if provided input is not string or json', () => {
        const setResult = jasmine.createSpy().and.callFake(() => {});
        const setError = jasmine.createSpy().and.callFake(() => {});
        const run = () =>  new XMLToJSON().update(new BrickContext(), [344], [setResult, setError]);

        expect(run).not.toThrowError();
        expect(setResult).not.toHaveBeenCalled();
        expect(setError).not.toHaveBeenCalled();
    });
});
