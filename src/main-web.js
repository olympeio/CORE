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

// Import Olympe runtime
import 'olympe';
import initLogging from './helpers/logging';

// Import project bricks (we use webpack-import-glob-loader to import all bricks)
import './core/**/*.js';
import './core/**/*.jsx';

initLogging();

export { getLogger } from './helpers/logging';
export {TimeoutMap, TimeoutSet} from './helpers/timeoutData';
export * from 'helpers/binaryConverters';
export * from 'helpers/navigation';
export * from 'helpers/mui';
export * from 'helpers/react.jsx';
export * from 'helpers/httpRequest';
export * from 'helpers/platformInfo';
