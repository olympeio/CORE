import {ActionBrick, registerBrick, BrickContext, GlobalProperties} from 'olympe';

export default class ExecuteOnRuntimeOnly extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} param
     * @param {function()} forwardEvent
     */
    update($, [param], [forwardEvent]) {
        if(!$.get(GlobalProperties.EDITION, true)) {
            forwardEvent();
        }
    }
}

registerBrick('018adae0071e9df7f329', ExecuteOnRuntimeOnly);
