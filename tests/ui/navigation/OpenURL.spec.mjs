import OpenURL from '../../../src/core/ui/navigation/OpenURL.js';
import {Context} from 'olympe';

describe('OpenURL brick', () => {
    it('should open a new tab', (done) => {
        const brick = new OpenURL();

        const context = new Context();

        const resultSpy = jasmine.createSpy();

        const outputs = [];
        outputs.push(() => {
            expect(resultSpy).toHaveBeenCalledWith(true);
            expect(window.open).toHaveBeenCalled();
            expect(window.open).toHaveBeenCalledWith('https://google.com');
            done()
        });
        outputs.push(resultSpy);

        spyOn(window, 'open').and.callFake( () => {
            return true;
        });

        brick.onUpdate(context, ['https://google.com'], outputs);
    });

    it('should return a false result if tab opening fail', (done) => {
        const brick = new OpenURL();

        const context = new Context();

        const resultSpy = jasmine.createSpy();

        const outputs = [];
        outputs.push(() => {
            expect(resultSpy).toHaveBeenCalledWith(false);
            expect(window.open).toHaveBeenCalled();
            expect(window.open).toHaveBeenCalledWith(undefined);
            done()
        });
        outputs.push(resultSpy);

        spyOn(window, 'open').and.callFake( () => {
            return false;
        });

        brick.onUpdate(context, [undefined], outputs);
    });
});
