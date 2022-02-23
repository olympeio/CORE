import { ActionBrick, registerBrick, ErrorFlow } from 'olympe';

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
        try {
            setQueryResult(query.executeFromCache());
        } catch(e) {
            setErrorFlow(ErrorFlow.create(e, 1));
        } finally {
            forwardEvent();
        }
    }
}

registerBrick('017ee95e056346abd39d', ExecuteQueryFromCache);
