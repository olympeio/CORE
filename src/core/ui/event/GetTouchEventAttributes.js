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
import { FunctionBrick, registerBrick } from 'olympe';

export default class GetTouchEventAttributes extends FunctionBrick {

    /**
     * Executed every time an input (touchEvent) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {TouchEvent} touchEvent
     * @param {function(number)} setTimestamp
     * @param {function(*)} setTouches
     * @param {function(*)} setFirstTouch
     */
    update(context, [touchEvent], [setTimestamp, setTouches, setFirstTouch]) {
        setTimestamp(touchEvent.timeStamp);
        setTouches(touchEvent.touches);
        if (touchEvent.touches) {
            setFirstTouch(touchEvent.touches[0]);
        }
    }
}

registerBrick('017ce62454e697315991', GetTouchEventAttributes);