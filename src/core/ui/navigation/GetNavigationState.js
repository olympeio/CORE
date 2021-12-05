
import { FunctionBrick, registerBrick, Context } from 'olympe';
import {NavigationManager, parseCurrentHash} from 'helpers/navigation';

/**
## Description
Gets the navigation state, the data after the hashtag (#) in the broswer URL for the current page
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Hash | String |  |

**/
export default class GetNavigationState extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {function(string)} setState
     */
    update(context, inputs, [setState]) {
        setState(parseCurrentHash());
        const callbackId = NavigationManager.generateUniqueCallbackId();
        NavigationManager.get().onOnHashChange(() => {
            setState(parseCurrentHash());
        }, callbackId);
        context.set('NavigationManager_callbackId', callbackId);
    }

    /**
     * @override
     */
    destroy(context) {
        // unregister the callback
        NavigationManager.get().offOnHashChange(context.get('NavigationManager_callbackId'));
    }
}

registerBrick('017aeda30452a1965bc7', GetNavigationState);
