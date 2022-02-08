import { Brick, registerBrick } from 'olympe';

export default class ObserveQuery extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {function(!QueryResult)} setQueryResult
     */
    update($, [query], [setQueryResult]) {
        query.observe($)
            .subscribe(queryResult => setQueryResult(queryResult));
    }
}

registerBrick('017ed88f40ff82c9fc3d', ObserveQuery);
