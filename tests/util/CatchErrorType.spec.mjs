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

import CatchErrorType from '../../src/core/util/CatchErrorType.js';
import { ErrorFlow, BrickContext } from 'olympe';

describe('CatchErrorType brick', () => {
    it('should catch an error, then trigger a control flow and spread its details if the input code is the same than the error code', () => {
        const brick = new CatchErrorType();
        const context = new BrickContext().createChild();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, code);

        const forwardEventSpy = jasmine.createSpy();
        const setErrorFlowSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();

        brick.update(
            context, [errorFlow, code], [forwardEventSpy, setErrorFlowSpy, setMessageSpy]
        );

        expect(forwardEventSpy).toHaveBeenCalled();
        expect(setErrorFlowSpy).not.toHaveBeenCalled();
        expect(setMessageSpy).toHaveBeenCalledWith(message);
    });

    it('should only forward the error flow if the codes are different', () => {
        const brick = new CatchErrorType();
        const context = new BrickContext().createChild();

        const message = 'this is an error message';
        const code = 1234;
        const errorFlow = ErrorFlow.create(message, 12345);

        const forwardEventSpy = jasmine.createSpy();
        const setErrorFlowSpy = jasmine.createSpy();
        const setMessageSpy = jasmine.createSpy();

        brick.update(
            context, [errorFlow, code], [forwardEventSpy, setErrorFlowSpy, setMessageSpy]
        );

        expect(forwardEventSpy).not.toHaveBeenCalled();
        expect(setErrorFlowSpy).toHaveBeenCalledWith(errorFlow);
        expect(setMessageSpy).not.toHaveBeenCalled();
    });
});
