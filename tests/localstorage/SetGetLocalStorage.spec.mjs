import testEqual from '../helpers/testEqual.mjs';
import {BrickContext} from 'olympe';
import {LocalStorageManager} from "../../src/core/localstorage/LocalStorageManager.js";
import SetLocalStorage from "../../src/core/localstorage/functions/SetLocalStorage.js";
import GetLocalStorage from "../../src/core/localstorage/functions/GetLocalStorage.js";

describe('SetLocalStorage & GetLocalStorage functions', () => {

    afterEach(() => {
        localStorage.clear();

        // force delete the registry, as some callbacks are not unregistered within the tests
        LocalStorageManager.onStorageCallbacksMap = undefined;
    })
    
    it('should store a value', () => {
        const func = new SetLocalStorage();
        func.update(new BrickContext().createChild(), ['keyA', 'valA'], []);

        expect(localStorage.getItem('keyA'), 'valA');
    });

    it('should read a stored value', () => {
        const get = new GetLocalStorage();

        localStorage.setItem('keyA', 'valA');

        testEqual(get, ['keyA'], ['valA']);
    });

    it('should be notified of newly set values', () => {
        const get = new GetLocalStorage();
        const setValueUpdate = jasmine.createSpy();

        get.update(new BrickContext().createChild(), ['keyA'], [setValueUpdate]);

        expect(setValueUpdate).toHaveBeenCalledOnceWith(null);
        setValueUpdate.calls.reset()

        const set = new SetLocalStorage();
        set.update(new BrickContext().createChild(), ['keyA', 'valA'], []);

        expect(setValueUpdate).toHaveBeenCalledOnceWith('valA');
    });

    it('should stop updating once the brick is unloaded', () => {
        const context = new BrickContext();
        const get = new GetLocalStorage();
        const setValueUpdate = jasmine.createSpy();
        const set = new SetLocalStorage();

        set.update(new BrickContext().createChild(), ['keyA', 'valA'], []);
        get.update(context, ['keyA'], [setValueUpdate]);

        setValueUpdate.calls.reset()

        get.destroy(context);
        set.update(new BrickContext().createChild(), ['keyA', 'valB'], []);
        expect(setValueUpdate).toHaveBeenCalledTimes(0);
    });

    it('should handle multiple bricks listening on the local storage', () => {
        const rootCtx = new BrickContext();
        const context1 = rootCtx.createChild();
        const context2 = rootCtx.createChild();
        const get1 = new GetLocalStorage();
        const get2 = new GetLocalStorage();
        const setValueUpdate1 = jasmine.createSpy('setValueUpdate1');
        const setValueUpdate2 = jasmine.createSpy('setValueUpdate2');

        // both bricks should return the initial value
        localStorage.setItem('keyA', 'valA');
        get1.update(context1, ['keyA'], [setValueUpdate1]);
        get2.update(context2, ['keyA'], [setValueUpdate2]);

        expect(setValueUpdate1).toHaveBeenCalledOnceWith('valA');
        expect(setValueUpdate2).toHaveBeenCalledOnceWith('valA');
        setValueUpdate1.calls.reset();
        setValueUpdate2.calls.reset();

        // both bricks should be updated
        const set = new SetLocalStorage();
        set.update(rootCtx.createChild(), ['keyA', 'valB'], []);

        expect(setValueUpdate1).toHaveBeenCalledOnceWith('valB');
        expect(setValueUpdate2).toHaveBeenCalledOnceWith('valB');
        setValueUpdate1.calls.reset();
        setValueUpdate2.calls.reset();

        // unloading one brick should not affect the other
        get1.destroy(context1);
        set.update(rootCtx.createChild(), ['keyA', 'valC'], []);
        expect(setValueUpdate1).toHaveBeenCalledTimes(0);
        expect(setValueUpdate2).toHaveBeenCalledOnceWith('valC');
    });
});
