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

import MUIDivider from '@mui/material/Divider';

import { jsonToSxProps, cssToSxProps, ifNotNull } from 'helpers/mui';

/**
 * Provide a Divider visual component using MUI Divider
 */
export default class Divider extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Change draw div display to center the divider
        elementDom.style.alignItems = 'center';
        elementDom.style.justifyContent = 'center';

        // Allow overflow
        elementDom.style.overflow = 'visible';

        // Observe all properties
        context.observeMany(
            'Orientation', 'Variant', 'Text', 'Text Position', 'Text Color', 'Font Family', 'MUI sx [json]',
            'Border Color', 'CSS Property', 'Default Color', 'Hidden'
        ).subscribe(([
            orientation, variant, text, textPosition, textColor, fontFamily, muiSxJson,
            borderColor, cssProperty, defaultColor, hidden
        ]) => {
            // Repeat the olympe DIV style change in case the hidden property changed it (OF-1627)
            elementDom.style.display = 'flex';

            // Rendering
            ReactDOM.render(!hidden && (
                <MUIDivider
                    // Properties
                    orientation={orientation}
                    variant={variant}
                    textAlign={textPosition}

                    // UI
                    flexItem={orientation === 'vertical'}
                    sx={{
                        backgroundColor: defaultColor.toHexString(),
                        fontFamily: fontFamily,
                        color: textColor.toHexString(),
                        '&.MuiDivider-root': {
                            '&::before': {
                                borderColor: borderColor.toHexString()
                            },
                            '&::after': {
                                borderColor: borderColor.toHexString()
                            }
                        },
                        ...ifNotNull('flex', 'auto', orientation === 'horizontal'),
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}
                >
                    {text}
                </MUIDivider>
            ), elementDom);
        });
    }
}

registerBrick('017ccb7269412f5f174d', Divider);
