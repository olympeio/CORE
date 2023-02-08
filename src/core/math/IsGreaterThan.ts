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

import { Brick, BrickContext, registerBrick } from 'olympe';


export default class IsGreaterThan extends Brick {
    /**
     * @override
     */
    update(context: BrickContext, [a, b, strictly]: [number, number, boolean], [setResult]: [(param: boolean) => void]) {
        setResult(strictly ? a > b : a >= b);
    }
}

registerBrick('01633eddc42e7ea58ee6', IsGreaterThan);
