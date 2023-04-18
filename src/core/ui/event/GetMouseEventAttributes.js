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

export default class GetMouseEventAttributes extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {MouseEvent} event
     * @param {function(number)} setTimestamp
     * @param {function(number)} setRelativePositionX
     * @param {function(number)} setRelativePositionY
     * @param {function(number)} setAbsolutePositionX
     * @param {function(number)} setAbsolutePositionY
     * @param {function(boolean)} setCtrlKeyPressed
     * @param {function(boolean)} setShiftKeyPressed
     * @param {function(boolean)} setAltKeyPressed
     * @param {function(boolean)} setMetaKeyPressed
     */
    update(context, [event], [setTimestamp, setRelativePositionX, setRelativePositionY, setAbsolutePositionX, setAbsolutePositionY, setCtrlKeyPressed, setShiftKeyPressed, setAltKeyPressed, setMetaKeyPressed]) {
        setTimestamp(event.timeStamp);
        setRelativePositionX(event.clientX);
        setRelativePositionY(event.clientY);
        setAbsolutePositionX(event.screenX);
        setAbsolutePositionY(event.screenY);
        setCtrlKeyPressed(event.ctrlKey);
        setShiftKeyPressed(event.shiftKey);
        setAltKeyPressed(event.altKey);
        setMetaKeyPressed(event.metaKey);
    }
}

registerBrick('017ce658446aa5fa62ca', GetMouseEventAttributes);
