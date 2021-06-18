import { FunctionBrick, registerBrick } from 'olympe';
import getScopeContext from "./util/updateContextProperty";

export default class FeedUIProperty extends FunctionBrick {

    /**
     * Executed every time an input (uIProperty, value) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {*} _
     * @param {*} value
     * @param {!Array} outputs
     */
    onUpdate(context, [_, value], outputs) {
        const [scope, property] = getScopeContext(this, this.getInputs()[0]);
        if (scope && property) {
            let offContext;
            offContext = context.onContext(scope, (scopeContext) => {
                offContext && offContext();
                scopeContext.set(property, value);
            });
        }
    }
}

registerBrick('0179f157cb4687706403', FeedUIProperty);
