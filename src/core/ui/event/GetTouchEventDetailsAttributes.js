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

export default class GetTouchEventDetailsAttributes extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Touch} touch
     * @param {function(number)} setIdentifier
     * @param {function(number)} setRelativePositionX
     * @param {function(number)} setRelativePositionY
     * @param {function(number)} setAbsolutePositionX
     * @param {function(number)} setAbsolutePositionY
     * @param {function(number)} setRadiusX
     * @param {function(number)} setRadiusY
     * @param {function(number)} setRotationAngle
     * @param {function(number)} setForce
     */
    update(context, [touch], [setIdentifier, setRelativePositionX, setRelativePositionY, setAbsolutePositionX, setAbsolutePositionY, setRadiusX, setRadiusY, setRotationAngle, setForce]) {
        setIdentifier(touch.identifier);
        setRelativePositionX(touch.clientX);
        setRelativePositionY(touch.clientY);
        setAbsolutePositionX(touch.screenX);
        setAbsolutePositionY(touch.screenY);
        setRadiusX(touch.radiusX);
        setRadiusY(touch.radiusY);
        setRotationAngle(touch.rotationAngle);
        setForce(touch.force);
    }
}

registerBrick('017ce630d0cabe1769d5', GetTouchEventDetailsAttributes);
