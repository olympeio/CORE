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
