import { Brick, registerBrick, Relation, Direction } from 'olympe';

export default class QueryFollowRelation extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!RelationModel} relation
     * @param {boolean} toOrigin
     * @param {boolean} addToResult
     * @param {function(!Query)} setQuery
     */
    update($, [query, relation, toOrigin, addToResult], [setQuery]) {
        const queryFollow = query.follow(new Relation(relation, toOrigin ? Direction.ORIGIN : Direction.DESTINATION));
        setQuery(addToResult ? queryFollow.andReturn() : queryFollow);
    }
}

registerBrick('017ee95e7ca42d1bb96e', QueryFollowRelation);
