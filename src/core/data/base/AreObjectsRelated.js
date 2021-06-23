import {FunctionBrick, registerBrick, ListDef, transformers, predicates, Direction} from 'olympe';

export default class AreObjectsRelated extends FunctionBrick {

    /**
     * Executed every time an input (object1, object2, relation) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {*} origin
     * @param {*} destination
     * @param {RelationPrimitive} relation Assumed to be always in direction origin->destination
     * @param {function(boolean)} setRelated
     */
    onUpdate(context, [origin, destination, relation], [setRelated]) {
        new ListDef(origin, [
            new transformers.Filter(
                new predicates.HasRelated(
                    [relation],
                    [Direction.DESTINATION],
                    destination
                )
            )
        ]).observeSize().subscribe((size) => setRelated(size > 0));

    }
}

registerBrick('0179ea6dd0a21b45bf71', AreObjectsRelated);
