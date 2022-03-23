import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';

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
            .catch(message => getLogger('ExecuteQuery').error(`Failed execute query with error : ${message}`))
            .finally(() => forwardEvent());
    }
}

registerBrick('017ee95dc502afc0c8db', ExecuteQuery);
