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

import {Context} from 'olympe';
import Ticker from "../../src/core/util/Ticker.js";

describe('Ticker brick', () => {
    it('should forward event after right interval', async () => {
        const ticker = new Ticker();

        const context = new Context()
        spyOn(ticker, 'getInputs').and.returnValue(['interval', 'activated']);
        const outputSetter = jasmine.createSpy('ticker');

        ticker.setupUpdate(
            context,
            (inputs) => ticker.onUpdate(context, inputs, [outputSetter]),
            jasmine.createSpy()
        );

        const wait = (time) => new Promise((next) => setTimeout(next, time));

        context.set('interval', 10);
        expect(outputSetter).not.toHaveBeenCalled();
        context.set('activated', true);
        outputSetter.calls.reset();
        await wait(11);
        expect(outputSetter).toHaveBeenCalled();
        outputSetter.calls.reset();
        await wait(5);
        expect(outputSetter).not.toHaveBeenCalled();
        await wait(6);
        expect(outputSetter).toHaveBeenCalled();
        outputSetter.calls.reset();
        context.set('activated', false);
        await wait(11);
        expect(outputSetter).not.toHaveBeenCalled();
    });
});
