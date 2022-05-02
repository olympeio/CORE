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

import { registerBrick, EnumValue, Enum } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent } from 'helpers/mui';

import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { combineLatestWith, map, switchMap } from 'rxjs/operators';
import { of, combineLatest } from "rxjs";

/**
 * Provide a Dropdown visual component using MUI TextField
 */
export default class Dropdown extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        const observeOptions = $.observe('Values', false).pipe(
            switchMap((enumModel) => {
                if (!(enumModel instanceof Enum)) {
                    return of([]);
                } else {
                    const enumValues = enumModel.getValues();
                    const size = enumValues.size();
                    const values = [];
                    if (size > 0) {
                        enumValues.forEach(enumValue => values.push(combineLatest([
                            enumValue.observe($, EnumValue.valueProp),
                            enumValue.observe($, EnumValue.nameProp),
                            enumValue.observe($, EnumValue.rankProp)
                        ])));
                        return combineLatest(values).pipe(map(values => values.map(value => ({
                            value: value[0],
                            label: value[1] || value[0], // EnumItem may not have a name
                            rank: value[2]
                        }))));
                    }
                    return of([]);
                }
            })
        );

        // Combine with Hidden property
        return $.observe('Hidden').pipe(combineLatestWith(observeOptions));
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        parent.style.overflow = 'visible'; // Allow overflow
        return super.updateParent(parent, element);
    }

    /**
     * @override
     */
    static getReactComponent($) {
        return (props) => {
            const [hidden, options] = props.values;
            const multiple = useProperty($, 'Multiple');
            const value = useProperty($, 'Value');
            const fontFamily = useProperty($, 'Font Family');
            const borderWidth = useProperty($, 'Border Width');
            const borderColor = useProperty($, 'Border Color');
            const borderRadius = useProperty($, 'Border Radius');
            const emptyText = useProperty($, 'Empty Text');
            const showNames = useProperty($, 'Show Names');
            const showBorder = borderWidth > 0 && borderColor.toHexString() !== '#00000000';

            // Handle multiple selection
            let muiValue = multiple ? [] : '';
            if(value && multiple) {
                muiValue = value.split(Dropdown.SEPARATOR).map(v => v.trim()).filter(v => v !== '');
            } else if(value) {
                muiValue = value.trim();
            }

            return !hidden && (
                <TextField
                    // Properties
                    value={muiValue}
                    label={useProperty($, 'Label')}
                    helperText={useProperty($, 'Helper Text')}
                    variant={useProperty($, 'Variant')}
                    color={useProperty($, 'Color')}
                    size={useProperty($, 'Min Size')}
                    disabled={useProperty($, 'Disabled')}
                    required={useProperty($, 'Required')}
                    error={useProperty($, 'Error')}

                    // Events
                    onClick={() => $.trigger('On Click')}
                    onChange={(event) => {
                        // Set the Value property before triggering the event
                        $.set('Value',
                            multiple
                                ? /** @type {Array} */(event.target.value).join(Dropdown.SEPARATOR)
                                : event.target.value
                        );
                        $.trigger('On Change');
                    }}

                    // UI
                    InputProps={{
                        sx: {
                            flex: 'auto',
                            fontFamily: fontFamily,
                            tabIndex: useProperty($, 'Tab Index'),
                            ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                            ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                            ...ifNotNull('borderWidth', borderWidth, showBorder),
                            ...ifNotNull('borderStyle', 'solid', showBorder),
                            ...ifNotNull('boxSizing', 'border-box', showBorder),
                            ...ifNotTransparent('borderColor', borderColor),
                            ...ifNotNull('color', useProperty($, 'Text Color Override'), !useProperty($, 'Error'))
                        }
                    }}
                    FormHelperTextProps={{
                        sx: {
                            fontFamily: fontFamily,
                            ...ifNotTransparent('color', borderColor)
                        }
                    }}
                    InputLabelProps={{
                        shrink: value !== '' || emptyText !== '',
                        sx: {
                            fontFamily: fontFamily,
                            ...ifNotTransparent('color', borderColor)
                        }
                    }}
                    sx={{
                        width: 1,
                        height: 1,
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}

                    // Select properties
                    select={true}
                    SelectProps={{
                        // Properties
                        multiple: multiple,
                        displayEmpty: true,

                        // Event
                        onClose: () => $.trigger('On Close'),
                        onOpen: () => $.trigger('On Open'),

                        // UI
                        renderValue: val => {
                            if(!val || (multiple && val.length === 0))
                                return emptyText;
                            if(multiple)
                                return /** @type {Array} */(showNames ? val.map(v => Dropdown.getNameFromValue(v, options)) : val).join(Dropdown.SEPARATOR);
                            return showNames ? Dropdown.getNameFromValue(val, options) : val;
                        }
                    }}
                >
                    {/* Options */}
                    {options.sort((a, b) => a.rank - b.rank).map((option, index) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                            sx={{
                                fontFamily: fontFamily
                            }}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            );
        };
    }
}

registerBrick('017c9dc1ef990c55b61b', Dropdown);

// Default separator for multiple selection
Dropdown.SEPARATOR = ',';

/**
 * @param {string} value
 * @param {Array} options
 * @return {string}
 */
Dropdown.getNameFromValue = (value, options) => {
    const option = options.filter(o => o.value === value);
    return option.length === 1 ? option[0].label : value;
};
