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

import MathFunctions from '../../src/core/math/MathFunctions.ts';
import testEqual from '../helpers/testEqual.mjs';
import { BrickContext } from 'olympe';

describe('MathFunctions brick', () => {
    let rootCtx;
    beforeEach(() => {
        rootCtx = new BrickContext();
    });

    it('should compute the correct value for a valid math function', () => {
        testEqual(new MathFunctions(), ['sqrt', 4], [2]);
    });
    it('should not set the output when the name of the function is incorrect', () => {

        const setter = jasmine.createSpy().and.callFake(() => {});

        new MathFunctions().update(rootCtx.createChild(), ['toto', 4], [setter]);

        expect(setter).not.toHaveBeenCalled();
    });
    it('should not set the output when trying to call a function with more than one parameter', () => {
        const setter = jasmine.createSpy().and.callFake(() => {});

        new MathFunctions().update(rootCtx.createChild(), ['pow', 2], [setter]);

        expect(setter).not.toHaveBeenCalled();
    });
    it('should not set the output when trying to call a function with an input that is not a number', () => {
        const setter = jasmine.createSpy().and.callFake(() => {});

        new MathFunctions().update(rootCtx.createChild(), ['sqrt', 'four'], [setter]);

        expect(setter).not.toHaveBeenCalled();
    });
});
