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

import Logout from '../../src/core/auth/Logout.js';
import { Context, Auth, AuthState } from 'olympe';

describe('Logout brick', () => {
    it('should not dispatch the control flow if not authenticated', () => {
        const brick = new Logout();
        const cb = jasmine.createSpy();

        brick.update(new Context(), [], [cb]);

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

        brick.update(new Context(), [], [cb]);

        expect(cb).toHaveBeenCalledTimes(1);
    });
});
