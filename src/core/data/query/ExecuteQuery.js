import { ActionBrick, registerBrick } from 'olympe';

export default class ExecuteQuery extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {function()} forwardEvent
     * @param {function(!QueryResult)} setQueryResult
     * @param {function(string)} setErrorFlow
     */
    update($, [query], [forwardEvent, setQueryResult, setErrorFlow]) {
        query.execute($)
            .then(queryResult => setQueryResult(queryResult))
            .catch(message => setErrorFlow(message))
            .finally(() => forwardEvent());
    }
}

registerBrick('017ed88cb095c15aee2e', ExecuteQuery);
