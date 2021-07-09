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
