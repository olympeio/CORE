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

import Logout from '../../src/core/auth/Logout.js';
import { Context, Auth, AuthState } from 'olympe';

describe('Logout brick', () => {
    it('should not dispatch the control flow if not authenticated', () => {
        const brick = new Logout();
        const cb = jasmine.createSpy();

        brick.onUpdate(new Context(), [], [cb]);

        expect(cb).toHaveBeenCalledTimes(0);
    });

    it('should dispatch the control flow only if authenticated', () => {
        const brick = new Logout();
        const cb = jasmine.createSpy();
        spyOn(Auth, 'getState').and.returnValues(AuthState.AUTHENTICATED, AuthState.GUEST);
        spyOn(Auth, 'logout').and.callFake(() => {
            return new Promise((done) => {
                cb();
                done();
            });
        });

        brick.onUpdate(new Context(), [], [cb]);

        expect(cb).toHaveBeenCalledTimes(1);
    });
});
