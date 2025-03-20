import { ActionBrick, registerBrick, BrickContext, GlobalProperties } from 'olympe';
import {updateNavigationState} from 'helpers/navigation';
import {getLogger} from "logging";

export default class PushNavigationState extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} state
     * @param {function()} forwardEvent
     */
    update(context, [state], [forwardEvent]) {
        if (!context.get(GlobalProperties.EDITION, true)) {
            updateNavigationState(state, true);
        } else {
            getLogger('PushNavigationState')?.info('Navigation state changes are ignored in edition mode.');
        }
        forwardEvent();
    }
}

registerBrick('017aedb1b34419737ca4', PushNavigationState);
