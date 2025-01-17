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

// WARNING ****************************************************************************
// This file is automatically generated. We recommend that you do not edit it manually.
// ************************************************************************************
// Import Olympe runtime
import 'olympe';

// Import project bricks (we use webpack-import-glob-loader to import all bricks)
// Import all bricks (js files inside all core sub-folders) except the one in the ui folder.
// TODO : Build a regex that includes all folders except /core/ui.
import './core/auth/**/*.js';
import './core/context/**/*.js';
import './core/data/**/*.js';
import './core/datetime/**/*.js';
import './core/file/**/*.js';
import './core/net/**/*.js';
import './core/performance/**/*.js';
import './core/system/**/*.js';
import './core/text/**/*.js';
import './core/util/**/*.js';

import './core/logic/**/*.ts';
import './core/math/**/*.ts';
import './core/system/**/*.ts';
import FileConnectorsRegistry from './core/data/connectors/fileconnector/FileConnectorsRegistry';

import 'helpers/set-performance';
export * from './helpers/common/perf-container';
export {getLogger} from './helpers/logging';
export {TimeoutMap, TimeoutSet} from './helpers/timeoutData';
export * from './helpers/lambdaExecutor';
export * from 'helpers/binaryConverters';
export * from 'helpers/httpRequest';
export * from 'helpers/platformInfo';
export { FileConnectorsRegistry };
export {FileConnector} from './core/data/connectors/fileconnector/FileConnector'
