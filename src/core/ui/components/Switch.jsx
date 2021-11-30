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

import { UIBrick, registerBrick } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import MUISwitch from '@mui/material/Switch';

import { jsonToSxProps, cssToSxProps, ifNotTransparent, ifNotNull } from 'helpers/mui';

/**
 * Provide a Switch visual component using MUI Switch
 */
export default class Switch extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Change draw div display to center the switch
        elementDom.style.alignItems = 'center';
        elementDom.style.justifyContent = 'center';

        // Allow overflow
        elementDom.style.overflow = 'visible';

        // Observe all properties
        context.observeMany(
            'Checked', 'Disabled', 'Color', 'Size', 'MUI sx [json]',
            'Border Radius', 'CSS Property', 'Default Color', 'Hidden', 'Tab Index'
        ).subscribe(([
            checked, disabled, color, size, muiSxJson,
            borderRadius, cssProperty, defaultColor, hidden, tabIndex
        ]) => {
            // Repeat the olympe DIV style change in case the hidden property changed it (OF-1627)
            elementDom.style.display = 'flex';

            // Rendering
            ReactDOM.render((
                !hidden &&
                <MUISwitch
                    // Properties
                    checked={checked}
                    disabled={disabled}
                    color={color}
                    size={size}

                    // UI
                    sx={{
                        ...ifNotTransparent('backgroundColor', defaultColor),
                        ...ifNotNull('borderRadius', borderRadius),
                        tabIndex: tabIndex,
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}

                    // Events
                    onChange={(event) => {
                        // Set the Checked property before triggering the event
                        context.getProperty('Checked').set(event.target.checked);
                        context.getEvent('On Change').trigger();
                        context.getEvent('On Click').trigger();
                    }}
                ></MUISwitch>
            ), elementDom);
        });
    }
}

registerBrick('017c9e0e9f6f81f21a93', Switch);
