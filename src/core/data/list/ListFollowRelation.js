import {FunctionBrick, registerBrick, ListDef, instanceToTag, transformers, Direction} from 'olympe';
import {getLogger} from 'logging';

/**
NO DOC
**/
export default class ListFollowRelation extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!ListDef} list
     * @param {!RelationPrimitive} relation
     * @param {boolean} toOrigin
     * @param {function(!ListDef)} setFlattenedList
     */
    onUpdate(context, [list, relation, toOrigin], [setFlattenedList]) {
        const logger = getLogger('List Follow Relation');

        // Guards
        if (!(list instanceof ListDef)) {
            logger.error('TypeError: the list should be of type ListDef.');
            return;
        }
        if (!instanceToTag(relation)) {
            logger.error('relation is not specified');
            return;
        }

        // Transformer
        setFlattenedList(list.transform(
            new transformers.Related(relation, toOrigin ? Direction.ORIGIN : Direction.DESTINATION)
        ));
    }
}

registerBrick('016b74da62846557a6f3', ListFollowRelation);
