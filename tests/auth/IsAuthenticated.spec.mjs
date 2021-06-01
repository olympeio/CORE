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
