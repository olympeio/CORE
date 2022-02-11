import { Brick, registerBrick } from 'olympe';

export default class QueryFollowRelation extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {!Relation} relation
     * @param {boolean} addToResult
     * @param {function(!Query)} setQuery
     */
    update($, [query, relation, addToResult], [setQuery]) {
        const queryFollow = query.follow(relation);
        setQuery(addToResult ? queryFollow.andReturn() : queryFollow);
    }
}

registerBrick('017ee95e7ca42d1bb96e', QueryFollowRelation);
