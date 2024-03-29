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

import ThrowError from '../../src/core/util/ThrowError.js';
import {BrickContext, ErrorFlow} from 'olympe';

describe('ThrowError brick', () => {
    xit('should generate an ErrorFlow correctly', () => {
        const brick = new ThrowError();
        spyOn(brick, 'getInputs').and.returnValue(['event', 'message', 'code']);

        const message = 'this is an error message';
        const code = 1234;

        const context = new BrickContext().createChild();

        const errorFlowSpy = jasmine.createSpy();
        const clearer = jasmine.createSpy();

        brick.setupUpdate(
            context,
            (inputs) => brick.update(context, inputs, [errorFlowSpy]),
            clearer
        );

        context.set('event', Date.now());
        expect(errorFlowSpy).toHaveBeenCalled();
        errorFlowSpy.calls.reset();

        context.set('message', message);
        context.set('code', code);
        expect(errorFlowSpy).not.toHaveBeenCalled();
        context.set('event', Date.now());
        expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create(message, code));
        errorFlowSpy.calls.reset();

    });
});
