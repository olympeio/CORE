/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ActionBrick, registerBrick, ErrorFlow, Query } from 'olympe';
import { getLogger } from 'logging';

export default class ExecuteAndCacheQuery extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {string=} cacheId
     * @param {function()} forwardEvent
     * @param {function(!QueryResult)} setQueryResult
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update($, [query, cacheId], [forwardEvent, setQueryResult, setErrorFlow]) {
        if (query instanceof Query) {
            query.execute({cacheId: cacheId ? cacheId : undefined})
                .then(queryResult => {
                    setQueryResult(queryResult);
                    forwardEvent();
                })
                .catch(message => {
                    getLogger('ExecuteQuery').error(`Failed execute query with error : ${message}`);
                    setErrorFlow(ErrorFlow.create(message, 1));
                });
        } else {
            const message = `The provided Query is not a Query object`;
            getLogger('ExecuteQuery').error(message);
            setErrorFlow(ErrorFlow.create(message, 2));
        }
    }
}

registerBrick('0189f81388d3b55d8209', ExecuteAndCacheQuery);
