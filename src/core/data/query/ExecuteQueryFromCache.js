import { ActionBrick, registerBrick } from 'olympe';

export default class ExecuteQueryFromCache extends ActionBrick {

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
        query.executeFromCache()
            .then(queryResult => setQueryResult(queryResult))
            .catch(message => setErrorFlow(message))
            .finally(() => forwardEvent());
    }
}

registerBrick('017ed88e525d9bad617b', ExecuteQueryFromCache);
