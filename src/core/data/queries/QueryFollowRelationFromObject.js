import { Brick, registerBrick, Query, Relation, Direction } from 'olympe';

export default class QueryFollowRelationFromObject extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!CloudObject} object
     * @param {!Relation} relation
     * @param {boolean} toOrigin
     * @param {boolean} addToResult
     * @param {function(!Query)} setQuery
     */
    update($, [object, relation, toOrigin, addToResult], [setQuery]) {
        const query = Query.from(object).follow(new Relation(relation, toOrigin ? Direction.ORIGIN : Direction.DESTINATION));
        setQuery(addToResult ? query.andReturn() : query);
    }
}

registerBrick('017ee95eb3781967a49a', QueryFollowRelationFromObject);
