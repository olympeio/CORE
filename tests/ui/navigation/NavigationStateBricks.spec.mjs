import {Context} from '@olympeio/runtime-web';
import {NavigationManager} from 'helpers/navigation';
import GetNavigationState from '../../../src/core/ui/navigation/GetNavigationState.js';
import OnNavigationUpdateBrowser from '../../../src/core/ui/navigation/OnNavigationUpdateBrowser.js';
import PushNavigationState from '../../../src/core/ui/navigation/PushNavigationState.js';
import ReplaceNavigationState from '../../../src/core/ui/navigation/ReplaceNavigationState.js';

describe('navigation state bricks', () => {

    afterEach(() => {
        // reset hash state to empty after each test
        history.replaceState({}, 'reset', '#');
    });

    describe('GetNavigationState brick', () => {

        it('should get the current hash state', async () => {
            const brick = new GetNavigationState();
            const context = new Context();
            const resultSpy = jasmine.createSpy();
            await pushStateInHistory('#myCurrentHash');

            // when
            brick.onUpdate(context, [], [resultSpy]);

            // then
            expect(resultSpy).toHaveBeenCalledOnceWith('myCurrentHash');
        });

        it('should get return an empty string if no hash state is set', () => {
            const brick = new GetNavigationState();
            const context = new Context();
            const resultSpy = jasmine.createSpy();

            // when
            brick.onUpdate(context, [], [resultSpy]);

            // then
            expect(resultSpy).toHaveBeenCalledOnceWith('');
        });

        it('should get the latest state if it is updated', async () => {
            const brick = new GetNavigationState();
            const context = new Context();
            const resultSpy = jasmine.createSpy();
            brick.onUpdate(context, [], [resultSpy]);
            resultSpy.calls.reset();

            // when
            await pushStateInHistory('#myNewHash');

            // then
            expect(resultSpy).toHaveBeenCalledOnceWith('myNewHash');
        });

        it('should detect successive changes in the hash state', async () => {
            const brick = new GetNavigationState();
            const context = new Context();
            const resultSpy = jasmine.createSpy();
            await pushStateInHistory('#myFirstHash');
            brick.onUpdate(context, [], [resultSpy]);
            resultSpy.calls.reset();

            // when
            await pushStateInHistory('#mySecondHash');
            // then
            expect(resultSpy).toHaveBeenCalledOnceWith('mySecondHash');
            resultSpy.calls.reset();

            // when
            await backInHistory();
            // then
            expect(resultSpy).toHaveBeenCalledOnceWith('myFirstHash');
            resultSpy.calls.reset();

            // when
            await forwardInHistory();
            // then
            expect(resultSpy).toHaveBeenCalledOnceWith('mySecondHash');
        });

    });

    describe('OnNavigationUpdateBrowser brick', () => {

        it('should return the current history state', async () => {
            const brick = new OnNavigationUpdateBrowser();
            const context = new Context();
            const controlFlowSpy = jasmine.createSpy();
            const hashSpy = jasmine.createSpy();
            await pushStateInHistory('#myCurrentHash');

            // when
            brick.onUpdate(context, [], [controlFlowSpy, hashSpy]);

            // then
            expect(controlFlowSpy).toHaveBeenCalledTimes(1);
            expect(hashSpy).toHaveBeenCalledOnceWith('myCurrentHash');
        });

        it('should update on history change by the browser', () => {
            const brick = new OnNavigationUpdateBrowser();
            const context = new Context();
            const controlFlowSpy = jasmine.createSpy();
            const hashSpy = jasmine.createSpy();
            brick.onUpdate(context, [], [controlFlowSpy, hashSpy]);
            controlFlowSpy.calls.reset();
            hashSpy.calls.reset();

            // when
            history.pushState({}, 'test', '#myNewHash');
            window.onpopstate(new PopStateEvent('popstatechange')); // fake pop state change event...

            // then
            expect(controlFlowSpy).toHaveBeenCalledTimes(1);
            expect(hashSpy).toHaveBeenCalledOnceWith('myNewHash');
        });

    });

    describe('PushNavigationState brick', () => {
        it('should push a new state to the history', async () => {
            const brick = new PushNavigationState();
            const context = new Context();
            const controlFlowSpy = jasmine.createSpy();
            await pushStateInHistory('#myCurrentHash')

            // when
            brick.onUpdate(context, ['myNewHash'], [controlFlowSpy]);

            // then
            expect(window.location.hash).toEqual('#myNewHash');
            expect(controlFlowSpy).toHaveBeenCalledTimes(1);

            // check if previous hash does exist
            await backInHistory();
            expect(window.location.hash).toEqual('#myCurrentHash');
        });

        it('should not push a state if it is equal to the current one', async () => {
            const brick = new PushNavigationState();
            const context = new Context();
            await pushStateInHistory('#myNewHash');

            const id = NavigationManager.generateUniqueCallbackId();
            const manager = NavigationManager.get();
            const onHashChangeSpy = jasmine.createSpy();
            manager.onOnHashChange(onHashChangeSpy, id);

            // when
            brick.onUpdate(context, ['myNewHash'], [() => {}]);

            // then
            expect(onHashChangeSpy).toHaveBeenCalledTimes(0);

            // cleaning
            manager.offOnHashChange(id);
        });

    });

    describe('ReplaceNavigationState brick', () => {
        it('should replace the state of the history', async () => {
            const brick = new ReplaceNavigationState();
            const context = new Context();
            const controlFlowSpy = jasmine.createSpy();
            await pushStateInHistory('#myCurrentHash');

            // when
            brick.onUpdate(context, ['myNewHash'], [controlFlowSpy]);

            // then
            expect(window.location.hash).toEqual('#myNewHash')
            expect(controlFlowSpy).toHaveBeenCalledTimes(1);

            // check if previous hash does not exist
            await backInHistory();
            expect(window.location.hash).not.toEqual('#myCurrentHash')
        });
    });

    /**
     * Register a callback on window.onhashchange, and listen to the change within a promise,
     * as hash state update is asynchronous
     * This has to be done through the NavigationManger, to avoid overwriting the callback registered by it
     *
     * @return {Promise<unknown>}
     */
    function listenOnHashChange() {
        return new Promise(res => {
            const manager = NavigationManager.get();
            const id = NavigationManager.generateUniqueCallbackId();
            manager.onOnHashChange(() => {
                manager.offOnHashChange(id);
                res();
            }, id);
        });
    }

    function pushStateInHistory(hash) {
        history.pushState({}, 'test', hash);
        const promise = listenOnHashChange();
        // when pushing state, event has to be manually triggered
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        return promise;
    }

    function backInHistory() {
        history.back();
        return listenOnHashChange();
    }

    function forwardInHistory() {
        history.forward();
        return listenOnHashChange();
    }

});
