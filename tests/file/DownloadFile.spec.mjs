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

import DownloadFile from '../../src/core/file/DownloadFile.js'
import {Context} from 'olympe';

describe('DownloadFile brick', () => {

    it('should call the method to download the file with the name given as input', () => {
        // mock file model
        const file = {};
        file.saveAs = jasmine.createSpy();

        // run action
        const d = new DownloadFile();
        d.update(new Context(), ['test.txt', file], [() => {}]);

        // check method to download file has been called
        expect(file.saveAs).toHaveBeenCalledTimes(1);
        expect(file.saveAs).toHaveBeenCalledWith('test.txt');
    });

    it('should call the method to download the file with the file name', () => {
        // mock file model
        const file = {};
        file.saveAs = jasmine.createSpy();
        file.get = jasmine.createSpy().and.returnValue('test2.txt');

        // run action
        const d = new DownloadFile();
        d.update(new Context(), [undefined, file], [() => {}]);

        // check method to download file has been called
        expect(file.saveAs).toHaveBeenCalledTimes(1);
        expect(file.saveAs).toHaveBeenCalledWith('test2.txt');
    });
});
