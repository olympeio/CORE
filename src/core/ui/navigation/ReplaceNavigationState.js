
import { ActionBrick, registerBrick, Context } from 'olympe';
import {updateNavigationState} from 'helpers/navigation';

/**
## Description
Set the navigation state, the data after the hashtag (#) in the broswer current page URL, and remove the latest state stored in the history for this page.

Any previous state pushed will be erased.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| State | String |  |

**/
export default class ReplaceNavigationState extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} state
     * @param {function()} forwardEvent
     */
    onUpdate(context, [state], [forwardEvent]) {
        updateNavigationState(state, false);
        forwardEvent();
    }
}

registerBrick('017aedc73317eb6265f1', ReplaceNavigationState);
