import { Brick, registerBrick, Relation, Direction } from 'olympe';

export default class QueryFollowRelationRecursively extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Relation} relation
     * @param {boolean} toOrigin
     * @param {boolean} addToResult
     * @param {function(!Query)} setQuery
     */
     update($, [query, relation, toOrigin, addToResult], [setQuery]) {
        const queryFollowRecursively = query.followRecursively(new Relation(relation, toOrigin ? Direction.ORIGIN : Direction.DESTINATION));
        setQuery(addToResult ? queryFollowRecursively.andReturn() : queryFollowRecursively);
    }
}

registerBrick('017ee95eed2d744f825f', QueryFollowRelationRecursively);
