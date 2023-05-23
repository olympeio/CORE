import { BrickContext } from 'olympe';
import GetNavigationRouteImpl from '../../src/core/ui/navigation/GetNavigationRouteImpl.js';
import SetNavigationRouteImpl from '../../src/core/ui/navigation/SetNavigationRouteImpl.js';

describe('navigation routing bricks', () => {
    describe('GetNavigationRoute brick', () => {
        it('returns the corresponding value for a found key', () => {
            const setValueSpy = jasmine.createSpy();
            new GetNavigationRouteImpl().update(new BrickContext(), ['menu=demand;tab=first', 'menu', 'balance'], [setValueSpy]);
            expect(setValueSpy).toHaveBeenCalledWith('demand');
        });

        it('returns the default value for not found key', () => {
            const setValueSpy = jasmine.createSpy();
            new GetNavigationRouteImpl().update(new BrickContext(), ['menu=demand;tab=first', 'category', 'balance'], [setValueSpy]);
            expect(setValueSpy).toHaveBeenCalledWith('balance');
        });

        it('returns the default value when state is empty', () => {
            const setValueSpy = jasmine.createSpy();
            new GetNavigationRouteImpl().update(new BrickContext(), ['', 'menu', 'balance'], [setValueSpy]);
            expect(setValueSpy).toHaveBeenCalledWith('balance');
        });

        it('returns the valid value when state is not in form of pairs', () => {
            const setValueSpy = jasmine.createSpy();
            new GetNavigationRouteImpl().update(new BrickContext(), ['menu=demand;tab', 'menu', 'balance'], [setValueSpy]);
            expect(setValueSpy).toHaveBeenCalledWith('demand');
        });
    });

    describe('SetNavigationRoute brick', () => {
        it('adds a new key-value pair to an empty state', () => {
            const setValueSpy = jasmine.createSpy();
            const forwardEventSpy = jasmine.createSpy();

            new SetNavigationRouteImpl().update(new BrickContext(), ['', 'menu', 'demand'], [forwardEventSpy, setValueSpy]);
            expect(setValueSpy).toHaveBeenCalledWith('menu=demand');
            expect(forwardEventSpy).toHaveBeenCalled();
        });

        it('updates an existing key with a new value', () => {
            const setValueSpy = jasmine.createSpy();
            const forwardEventSpy = jasmine.createSpy();

            new SetNavigationRouteImpl().update(new BrickContext(), ['tab=first;menu=demand', 'menu', 'balance'], [forwardEventSpy, setValueSpy]);
            expect(setValueSpy).toHaveBeenCalledWith( 'tab=first;menu=balance');
            expect(forwardEventSpy).toHaveBeenCalled();
        });

        it('adds a new key-value pair to an existing state', () => {
            const setValueSpy = jasmine.createSpy();
            const forwardEventSpy = jasmine.createSpy();

            new SetNavigationRouteImpl().update(new BrickContext(), ['tab=first', 'menu', 'demand'], [forwardEventSpy, setValueSpy]);
            expect(setValueSpy).toHaveBeenCalledWith( 'tab=first;menu=demand');
            expect(forwardEventSpy).toHaveBeenCalled();
        });
    });
});
