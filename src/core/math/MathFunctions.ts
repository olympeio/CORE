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

import {Brick, BrickContext, registerBrick} from 'olympe';
import {getLogger} from 'logging';

export default class MathFunctions extends Brick {

    /**
     * @override
     */
    update($: BrickContext, [functionName, input]: [string, any], [setResult]: [(res: number) => void]) {
        // @ts-ignore
        const func = Math[functionName];
        const logger = getLogger('Math Functions');

        if (!func) {
            logger.error(`Unknown function ${functionName}!`);
        } else if (func.length !== 1) {
            logger.error(`${functionName} is not a single param function!`);
        } else if (typeof input !== 'number') {
            logger.error(`Input is not a number!`);
        } else {
            setResult(func(input));
        }
    }
}

registerBrick('016326a54b2c1837bdda', MathFunctions);
