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

import Branch from '../../src/core/util/Branch.js';
import {Context} from "olympe";

describe('Branch brick', () => {

    xit('should trigger the right output', (done) => {
        const branch = new Branch();
        spyOn(branch, 'getInputs').and.returnValue(['event', 'condition']);
        spyOn(branch, 'getOutputs').and.returnValue(['trueDispatcher', 'falseDispatcher']);

        const context = new Context('branch');

        const trueDispatcher = jasmine.createSpy('true');
        const falseDispatcher = jasmine.createSpy('false');

        context.observe('trueDispatcher').subscribe(trueDispatcher);
        context.observe('falseDispatcher').subscribe(falseDispatcher);

        branch.run(context);

        context.set('event', Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        context.set('condition', true);
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
        context.set('event', Date.now());
        expect(falseDispatcher).not.toHaveBeenCalled();
        expect(trueDispatcher).toHaveBeenCalled();
        trueDispatcher.calls.reset(); falseDispatcher.calls.reset();

        context.set('condition', false);
        context.set('event', Date.now());
        expect(falseDispatcher).toHaveBeenCalled();
        expect(trueDispatcher).not.toHaveBeenCalled();
    });
});
