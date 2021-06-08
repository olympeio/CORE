import GetMouseCoordinates from '../../../src/core/ui/event/GetMouseCoordinates.js';
import {Context} from 'olympe';



describe('GetMouseCoordinates brick', () => {
    it('should return the mouse coordinates', () => {
        const brick = new GetMouseCoordinates();

        const context = new Context();
        const setXSpy = jasmine.createSpy();
        const setYSpy = jasmine.createSpy();

        const fakeX = 12;
        const fakeY = 15;

        let documentMock = {};
        documentMock.addEventListener = function(type, listener){
            let fakeEvent = {};
            fakeEvent.clientX = fakeX;
            fakeEvent.clientY = fakeY;

            listener(fakeEvent);

            expect(type).toEqual('mousemove');
            expect(setXSpy).toHaveBeenCalledOnceWith(fakeEvent.clientX);
            expect(setYSpy).toHaveBeenCalledOnceWith(fakeEvent.clientY);
        }

        spyOn(document, 'addEventListener').and.callFake( (_type, _listener) => {
            documentMock.addEventListener(_type, _listener);
        });

        const outputs = [];
        outputs.push(setXSpy);
        outputs.push(setYSpy);

        brick.onUpdate(context, [], outputs);
    });
});
