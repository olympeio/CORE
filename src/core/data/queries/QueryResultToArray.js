import { Brick, registerBrick, QueryResult } from 'olympe';
import {getLogger} from "logging";

export default class QueryResultToArray extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {QueryResult} queryResult
     * @param {function(Array)} setList
     */
    update($, [queryResult], [setList]) {
        if(queryResult instanceof QueryResult){
            setList(queryResult.toArray());
        } else {
            getLogger('QueryResultToArray').warn(`The input wasn't a query result, so it was ignored.`)
        }
    }
}

registerBrick('0186174bea3609b086fa', QueryResultToArray);
