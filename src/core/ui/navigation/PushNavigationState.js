
import { ActionBrick, registerBrick, Context } from 'olympe';
import {updateNavigationState} from 'helpers/navigation';

/**
## Description
Push a new navigation state, the data after the hashtag (#) in the broswer current page URL.

Any old state is kept, and can be accessed using the browser back and next buttons.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| State | String |  |

**/
export default class PushNavigationState extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} state
     * @param {function()} forwardEvent
     */
    update(context, [state], [forwardEvent]) {
        updateNavigationState(state, true);
        forwardEvent();
    }
}

registerBrick('017aedb1b34419737ca4', PushNavigationState);
