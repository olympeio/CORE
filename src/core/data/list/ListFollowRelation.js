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
     * @param {!ListDef|!Array} list
     * @param {!RelationPrimitive} relation
     * @param {boolean} toOrigin
     * @param {function(!ListDef|!Array)} setFlattenedList
     */
    onUpdate(context, [list, relation, toOrigin], [setFlattenedList]) {
        const logger = getLogger('List Follow Relation');

        // Guards
        if (!Array.isArray(list) && !(list instanceof ListDef)) {
            logger.error('[ListFollowRelation] TypeError: the list should be of type ListDef or Array');
            return;
        }
        if (!instanceToTag(relation)) {
            logger.error('[ListFollowRelation] relation is not specified');
            return;
        }

        // Transformer
        let flattenedList;
        if (Array.isArray(list)) {
            logger.warn('Native JS arrays are not yet supported. Ignoring ...');
            setFlattenedList(list);
        } else {
            flattenedList = list.transform(
                new transformers.Related(relation, toOrigin ? Direction.ORIGIN : Direction.DESTINATION)
            );
        }

        // Done
        setFlattenedList(flattenedList);
    }
}

registerBrick('016b74da62846557a6f3', ListFollowRelation);
