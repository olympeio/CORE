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

import MUITextField from '@mui/material/TextField';

import { jsonToSxProps, computeTextColorOverride, ifNotNull, ifNotTransparent, cssToSxProps } from '../../../helpers/web/mui';

/**
 * Provide a Text Field visual component using MUI TextField
 */
export default class TextField extends UIBrick {

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
            'Value', 'Placeholder', 'Label', 'Helper Text', 'Type', 'Variant', 'Color', 'Min Size', 'Disabled', 'Auto Focus', 'Required', 'Error', 'Multiline', 'Rows', 'Min Rows', 'Max Rows', 'Text Color Override', 'Font Family', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden', 'Tab Index'
        ).subscribe(([
            value, placeholder, label, helperText, type, variant, color, minSize, disabled, autoFocus, required, error, multiline, rows, minRows, maxRows, textColorOverride, fontFamily, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, hidden, tabIndex
        ]) => {
            // Rendering
            ReactDOM.render((
                !hidden &&
                <MUITextField
                    // Properties
                    value={value}
                    placeholder={placeholder}
                    label={label}
                    helperText={helperText}
                    type={type}
                    variant={variant}
                    color={color}
                    size={minSize}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    required={required}
                    error={error}
                    multiline={multiline}
                    rows={rows > 0 ? rows : null}
                    minRows={minRows}
                    maxRows={maxRows}

                    // Events
                    onClick={() => context.getEvent('On Click').trigger()}
                    onChange={(event) => {
                        // Set the Value property before triggering the event
                        context.getProperty('Value').set(event.target.value);
                        context.getEvent('On Change').trigger();
                    }}

                    // UI
                    InputProps={{
                        sx: {
                            flex: 'auto',
                            fontFamily: fontFamily,
                            tabIndex: tabIndex,
                            ...ifNotTransparent('backgroundColor', defaultColor),
                            ...ifNotNull('borderRadius', borderRadius),
                            ...ifNotNull('borderWidth', borderWidth),
                            ...ifNotTransparent('borderStyle', 'solid', borderColor),
                            ...ifNotNull('boxSizing', 'border-box', borderWidth),
                            ...ifNotTransparent('borderColor', borderColor),
                            ...computeTextColorOverride(textColorOverride, error)
                        }
                    }}
                    FormHelperTextProps={{
                        sx: {
                            fontFamily: fontFamily,
                            ...ifNotTransparent('color', borderColor)
                        }
                    }}
                    InputLabelProps={{
                        sx: {
                            fontFamily: fontFamily,
                            ...ifNotTransparent('color', borderColor)
                        }
                    }}
                    sx={{
                        width: 1,
                        height: 1,
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}
                ></MUITextField>
            ), elementDom);
        });
    }
}

registerBrick('017c9cfde39047e5f918', TextField);
