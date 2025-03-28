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

import { Brick, registerBrick, ErrorFlow, Query } from 'olympe';

export default class ExecuteQuery extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {function()} forwardEvent
     * @param {function(!QueryResult)} setQueryResult
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update($, [query], [forwardEvent, setQueryResult, setErrorFlow]) {
        if (query instanceof Query) {
            query.execute()
                .then(queryResult => {
                    setQueryResult(queryResult);
                    forwardEvent();
                })
                .catch((error) => {
                    setErrorFlow(ErrorFlow.create(`${error}`, 1));
                });
        } else {
            setErrorFlow(ErrorFlow.create(`The provided Query is not a Query object: ${query}`, 2));
        }
    }
}

registerBrick('017ee95dc502afc0c8db', ExecuteQuery);
