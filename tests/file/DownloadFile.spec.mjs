import DownloadFile from '../../src/core/file/DownloadFile.js'
import {Context} from 'olympe';

describe('DownloadFile brick', () => {

    it('should call the method to download the file with the name given as input', () => {
        // mock file model
        const file = {};
        file.saveAs = jasmine.createSpy();

        // run action
        const d = new DownloadFile();
        d.onUpdate(new Context(), ['test.txt', file], [() => {}]);

        // check method to download file has been called
        expect(file.saveAs).toHaveBeenCalledTimes(1);
        expect(file.saveAs).toHaveBeenCalledWith('test.txt');
    });

    it('should call the method to download the file with the file name', () => {
        // mock file model
        const file = {};
        file.saveAs = jasmine.createSpy();
        file.getProperty = jasmine.createSpy().and.returnValue('test2.txt');

        // run action
        const d = new DownloadFile();
        d.onUpdate(new Context(), [undefined, file], [() => {}]);

        // check method to download file has been called
        expect(file.saveAs).toHaveBeenCalledTimes(1);
        expect(file.saveAs).toHaveBeenCalledWith('test2.txt');
    });
});
