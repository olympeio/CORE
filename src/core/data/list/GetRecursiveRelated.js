import {FunctionBrick, registerBrick, ListDef, instanceToTag, transformers} from 'olympe';
import {getOrientedRelation} from "./GetRelatedObjects";
import {getLogger} from 'logging';

export default class GetRecursiveRelated extends FunctionBrick {

    /**
     * Executed every time an input (origin, relation, includeSelf) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {Context} context
     * @param {!InstanceTag} object
     * @param {!InstanceTag} relation
     * @param {boolean} includeSelf
     * @param {function(ListDef)} setList
     */
    onUpdate(context, [object, relation, includeSelf], [setList]) {
        const logger = getLogger('Get Recursive Related');

        // Prevent errors
        if (instanceToTag(object) === '') {
            logger.error('Invalid `object` provided');
            return;
        } else if (instanceToTag(relation) === '') {
            logger.error('Invalid `relation` provided');
            return;
        }

        const orientedRelation = getOrientedRelation(object, relation);
        setList(new ListDef(
            object,
            new transformers.RecursiveRelated(orientedRelation, orientedRelation.getDirection(), includeSelf ? 0 : 1)
        ));
    }
}

registerBrick('0179c7bf780d10b211e8', GetRecursiveRelated);
