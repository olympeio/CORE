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

import IsAuthenticated from '../../src/core/auth/IsAuthenticated.js';
import testEqual from '../helpers/testEqual.mjs';
import {Auth, AuthState} from "@olympeio/runtime-web";

describe('IsAuthenticated brick', () => {
    it('should correctly checks whether the user is authenticated or not', async () => {
        // TODO
    });

    it('should return false if the user is not authenticated', async () => {
        const isAuthenticated = new IsAuthenticated();
        testEqual(isAuthenticated, [], [false]);
    });

    it('should return true if the user is authenticated', async () => {
        const isAuthenticated = new IsAuthenticated();
        spyOn(Auth, 'getState').and.returnValue(AuthState.AUTHENTICATED);

        testEqual(isAuthenticated, [], [true]);
    });
});
