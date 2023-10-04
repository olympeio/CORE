import { ActionBrick, registerBrick } from 'olympe';

export default class RefreshApp extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     */
    update(context, inputs, [forwardEvent]) {
        window.location.reload();
    }
}

registerBrick('017a622b296141ff6387', RefreshApp);
