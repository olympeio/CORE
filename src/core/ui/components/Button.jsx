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

import MUIButton from '@mui/material/Button';
import Icon from '@mui/material/Icon';

import { jsonToSxProps, cssToSxProps, computeTextColorOverride, ifNotTransparent, ifNotNull } from '../../../helpers/web/mui';

/**
 * Provide a Button visual component using MUI Button
 */
export default class Button extends UIBrick {

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
            'Text', 'Variant', 'Color', 'Start Icon', 'End Icon', 'Disabled', 'Font Size', 'Text Color Override', 'Font Family', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden', 'Tab Index'
        ).subscribe(([
            text, variant, color, startIcon, endIcon, disabled, fontSize, textColorOverride, fontFamily, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, hidden, tabIndex
        ]) => {
            // Rendering
            ReactDOM.render((
                <MUIButton
                    // Properties
                    variant={variant}
                    color={color}
                    startIcon={startIcon && (<Icon>{startIcon}</Icon>)}
                    endIcon={endIcon && (<Icon>{endIcon}</Icon>)}
                    disabled={disabled}
                    size={fontSize}

                    // Events
                    onClick={() => context.getEvent('On Click').trigger()}

                    // UI
                    sx={{
                        width: 1,
                        height: 1,
                        fontFamily: fontFamily,
                        ...computeTextColorOverride(textColorOverride),
                        ...ifNotTransparent('borderColor', borderColor),
                        ...ifNotNull('borderRadius', borderRadius),
                        ...ifNotNull('borderWidth', borderWidth),
                        ...ifNotTransparent('borderStyle', 'solid', borderColor),
                        ...ifNotTransparent('backgroundColor', defaultColor),
                        '&:hover': {
                            ...ifNotTransparent('borderColor', borderColor),
                            ...ifNotNull('borderRadius', borderRadius),
                            ...ifNotNull('borderWidth', borderWidth),
                            ...ifNotTransparent('borderStyle', 'solid', borderColor),
                            ...ifNotTransparent('backgroundColor', defaultColor)
                        },
                        boxSizing: 'border-box',
                        ...ifNotNull('display', 'none', hidden),
                        tabIndex: tabIndex,
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}
                >
                    {text}
                </MUIButton>
            ), elementDom);
        });
    }
}

registerBrick('017c9cd311170bc1f95e', Button);
