import { Brick, registerBrick, Query } from 'olympe';

export default class QueryFollowRelationFromObject extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!CloudObject} object
     * @param {!Relation} relation
     * @param {boolean} addToResult
     * @param {function(!Query)} setQuery
     */
    update($, [object, relation, addToResult], [setQuery]) {
        const query = Query.from(object)
            .follow(relation);
        if(addToResult) {
            query.andReturn();
        }
        setQuery(query);
    }
}

registerBrick('017ed89bd025189feb29', QueryFollowRelationFromObject);
