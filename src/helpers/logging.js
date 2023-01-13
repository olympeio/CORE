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
import {Config} from 'olympe';

let loggingInitialised = new Map();

/**
 * Get a named logger. Initialise logging if this has not been done yet.
 *
 * @param {string} name
 * @return {loglevel.Logger}
 */
export const getLogger = (name) => {
    if (!loggingInitialised.has(name)) {
        const newLogger = log.getLogger(name);
        const configLevel = Config.getParameter(`loglevel.${name}`) || Config.getParameter('loglevel');
        // https://www.npmjs.com/package/loglevel
        // 'log' and 'debug' levels are identical from a level perspective
        // but setLevel() below only accept 'debug' as input
        const requestedLevel = configLevel === 'log' ? 'debug' : configLevel;
        const validLevels = ['trace', 'debug', 'info', 'warn', 'error'];
        newLogger.setLevel(validLevels[validLevels.indexOf(requestedLevel?.toLowerCase())] ?? 'info');
        loggingInitialised.set(name, newLogger);
        return newLogger;
    } else {
        return loggingInitialised.get(name);
    }
}
