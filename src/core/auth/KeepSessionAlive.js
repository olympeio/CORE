import { ActionBrick, registerBrick, Auth } from 'olympe';

/**
 ## Description
 Notify the DC to keep the user session alive. This resets the time left until automatic logout.
 **/
export default class KeepSessionAlive extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {function()} forwardEvent
     */
    onUpdate(context, [], [forwardEvent]) {
        Auth.sendKeepAlive();
        forwardEvent();
    }
}

registerBrick('01701ad63ae58fe08b0b', KeepSessionAlive);
