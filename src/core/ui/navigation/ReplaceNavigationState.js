
import { Brick, registerBrick, BrickContext, GlobalProperties } from 'olympe';
import {updateNavigationState} from 'helpers/navigation';
import {getLogger} from "logging";

export default class ReplaceNavigationState extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} state
     * @param {function()} forwardEvent
     */
    update(context, [state], [forwardEvent]) {
        if (!context.get(GlobalProperties.EDITION, true)) {
            updateNavigationState(state, false);
        } else {
            getLogger('ReplaceNavigationState')?.info('Navigation state changes are ignored in edition mode.');
        }
        forwardEvent();
    }
}

registerBrick('017aedc73317eb6265f1', ReplaceNavigationState);
