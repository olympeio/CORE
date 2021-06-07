import Now from '../../src/core/datetime/Now.js';
import { Context } from 'olympe';

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

        new Now().onUpdate(new Context(), [interval], [setter]);

        expect(setInterval).toHaveBeenCalled();
        expect(setter).toHaveBeenCalled();
    });

    it('should clear the interval upon context destruction', () => {
        const now = new Now();
        const context = new Context();

        spyOn(window, 'clearInterval');

        now.onUpdate(context, [500], [() => {}]);

        expect(clearInterval).not.toHaveBeenCalled();

        now.onDestroy(context);

        expect(clearInterval).toHaveBeenCalled();
    });

});
