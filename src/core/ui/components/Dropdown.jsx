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

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { jsonToSxProps } from '../../../helpers/web/mui';

/**
 * Provide a Dropdown visual component using MUI TextField
 */
export default class Dropdown extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Observe all properties
        context.observeMany('Value', 'Options Value', 'Options Label', 'Options Separator', 'Label', 'Helper Text', 'Empty Text', 'Variant', 'Color', 'Min Size', 'Multiple', 'Disabled', 'Required', 'Error', 'Font Family', 'MUI sx [json]')
            .subscribe(([value, optionsValue, optionsLabel, optionsSeparator, label, helperText, emptyText, variant, color, minSize, multiple, disabled, required, error, fontFamily, muiSxJson]) => {
                // Compute all options
                const values = optionsValue.split(optionsSeparator).map(v => v.trim());
                const labels = optionsLabel.split(optionsSeparator).map(l => l.trim());
                const options = Array.from({length: Math.max(values.length, labels.length)})
                    .map((_, i) => ({
                        value: values[i] ? values[i] : labels[i],
                        label: labels[i] ? labels[i] : values[i]
                    }));

                // Handle multiple selection
                const muiValue = multiple
                    ? value.split(optionsSeparator).map(v => v.trim()).filter(v => v !== '')
                    : value.trim();

                // Rendering
                ReactDOM.render((
                    <TextField
                        // Properties
                        value={muiValue}
                        label={label}
                        helperText={helperText}
                        variant={variant}
                        color={color}
                        size={minSize}
                        disabled={disabled}
                        required={required}
                        error={error}

                        // Events
                        onChange={(event) => {
                            // Set the Value property before triggering the event
                            context.getProperty('Value').set(
                                multiple
                                    ? /** @type {Array} */(event.target.value).join(optionsSeparator)
                                    : event.target.value
                            );
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
                            shrink: value !== '' || emptyText !== '',
                            sx: {
                                fontFamily: fontFamily
                            }
                        }}
                        sx={{
                            width: 1,
                            height: 1,
                            ...jsonToSxProps(muiSxJson)
                        }}

                        // Select properties
                        select={true}
                        SelectProps={{
                            // Properties
                            multiple: multiple,
                            displayEmpty: true,

                            // Event
                            onClose: () => context.getEvent('On Close').trigger(),
                            onOpen: () => context.getEvent('On Open').trigger(),

                            // UI
                            renderValue: val => {
                                if(!val || (multiple && val.length === 0))
                                    return emptyText;
                                if(multiple)
                                    return /** @type {Array} */(val).join(optionsSeparator);
                                return val;
                            },
                        }}
                    >
                        {/* Options */}
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option.value} sx={{ fontFamily: fontFamily }}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                ), elementDom);
            });
    }
}

registerBrick('017c9dc1ef990c55b61b', Dropdown);
