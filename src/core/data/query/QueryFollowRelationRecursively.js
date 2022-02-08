import { Brick, registerBrick } from 'olympe';

export default class QueryFollowRelationRecursively extends Brick {

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
        const queryFollowRecursively = query.followRecursively(relation);
        if(addToResult) {
            queryFollowRecursively.andReturn();
        }
        setQuery(queryFollowRecursively);
    }
}

registerBrick('017ed89d3d5e439ac69a', QueryFollowRelationRecursively);
