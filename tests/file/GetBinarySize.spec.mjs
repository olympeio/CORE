import GetBinarySize from '../../src/core/file/GetBinarySize.js'
import { BrickContext } from 'olympe';

describe('GetBinarySize brick', () => {
    it('should return the correct size for a File object', () => {
        const setSizeSpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        // mock file model
        const file = {};
        file.saveAs = jasmine.createSpy();
        file.get = jasmine.createSpy().and.returnValue('test2.txt');

        new GetBinarySize().update(new BrickContext(), [file], [forwardEventSpy, setSizeSpy]);
        expect(setSizeSpy).toHaveBeenCalledWith(0);
        expect(forwardEventSpy).toHaveBeenCalled();
    });

    it('should return the correct size for an ArrayBuffer', () => {
        const setSizeSpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        new GetBinarySize().update(new BrickContext(), [new ArrayBuffer(8)], [forwardEventSpy, setSizeSpy]);
        expect(setSizeSpy).toHaveBeenCalledWith(8);
        expect(forwardEventSpy).toHaveBeenCalled();
    });

    it('should return the correct size for a DataView', () => {
        const arrayBuffer = new ArrayBuffer(8);
        const dataView = new DataView(arrayBuffer);
        const setSizeSpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        new GetBinarySize().update(new BrickContext(), [dataView], [forwardEventSpy, setSizeSpy]);
        expect(setSizeSpy).toHaveBeenCalledWith(8);
        expect(forwardEventSpy).toHaveBeenCalled();
    });

    it('should return the correct size for a binary string', () => {
        const setSizeSpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        new GetBinarySize().update(new BrickContext(), ['01010101'], [forwardEventSpy, setSizeSpy]);
        expect(setSizeSpy).toHaveBeenCalledWith(8);
        expect(forwardEventSpy).toHaveBeenCalled();
    });

    it('should throw an error for invalid binary input', () => {
        const setSizeSpy = jasmine.createSpy();
        const forwardEventSpy = jasmine.createSpy();

        new GetBinarySize().update(new BrickContext(), [123], [forwardEventSpy, setSizeSpy]);
        expect(setSizeSpy).toHaveBeenCalledWith(0);
        expect(forwardEventSpy).toHaveBeenCalled();
    });
});
