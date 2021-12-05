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

import CatchErrors from '../../src/core/util/CatchErrors.js';
import {Context, ErrorFlow} from 'olympe';

describe('CatchErrors brick', () => {
    it('should catch an error, then trigger a control flow and spread its details', () => {
        const brick = new CatchErrors();
        const context = new Context();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, code);

        const forwardEventSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();
        const setCodeSpy = jasmine.createSpy();

        brick.update(
            context, [errorFlow], [forwardEventSpy, setMessageSpy, setCodeSpy]
        );

        expect(forwardEventSpy).toHaveBeenCalled();
        expect(setCodeSpy).toHaveBeenCalledWith(code);
        expect(setMessageSpy).toHaveBeenCalledWith(message);
    });
});
