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
            expect(window.open).toHaveBeenCalledWith('', undefined);
            done()
        });
        outputs.push(resultSpy);

        let fakeObject = {};

        spyOn(window, 'open').and.callFake( () => {
            return fakeObject;
        });

        brick.update(context, ['https://google.com', false], outputs);

        expect(fakeObject.location).toEqual('https://google.com');
    });

    it('should open a the url in the same tab if the corresponding param is true', (done) => {
        const brick = new OpenURL();

        const context = new Context();

        const resultSpy = jasmine.createSpy();

        const outputs = [];
        outputs.push(() => {
            expect(resultSpy).toHaveBeenCalledWith(true);
            expect(window.open).toHaveBeenCalled();
            expect(window.open).toHaveBeenCalledWith('', '_self');
            done()
        });
        outputs.push(resultSpy);

        let fakeObject = {};

        spyOn(window, 'open').and.callFake( () => {
            return fakeObject;
        });

        brick.update(context, ['https://google.com', true], outputs);

        expect(fakeObject.location).toEqual('https://google.com');
    });

    it('should return a false result if tab opening fail', (done) => {
        const brick = new OpenURL();

        const context = new Context();

        const resultSpy = jasmine.createSpy();

        const outputs = [];
        outputs.push(() => {
            expect(resultSpy).toHaveBeenCalledWith(false);
            expect(window.open).toHaveBeenCalled();
            expect(window.open).toHaveBeenCalledWith('', undefined);
            done()
        });
        outputs.push(resultSpy);

        spyOn(window, 'open').and.callFake( () => {
            return null;
        });

        brick.update(context, [undefined], outputs);
    });
});
