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

import Now from '../../src/core/datetime/Now.js';
import {BrickContext } from 'olympe';

describe('Now brick', () => {


    it('should setup an interval', () => {
        const interval = 500;
        spyOn(window, 'setInterval').and.callFake(
            (f, i) => {
                expect(i).toBe(interval);
                f();
            }
        );

        const setter = jasmine.createSpy().and.callFake(() => {});

        new Now().update(new BrickContext().createChild(), [interval], [setter]);

        expect(setInterval).toHaveBeenCalled();
        expect(setter).toHaveBeenCalled();
    });

    it('should clear the interval upon context destruction', () => {
        const now = new Now();
        const context = new BrickContext().createChild();

        spyOn(window, 'clearInterval');

        now.update(context, [500], [() => {}]);

        expect(clearInterval).not.toHaveBeenCalled();

        now.destroy(context);

        expect(clearInterval).toHaveBeenCalled();
    });

});
