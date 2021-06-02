

import {FunctionBrick, registerBrick, Context, ListDef, Relation, instanceToTag, transformers} from 'olympe';

export default class GetRecursiveRelated extends FunctionBrick {

    /**
     * Executed every time an input (origin, relation, includeSelf) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {!Sync} origin
     * @param {!Relation} relation
     * @param {boolean} includeSelf
     * @param {function(ListDef)} setList
     */
    onUpdate(context, [origin, relation, includeSelf], [setList]) {
        const originTag = instanceToTag(origin);
        const relationTag = instanceToTag(relationTag);

        if (originTag === '') {
            console.error('[FilterHasRelated] origin is not a valid Sync!');
        } else if (relationTag === '') {
            console.error('[FilterHasRelated] relationTag is not a valid Relation!');
        } else {
            setList(new ListDef(origin, new transformers.RecursiveRelated(
                relation,
                Direction.DESTINATION,
                includeSelf ? 0 : 1,
            )));
        }
    }
}

registerBrick('0179c7bf780d10b211e8', GetRecursiveRelated);
