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

import { VisualBrick, registerBrick, EnumValue } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { jsonToSxProps, computeTextColorOverride, cssToSxProps, ifNotNull, ifNotTransparent } from 'helpers/mui';
import { combineLatestWith, map, switchMap } from 'rxjs/operators';
import { of, combineLatest} from "rxjs";

/**
 * Provide a Dropdown visual component using MUI TextField
 */
export default class Dropdown extends VisualBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!VisualContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Allow overflow
        elementDom.style.overflow = 'visible';

        // Observe all Enum values (options)
        const observeValues = context.observe('Values', false)
        const observeSize = observeValues.pipe(
            switchMap((enumModel) =>  enumModel === null ? of(0): enumModel.getValues().observeSize())
        );
        const observeOptions = context.observe('Values').pipe(
            switchMap((enumModel) => {
                return enumModel === null ? of([]) : of(enumModel.getValues()).pipe(
                    combineLatestWith(observeSize),
                    switchMap(([list, size]) => {
                        const values = [];
                        if (size > 0) {
                            list.forEachCurrentValue(enumValue => values.push(combineLatest([
                                enumValue.observeProperty(EnumValue.valueProp),
                                enumValue.observeProperty(EnumValue.nameProp),
                                enumValue.observeProperty(EnumValue.rankProp)
                            ])));
                            return combineLatest(values);
                        }
                        return of([]);
                    }),
                    map(values => values.map(value => ({
                        value: value[0],
                        label: value[1] || value[0], // EnumItem may not have a name
                        rank: value[2]
                    })))
                );
            })
        );

        // Observe all others properties
        context.observeMany(
            'Value', 'Label', 'Helper Text', 'Empty Text', 'Variant', 'Color', 'Min Size', 'Multiple', 'Disabled', 'Required', 'Error', 'Show Names', 'Text Color Override', 'Font Family', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden', 'Tab Index'
        )
        .pipe(combineLatestWith(observeOptions))
        .subscribe(([
            [value, label, helperText, emptyText, variant, color, minSize, multiple, disabled, required, error, showNames, textColorOverride, fontFamily, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, hidden, tabIndex],
            options
        ]) => {
            // Handle multiple selection
            const muiValue = multiple
                ? value.split(Dropdown.SEPARATOR).map(v => v.trim()).filter(v => v !== '')
                : value.trim();

            // Rendering
            ReactDOM.render((
                !hidden &&
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
                    onClick={() => context.trigger('On Click')}
                    onChange={(event) => {
                        // Set the Value property before triggering the event
                        context.set('Value',
                            multiple
                                ? /** @type {Array} */(event.target.value).join(Dropdown.SEPARATOR)
                                : event.target.value
                        );
                        context.trigger('On Change');
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
                        shrink: value !== '' || emptyText !== '',
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

                    // Select properties
                    select={true}
                    SelectProps={{
                        // Properties
                        multiple: multiple,
                        displayEmpty: true,

                        // Event
                        onClose: () => context.trigger('On Close'),
                        onOpen: () => context.trigger('On Open'),

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
            ), elementDom);
        });
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
