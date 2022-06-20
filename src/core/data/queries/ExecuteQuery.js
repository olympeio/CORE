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
     * @param {function(ErrorFlow)} setErrorFlow
     */
    update($, [query], [forwardEvent, setQueryResult, setErrorFlow]) {
        query.execute($)
            .then(queryResult => setQueryResult(queryResult))
            .catch(message => {
                getLogger('ExecuteQuery').error(`Failed execute query with error : ${message}`);
                setErrorFlow(ErrorFlow.create(message, 1));
            })
            .finally(() => forwardEvent());
    }
}

registerBrick('017ee95dc502afc0c8db', ExecuteQuery);
