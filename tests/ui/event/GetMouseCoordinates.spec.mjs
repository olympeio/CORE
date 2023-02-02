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

import GetMouseCoordinates from '../../../src/core/ui/event/GetMouseCoordinates.js';
import {BrickContext} from 'olympe';

describe('GetMouseCoordinates brick', () => {
    it('should return the mouse coordinates', () => {
        const brick = new GetMouseCoordinates();

        const context = new BrickContext().createChild();
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

        brick.update(context, [], outputs);
    });
});
