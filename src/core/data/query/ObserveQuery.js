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

registerBrick('017ee95e41926ddeff85', ObserveQuery);
