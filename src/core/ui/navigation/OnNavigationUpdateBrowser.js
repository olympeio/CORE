
import { Brick, registerBrick, BrickContext } from 'olympe';
import {NavigationManager, parseCurrentHash} from 'helpers/navigation';

export default class OnNavigationUpdateBrowser extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} inputs
     * @param {function(number)} setControlFlow
     * @param {function(string)} setHash
     */
    update(context, inputs, [setControlFlow, setHash]) {
        // Get the hash at load time
        setHash(parseCurrentHash())
        setControlFlow(Date.now());
        // Register callback to the popstate event
        const navigationMgr = NavigationManager.get();
        const cbId = navigationMgr.onOnPopState(() => {
            setHash(parseCurrentHash())
            setControlFlow(Date.now());
        });
        context.onClear(() => navigationMgr.offOnPopState(cbId));
    }
}

registerBrick('017aedae74ab08a83af4', OnNavigationUpdateBrowser);
