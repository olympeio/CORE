
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

import { Brick, registerBrick } from 'olympe';
import {map} from "rxjs/operators";

export default class GetUIProperty extends Brick {

    /**
     * @override
     */
    setupExecution($) {
        return $.observe(this.getInputs()[0]).pipe(map((value) => [value]));
    }

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {*} propValue
     * @param {function(*)} setValue
     */
    update($, [propValue], [setValue]) {
        setValue(propValue)
    }
}

registerBrick('0162de7dd5abdc9dec7f', GetUIProperty);
