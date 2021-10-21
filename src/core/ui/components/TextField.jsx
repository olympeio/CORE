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

import { jsonToSxProps } from '../../../helpers/web/mui';

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
        // Observe all properties
        context.observeMany('Value', 'Placeholder', 'Label', 'Helper Text', 'Type', 'Variant', 'Color', 'Min Size', 'Disabled', 'Auto Focus', 'Required', 'Error', 'Multiline', 'Rows', 'Min Rows', 'Max Rows', 'Font Family', 'MUI sx [json]')
            .subscribe(([value, placeholder, label, helperText, type, variant, color, minSize, disabled, autoFocus, required, error, multiline, rows, minRows, maxRows, fontFamily, muiSxJson]) => {
                // Rendering
                ReactDOM.render((
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
                        onChange={(event) => {
                            // Set the Value property before triggering the event
                            context.getProperty('Value').set(event.target.value);
                            context.getEvent('On Change').trigger();
                        }}

                        // UI
                        InputProps={{
                            sx: {
                                flex: 'auto',
                                fontFamily: fontFamily
                            }
                        }}
                        FormHelperTextProps={{
                            sx: {
                                fontFamily: fontFamily
                            }
                        }}
                        InputLabelProps={{
                            sx: {
                                fontFamily: fontFamily
                            }
                        }}
                        SelectProps={{
                            sx: {
                                fontFamily: fontFamily
                            }
                        }}
                        sx={{
                            width: 1,
                            height: 1,
                            ...jsonToSxProps(muiSxJson)
                        }}
                    ></MUITextField>
                ), elementDom);
            });
    }
}

registerBrick('017c9cfde39047e5f918', TextField);
