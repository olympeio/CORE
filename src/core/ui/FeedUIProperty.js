import { FunctionBrick, registerBrick, DBView, Direction, transformers } from 'olympe';

export default class FeedUIProperty extends FunctionBrick {

    /**
     * Executed every time an input (uIProperty, value) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {UIProperty} uIProperty
     * @param {Object} value
     * @param {*} _
     */
    onUpdate(context, [uIProperty, value], _) {
        const srcScopeRel = new transformers.Related('0168a431d91f25780002', Direction.DESTINATION);
        const srcPropertyRel = new transformers.Related('0168a431d91f25780004', Direction.DESTINATION);
        const destScopeRel = new transformers.Related('0168a431d91f2578000a', Direction.DESTINATION);
        const destInputRel = new transformers.Related('0168a431d91f2578000b', Direction.DESTINATION);
        const UIPropertyInput = '0162d293ab6f65c86c52';
        const propertyPipe = DBView.get().findRelated(this, [destScopeRel.getInverse()],
            (pipe) => DBView.get().getUniqueRelated(pipe, destInputRel) === UIPropertyInput);
        if (propertyPipe) {
            const scope = DBView.get().getUniqueRelated(propertyPipe, srcScopeRel);
            const property = DBView.get().getUniqueRelated(propertyPipe, srcPropertyRel);
            const scopeContext = scope ? context.getOtherContext(scope) : context;

            if (scopeContext === null) {
                console.error('The scope where to set the UI Property has not been found.\n',
                    '\tIt could be because you try to write on a scope of a model without adding the proper alias:', scope,
                    '\n\tOr because the context was not started at the time of the property was set.');
                return;
            }
            if (property) {
                scopeContext.set(property, value);
            }
        } else {
            console.error('Unknown Property');
        }
    }
}

registerBrick('0179f157cb4687706403', FeedUIProperty);