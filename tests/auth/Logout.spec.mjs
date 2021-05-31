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
