import {Direction, transformers, DBView} from 'olympe';

/**
 * @param {FunctionBrick} brick
 * @param {string} input
 * @return {Array<?string>} [scope, property] or [null, null]
 */
export default function getScopeContext(brick, input) {
    const srcScope = '0168a431d91f25780002'
    const srcProperty = '0168a431d91f25780004'
    const destScope = '0168a431d91f2578000a'
    const destInput = '0168a431d91f2578000b'

    const dbView = DBView.get();

    const srcScopeRel = new transformers.Related(srcScope, Direction.DESTINATION);
    const srcPropertyRel = new transformers.Related(srcProperty, Direction.DESTINATION);
    const destScopeRel = new transformers.Related(destScope, Direction.DESTINATION);
    const destInputRel = new transformers.Related(destInput, Direction.DESTINATION);
    const propertyPipe = dbView.findRelated(
        brick,
        [destScopeRel.getInverse()],
        (pipe) => dbView.getUniqueRelated(pipe, destInputRel) === input
    );

    if (propertyPipe) {
        const scope = dbView.getUniqueRelated(propertyPipe, srcScopeRel);
        const property = dbView.getUniqueRelated(propertyPipe, srcPropertyRel);

        return [scope, property];
    }

    return [null, null];
}
