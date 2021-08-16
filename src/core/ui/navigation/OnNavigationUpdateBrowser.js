
import { FunctionBrick, registerBrick, Context } from 'olympe';
import {NavigationManager, parseCurrentHash} from 'helpers/navigation';

/**
## Description
When the navigation state, the data after the hashtag (#) in the broswer current page URL, is changed by the browser or manually by the user, the control flow will be triggered.

Any state changes originating from the Push or Replace Navigation State bricks are taken into account.
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| State | String |  |

**/
export default class OnNavigationUpdateBrowser extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {function(number)} setControlFlow
     * @param {function(string)} setHash
     */
    onUpdate(context, inputs, [setControlFlow, setHash]) {
        // Get the hash at load time
        setHash(parseCurrentHash())
        setControlFlow(Date.now());
        // Register callback to the popstate event
        const callbackId = NavigationManager.generateUniqueCallbackId();
        NavigationManager.get().onOnPopState(() => {
            setHash(parseCurrentHash())
            setControlFlow(Date.now());
        }, callbackId);
        context.set('NavigationManager_callbackId', callbackId);
    }

    /**
     * @override
     */
    onDestroy(context) {
        // unregister the callback
        NavigationManager.get().offOnHashChange(context.get('NavigationManager_callbackId'));
    }
}

registerBrick('017aedae74ab08a83af4', OnNavigationUpdateBrowser);
