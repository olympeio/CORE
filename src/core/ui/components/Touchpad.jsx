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

import {VisualBrick, registerBrick} from 'olympe';
import {cssToSxProps, jsonToSxProps} from 'helpers/mui';
import React from 'react';
import ReactDOM from 'react-dom';
import Box from "@mui/material/Box";

export default class Touchpad extends VisualBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Allow overflow
        elementDom.style.overflow = 'visible';

        // Observe all properties
        context.observeMany(
            'Hidden', 'Default Color', 'Border Color', 'Border Radius', 'Border Width', 'CSS Property',
            'MUI sx [json]'
        ).subscribe(([
            hidden, defaultColor, borderColor, borderRadius, borderWidth, cssProperty, muiSxJson
        ]) => {
            // Rendering
            ReactDOM.render((
                !hidden &&
                <Box
                    component={'div'}
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: defaultColor.toHexString(),
                        borderWidth: borderWidth,
                        borderRadius: borderRadius,
                        boxSizing: 'border-box',
                        borderStyle: 'solid',
                        borderColor: borderColor.toHexString(),
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}

                    onTouchMove={(event) => {
                        context.getProperty('Touch Move').set(event.nativeEvent);
                        context.getEvent('On Touch Move').trigger();
                    }}

                    onMouseMove={(event) => {
                        context.getProperty('Mouse Move').set(event.nativeEvent);
                        context.getEvent('On Mouse Move').trigger();
                    }}
                />
            ), elementDom);
        });
    }
}

registerBrick('017ce5f49f79fff777aa', Touchpad);
