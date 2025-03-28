import { Brick, registerBrick } from 'olympe';

export default class RefreshApp extends Brick {

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
