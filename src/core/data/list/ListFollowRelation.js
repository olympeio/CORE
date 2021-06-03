
import {FunctionBrick, registerBrick, Context, ListDef, Relation, instanceToTag, transformers, DBView, Sync} from 'olympe';

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
     * @param {!Relation} relation
     * @param {function(!ListDef|!Array)} setFlattenedList
     */
    onUpdate(context, [list, relation], [setFlattenedList]) {
        // Guards
        if(!Array.isArray(list) && !(list instanceof ListDef)) {
            console.error('[ListFollowRelation] TypeError: the list should be of type ListDef or Array');
            return;
        }
        if(!instanceToTag(relation)) {
            console.error('[ListFollowRelation] relation is not specified');
            return;
        }

        // Transformer
        let flattenedList;
        if(Array.isArray(list)) {
            const db = DBView.get();
            flattenedList = list.reduce((acc, cur) => {
                for(let tag of db.getRelated(cur, relation))
                    acc.push(Sync.getInstance(tag));
                return acc;
            }, []);
        } else {
            flattenedList = list.transform(new transformers.Related(relation, relation.getDirection()));
        }

        // Done
        setFlattenedList(flattenedList);
    }
}

registerBrick('016b74da62846557a6f3', ListFollowRelation);
