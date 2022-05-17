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

import { registerBrick, EnumValue, QueryResult } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent } from 'helpers/mui';
import {getLogger} from '../../../helpers/logging';

import { map, switchMap } from 'rxjs/operators';
import {of, combineLatest, from} from "rxjs";

import React, {useLayoutEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";

/**
 * Provide a Dropdown visual component using MUI TextField
 */
export default class Dropdown extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        const enumValuesObservable = $.observe('Enum', false).pipe(map(enumModel => {
            return enumModel !== null ? enumModel.getValues() : null;
        }));

        // listen to either Enum or Object List property
        const observeListAsArray = combineLatest(
            enumValuesObservable,
            $.observe('Object List', false)
        ).pipe(switchMap(([enumValues, objectList]) => {

            // safety, if nothing set, return immediately
            if(enumValues === null && objectList === null) {
                return of([[], 0, false]);
            }

            // enum prop has priority over Object List
            let enumOrArray = false;
            let list;
            if(enumValues !== null) {
                if(objectList !== null) {
                    getLogger('Dropdown').warn('Both Enum and Object List property are set. Object List is ignored');
                }
                list = enumValues;
                enumOrArray = true;
            } else {
                list = objectList;
            }

            let sizeObservable;
            if (Array.isArray(list)) {
                sizeObservable = of(list.length);
            } else if (list instanceof QueryResult) {
                sizeObservable = of(list.size());
            } else if (list.getSubscription !== undefined) {
                sizeObservable = from(new Promise((res) => {
                    list.onReady(() => {
                        res()
                    });
                })).pipe(switchMap(() => list.observeSize()))
            } else {
                throw new Error('Provided input is not an Enum or a list of of objects: '+list);
            }
            return sizeObservable.pipe(
                map((size) => {
                    let elements = [];
                    if(size > 0) {
                        // Array case
                        if(Array.isArray(list)) {
                            elements = list;
                        }

                        // QueryResult case
                        else if(list instanceof QueryResult) {
                            elements = list.toArray();
                        }

                        // ListDef case
                        else {
                            list.forEachCurrentValue((value, key) => {
                                elements.push({
                                    value: value,
                                    rank: list.getCurrentRank(key)
                                });
                            });
                            elements = elements.sort((a, b) => b.rank - a.rank);
                            elements = elements.map(e => e.value);
                        }
                    }
                    return [elements, size, enumOrArray];
                })
            );
        }));

        const observeOptions = observeListAsArray.pipe(switchMap(([values, size, enumOrArray]) => {
            if (size === 0) {
                return of([]);
            } else if (enumOrArray) {
                const observedValues = values.map(enumValue => combineLatest([
                    enumValue.observe($, EnumValue.valueProp),
                    enumValue.observe($, EnumValue.nameProp),
                    enumValue.observe($, EnumValue.rankProp)
                ]));
                return combineLatest(observedValues)
                    .pipe(map(values => {
                        return values
                            .sort((a, b) => a[2]-b[2]) // sort enum values by rank
                            .map(value => ({
                                value: value[0],
                                label: value[1] || value[0] // EnumItem may not have a name
                            }))
                    }));
            } else {
                return $.observe('Object To String').pipe(switchMap((objectToString) => {
                    return combineLatest(this.runTransformer($, objectToString, values));
                }));
            }
        }));

        // Combine with Hidden property
        return combineLatest(
            $.observe('Hidden'),
            $.observe('Auto Complete'),
            $.observe('Multiple'),
            $.observe('Auto Height'),
            observeOptions
        );
    }

    /**
     *
     * @param {BrickContext} $
     * @param {Brick} objectToString
     * @param {Array} list
     * @return {Array<Observable>}
     */
    runTransformer($, objectToString, list) {
        const [objectInput] = objectToString.getInputs();
        const [stringOutput] = objectToString.getOutputs();
        return list.map(item => {
            const runner$ = $.runner(objectToString)
            return runner$
                .set(stringOutput, item.toString()) // provide a default value to the output, so that we are sure the observable gets resolved
                .set(objectInput, item)
                .observe(stringOutput).pipe(map(label =>  Dropdown.createOption(item, label)));
            // TODO there is an issue if the objectToString is asynchronous, its value will never be output as the runner
            //  context is destroyed everytime the observable returned by setupExecution emits a value
        });
    }

    /**
     * Create an option JS Object readable for the Select and Autocomplete components
     *
     * @private
     * @param {Object} value
     * @param {string} label
     * @return {Object}
     */
    static createOption(value, label) {
        return {
            value: value,
            label: label
        }
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
            const [hidden, autocomplete, multiple, autoHeight, options] = props.values;

            if(!hidden) {
                if(autocomplete) {
                    return Dropdown.renderAutocompleteComponent($, options, multiple, autoHeight);
                }
                else {
                    return Dropdown.renderSelectComponent($, options, multiple);
                }
            } else {
                return null;
            }
        }
    }

    /**
     * @param {BrickContext} $
     * @param {Array} options
     * @param {boolean} multiple
     */
    static renderSelectComponent($, options, multiple) {
        const selectedValue = useProperty($, 'Selected Value');
        const selectedValues = useProperty($, 'Selected Values');
        const emptyText = useProperty($, 'Empty Text');
        const fontFamily = useProperty($, 'Font Family');

        // Handle selected values
        let value;
        if(multiple) {
            value = selectedValues !== undefined ? selectedValues : [];
        } else {
            value = selectedValue !== undefined ? selectedValue : '';
        }

        return (
            <TextField
                // Properties
                value={value}
                {...Dropdown.inputProps($, selectedValues !== '' || emptyText !== '')}

                // Events
                onClick={() => $.trigger('On Click')}
                onChange={Dropdown.onChangeCallbackSelect($, multiple, options)}

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
                        if(!val || (multiple && val.length === 0)) {
                            return emptyText;
                        }
                        if(multiple) {
                            return val.map(v => Dropdown.getNameFromValue(v, options));
                        }
                        return Dropdown.getNameFromValue(val, options);
                    }
                }}
            >
                {/* Options */}
                {options.map((option, index) => (
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
    }

    /**
     * @param {BrickContext} $
     * @param {Array} options
     * @param {boolean} multiple
     * @param {boolean} autoHeight
     */
    static renderAutocompleteComponent($, options, multiple, autoHeight) {
        const disabled = useProperty($, 'Disabled');
        const freeSolo = useProperty($, 'Allow Other Values');
        const selectedValue = useProperty($, 'Selected Value');
        const selectedValues = useProperty($, 'Selected Values');
        const emptyText = useProperty($, 'Empty Text');

        // Handle selected values
        const findOptionMatchingValue = (value) => {
            const option = options.find(opt => opt.value === value) || null;
            if(option === null && freeSolo && typeof value === 'string') { // in case of a custom value entered in free solo mode
                return Dropdown.createOption(value, value);
            } else {
                return option;
            }
        }
        let value;
        if(multiple) {
            value = selectedValues !== undefined
                ? selectedValues.map(findOptionMatchingValue).filter(opt => opt !== null)
                : [];
        } else {
            value = selectedValue !== undefined ? findOptionMatchingValue(selectedValue) : null;
        }

        // retrieve height used by the chip array of the selected values
        // this is fired after the component has finished rendering
        const id = 'id-' + (Date.now() * Math.random());
        if(autoHeight) {
            useLayoutEffect(() => {
                const chipArray = document.getElementById(id);
                if(chipArray) {
                    chipArray.style = 'height: fit-content;'; // override the height: 100% applied from the custom theme
                    $.set('Height', chipArray.clientHeight);
                }
            });
        }

        // Element
        return (
            <ThemeProvider theme={Dropdown.theme}>
                <Autocomplete
                    // Props
                    value={value}
                    options={options}
                    multiple={multiple}
                    disabled={disabled}
                    forcePopupIcon={!disabled}
                    freeSolo={freeSolo}

                    // events
                    onChange={Dropdown.onChangeCallbackAutocomplete($, multiple, options)}
                    onClick={() => $.trigger('On Click')}
                    onClose={() => $.trigger('On Close')}
                    onOpen={() => $.trigger('On Open')}

                    // Textfield styling
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            {...Dropdown.inputProps($, (selectedValue !== null && (!Array.isArray(selectedValue) || selectedValue.length > 0)) || emptyText !== '', params)}
                            placeholder={emptyText}
                            onChange={(event) => {
                                $.set('Autocomplete Text', event.target.value);
                            }}
                        />}

                    // assign the id to the chip array container to gets its height later on
                    ref={el => {
                        if(el) {
                            const chipArray = el.getElementsByClassName('MuiFormControl-root')[0];
                            chipArray.id = id;
                        }
                    }}
                />
            </ThemeProvider>
        );
    }

    /**
     * Apply the styling to the Textfields of both the Select (no autocomplete) and Autocomplete versions
     * of this component, so that they have a similar appearance and options
     *
     * @param {Context} $
     * @param {boolean} shrinkCondition
     * @param {AutocompleteRenderInputParams} params
     * @return {Object}
     */
    static inputProps($, shrinkCondition, params = {InputProps: {}, InputLabelProps: {}}) {
        const label = useProperty($, 'Label');
        const fontFamily = useProperty($, 'Font Family');
        const borderWidth = useProperty($, 'Border Width');
        const borderColor = useProperty($, 'Border Color');
        const borderRadius = useProperty($, 'Border Radius');
        const showBorder = borderWidth > 0 && borderColor.toHexString() !== '#00000000';
        const textColorOverride = useProperty($, 'Text Color Override');
        const focusedColorOverride = useProperty($, 'Focused Color Override');
        const error = useProperty($, 'Error');
        const [focused, setFocused] = useState(false);
        const focusedBorderColor = (key) => {
            let colObj;
            if(focused && !error) {
                colObj = ifNotTransparent(key, focusedColorOverride);
            } else {
                colObj = ifNotTransparent(key, borderColor);
            }
            // making the value important will allow it to override the Mui-Focused color,
            // and to override the borderColor (when not using outlined variant)
            colObj[key] += ' !important';
            return colObj;
        }

        return {
            // MUI Properties
            label: typeof label === 'string' ? label.trim() : '',
            helperText: useProperty($, 'Helper Text'),
            variant: useProperty($, 'Variant'),
            color: useProperty($, 'Color'),
            size: useProperty($, 'Min Size'),
            disabled: useProperty($, 'Disabled'),
            required: useProperty($, 'Required'),
            error: useProperty($, 'Error'),

            // Control over the focused state, so that we can force change color when textfield is in focus
            focused: focused,
            onBlur: () => setFocused(false),
            onFocus: () => setFocused(true),

            // custom styling
            InputProps: {
                ...params.InputProps,
                sx: {
                    flex: 'auto',
                    fontFamily: fontFamily,
                    tabIndex: useProperty($, 'Tab Index'),
                    ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                    ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                    ...ifNotNull('borderWidth', borderWidth, showBorder),
                    ...ifNotNull('borderStyle', 'solid', showBorder),
                    ...ifNotNull('boxSizing', 'border-box', showBorder),
                    ...focusedBorderColor('borderColor'),
                    ...ifNotTransparent('color', textColorOverride)
                }
            },
            FormHelperTextProps: {
                sx: {
                    fontFamily: fontFamily,
                    ...ifNotTransparent('color', borderColor)
                }
            },
            InputLabelProps: {
                ...params.InputLabelProps,
                shrink: shrinkCondition,
                    sx: {
                    fontFamily: fontFamily,
                    ...focusedBorderColor('color')
                }
            },
            sx: {
                width: 1,
                height: 1,
                ...cssToSxProps(useProperty($, 'CSS Property')),
                ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
            }
        };
    }

    /**
     * On change callback when using Select component (no autocomplete)
     *
     * @param {BrickContext} $
     * @param {boolean} multiple
     * @param {Array} options
     * @return {function(*, *): void}
     */
    static onChangeCallbackSelect($, multiple, options) {
        return (event) => {
            let selectedValues, selectedValue;
            if(multiple) {
                selectedValues = /** @type {Array} */(event.target.value);
                selectedValue = selectedValues[0];
            } else {
                selectedValue = /** @type {Object} */(event.target.value);
                selectedValues = [selectedValue];
            }
            $.set('Selected Value', selectedValue);
            $.set('Selected Values', selectedValues);
            $.trigger('On Change');
        }
    }

    /**
     * On change callback when using Autocomplete component
     *
     * @param {BrickContext} $
     * @param {boolean} multiple
     * @param {Array} options
     * @return {function(*, *): void}
     */
    static onChangeCallbackAutocomplete($, multiple, options) {
        return (event, newValue) => {
            let selectedValues, selectedValue;
            if(multiple) {
                selectedValues = newValue !== null ? newValue.map(opt => typeof opt === 'string' ? opt : opt.value) : [];
                selectedValue = selectedValues[0];
            } else {
                selectedValue = newValue !== null
                    ? (typeof newValue === 'string' ? newValue : newValue.value)
                    : null;
                selectedValues = [selectedValue];
            }
            $.set('Selected Value', selectedValue);
            $.set('Selected Values', selectedValues);
            $.trigger('On Change');
        }
    }
}

registerBrick('017c9dc1ef990c55b61b', Dropdown);

// Default separator for multiple selection
Dropdown.SEPARATOR = ',';

// theme override for the autocomplete
Dropdown.theme = createTheme({
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    height : '100%',
                },
                endAdornment: {
                    right: '7px !important',
                },
            },

        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    height : '100%',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    minHeight: '100%',
                    padding: '0px 65px 0px 6px !important',
                    textOverflow: 'ellipsis',
                },
            },
        },
    },
});

/**
 * @param {string} value
 * @param {Array} options
 * @return {string}
 */
Dropdown.getNameFromValue = (value, options) => {
    const option = options.filter(o => o.value === value);
    return option.length === 1 ? option[0].label : value;
};
