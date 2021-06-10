import { ActionBrick, registerBrick, Transaction } from 'olympe';

/**!
 * %Tooltip: Begins a transaction.
 * %LongDesc
 * Marks the beginning of a series of transaction operations.
 */
export default class BeginTransaction extends ActionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} _
     * @param {function()} dispatchControlFlow
     */
    onUpdate(context, _, [dispatchControlFlow]) {
        context.pushTransaction(new Transaction());
        dispatchControlFlow();
    }
}

registerBrick('0162f2ecd021046908f5', BeginTransaction);
