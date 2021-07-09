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

/**
 * @file
 *
 * Init loglevel module
 */

import * as log from 'loglevel';
import formatter from 'helpers/logFormatter';
import {Config} from 'olympe';

let loggingInitialised = false;

/**
 * Get a named logger. Initialise logging if this has not been done yet.
 *
 * @param {string} name
 * @return {loglevel.Logger}
 */
export const getLogger = (name) => {
    if (!loggingInitialised) {
        log.setLevel(Config.getParameter('loglevel') || 'info');
        loggingInitialised = true;
    }

    return log.getLogger(name);
}

/**
 * Set up the loggers factory. `formatter` must return a string or Object.
 */
export default () => {
    const defaultFactory = log.methodFactory;
    log.methodFactory = (methodName, logLevel, loggerName) => {
        const rawMethod = defaultFactory(methodName, logLevel, loggerName);
        return (message) => {
            rawMethod(formatter(methodName, loggerName, message));
        };
    };
};
