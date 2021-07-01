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

import ControlFlowSynchronization from '../../src/core/util/ControlflowSynchronization.js';
import {Context} from 'olympe';

describe('ControlFlowSynchronization brick', () => {
    it('should trigger output control flow after the two inputs have been triggered at least once ', () => {
        const brick = new ControlFlowSynchronization();
        const incomingEvent_1 = Date.now();
        const incomingEvent_2 = Date.now();

        const context = new Context();

        const forwardEventSpy = jasmine.createSpy();

        brick.onUpdate(context, [ incomingEvent_1, incomingEvent_2 ], [ forwardEventSpy ]);

        expect(forwardEventSpy).toHaveBeenCalledTimes(1);
    });
});
