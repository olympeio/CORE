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
        if(addToResult) {
            queryFollow.andReturn();
        }
        setQuery(queryFollow);
    }
}

registerBrick('017ed89a19aac7d3e654', QueryFollowRelation);
