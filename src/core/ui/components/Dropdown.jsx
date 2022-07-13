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

import { registerBrick, EnumValue, QueryResult, BrickContext, Brick, generateTag, ListDef } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent } from 'helpers/mui';
import { getLogger } from 'logging';

import { map, switchMap } from 'rxjs/operators';
import { of, combineLatest, from, Observable } from 'rxjs';

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme  } from '@mui/material/styles';
import { blue, green, purple, lightBlue, red, orange } from '@mui/material/colors';

/**
 * Provide a Dropdown visual component using MUI TextField
 */
export default class Dropdown extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        const observeListAsArray = this.getListObservable($);
        const observeOptions = observeListAsArray.pipe(switchMap(([values, size, isEnum]) => {
            if (size === 0) {
                return of([]);
            } else if (isEnum) {
                return this.observeEnum($, values);
            } else {
                return $.observe('Object To String').pipe(switchMap((objectToString) => {
                    return combineLatest(this.runTransformer($, objectToString, values));
                }));
            }
        }));

        // Combine with Hidden property
        return combineLatest([
            $.observe('Hidden'),
            $.observe('Auto Complete'),
            $.observe('Multiple'),
            observeOptions
        ]);
    }

    /**
     * @param {!BrickContext} $
     * @param {Array<EnumValue>} values
     * @return {Observable<Array<EnumValue>>}
     */
    observeEnum($, values) {
        const observedValues = values.map(enumValue => combineLatest([
            enumValue.observe($, EnumValue.valueProp),
            enumValue.observe($, EnumValue.nameProp),
            enumValue.observe($, EnumValue.rankProp)
        ]));
        return combineLatest(observedValues)
            .pipe(map(values => {
                return values
                    .sort((a, b) => a[2] - b[2]) // sort enum values by rank
                    .map(value => ({
                        value: value[0],
                        label: value[1] || value[0] // EnumItem may not have a name
                    }));
            }));
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @return {Observable<[Array<*>, number, boolean]>}
     */
    getListObservable($) {
        // listen to either Enum or Object List property
        return combineLatest([
            $.observe('Enum', false),
            $.observe('Object List', false),
            $.observe('Selected Values', false)
        ]).pipe(switchMap(([enumModel, objectList, selectedValues]) => {
            // safety, if nothing set, return immediately
            if (enumModel === null && objectList === null) {
                return of([[], 0, false]);
            }

            // enum prop has priority over Object List
            let isEnum = false;
            let list = null;
            if (enumModel !== null) {
                if (objectList !== null) {
                    getLogger('Dropdown').warn('Both Enum and Object List property are set. Object List is ignored');
                }
                list = enumModel.getValues();
                isEnum = true;
            } else {
                list = objectList;
            }

            let sizeObservable = null;
            if (list === null) {
                getLogger('Dropdown').warn('None of Enum and Object List property have a value.');
            } else if (Array.isArray(list)) {
                sizeObservable = of(list.length);
            } else if (list instanceof QueryResult) {
                sizeObservable = of(list.size());
            } else if (list.getSubscription !== undefined) {
                sizeObservable = from(new Promise((res) => {
                    list.onReady(() => {
                        res();
                    });
                })).pipe(switchMap(() => list.observeSize()));
            } else {
                throw new Error('Provided input is not an Enum or a List of objects: ' + list);
            }

            return sizeObservable.pipe(map((size) => {
                let elements = [];
                if (size > 0 && list !== null) {
                    elements = Dropdown.getListElements(list);

                    // If the list comes from the server, we have to add the selected values to it, otherwise we cannot set any selection
                    if(selectedValues){
                        const tags = [];
                        elements = elements
                            .concat(Dropdown.getListElements(selectedValues))
                            .filter(elem => {
                                if(elem.getTag){
                                    if(tags.includes(elem.getTag())){
                                        return false;
                                    } else {
                                        tags.push(elem.getTag());
                                        return true;
                                    }
                                } else {
                                    return true;
                                }
                            });
                    }
                }
                return [elements, size, isEnum];
            }));
        }));
    }

    /**
     * @param {*} list
     * @return {Array<*>}
     */
    static getListElements(list) {
        let elements = [];
        // Array case
        if (Array.isArray(list)) {
            elements = list;
        }

        // QueryResult case
        else if (list instanceof QueryResult) {
            elements = list.toArray();
        }

        // ListDef case
        else if (list instanceof ListDef) {
            list.forEachCurrentValue((value, key) => {
                elements.push({
                    value: value,
                    rank: list.getCurrentRank(key)
                });
            });
            elements = elements.sort((a, b) => a.rank - b.rank);
            elements = elements.map(e => e.value);
        } else if (list !== null && list !== undefined) {
            getLogger('Dropdown').error('Object List supposed to be a ListDef, an Array or a QueryResult');
        }
        return elements;
    }

    /**
     * @param {!BrickContext} $
     * @param {?Brick} objectToString
     * @param {Array} list
     * @return {Array<Observable>}
     */
    runTransformer($, objectToString, list) {
        if (objectToString !== null) {
            const [objectInput] = objectToString.getInputs();
            const [stringOutput] = objectToString.getOutputs();
            return list.map(item => {
                const runner$ = $.runner(objectToString);
                return runner$
                    .set(stringOutput, item.toString()) // provide a default value to the output, so that we are sure the observable gets resolved
                    .set(objectInput, item)
                    .observe(stringOutput).pipe(map(label => Dropdown.createOption(item, label)));
                // TODO there is an issue if the objectToString is asynchronous, its value will never be output as the runner
                //  context is destroyed everytime the observable returned by setupExecution emits a value
            });
        } else {
            return list.map(item => $.observe(Dropdown.createOption(item, item.toString())));
        }
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
        };
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
            const [hidden, autocomplete, multiple, options] = props.values;
            const [values, setValues] = useState([]);
            const selectedValue = useProperty($, 'Selected Value');
            const selectedValues = useProperty($, 'Selected Values');
            const theme = Dropdown.getTheme($);

            React.useEffect(() => {
                const selectedValuesArray = Dropdown.getListElements(selectedValues);
                setValues(multiple ? selectedValuesArray : [selectedValue]);
            }, [selectedValue, selectedValues]);

            const element = autocomplete
                ? Dropdown.autocompleteComponent($, options, multiple, values)
                : Dropdown.selectComponent($, options, multiple, values);

            return hidden ? null : (
                <ThemeProvider theme={theme}>
                    {element}
                </ThemeProvider>
            );
        };
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {Array} options
     * @param {boolean} multiple
     * @param {?Array<Object>|Object} values
     */
    static selectComponent($, options, multiple, values) {
        const label = useProperty($, 'Label');

        // Handle selected values
        let value = null;
        if (multiple) {
            value = values !== undefined ? values : [];
        } else {
            value = values[0] !== undefined ? values[0] : '';
        }

        const isSelectedValue = values !== undefined && values[0] !== undefined && values[0] !== null;
        const props = Dropdown.getTextFieldProps($, isSelectedValue);

        /**
         * @param {string|Array<!Object>} currentValue
         * @return {string}
         */
        const renderValue = (currentValue) => {
            if (currentValue === '' || (multiple && currentValue.length === 0)) {
                return props.placeholder;
            }
            if (multiple) {
                return currentValue.map((v, index) => {
                    const name = Dropdown.getNameFromValue(v, options);
                    const end = index === currentValue.length - 1 ? '' : Dropdown.SEPARATOR;
                    return name + end;
                });
            } else {
                return Dropdown.getNameFromValue(currentValue, options);
            }
        };

        const getSelectedProps = () => {
            return {
                // Properties
                multiple: multiple,
                displayEmpty: true,

                // Event
                onClose: () => $.trigger('On Close'),
                onOpen: () => $.trigger('On Open'),

                // UI
                renderValue: renderValue,
            };
        };

        return (
            <TextField
                // Properties
                value={value}
                label={typeof label === 'string' ? label.trim() : ''}
                {...props}

                // Events
                onClick={() => $.trigger('On Click')}
                onChange={Dropdown.onChangeCallbackSelect($, multiple)}

                // Select properties
                select={true}
                SelectProps={getSelectedProps()}
            >
                {/* Options */}
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        value={option.value}
                        sx={{
                            fontFamily: props.fontFamily,
                            ...cssToSxProps(useProperty($, 'CSS Property')),
                            ...jsonToSxProps(useProperty($, 'MUI sx [json]')),
                        }}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        );
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {Array} options
     * @param {boolean} multiple
     * @param {?Array<Object>|Object} values
     */
    static autocompleteComponent($, options, multiple, values) {
        const disabled = useProperty($, 'Disabled');
        const freeSolo = useProperty($, 'Allow Other Values');
        const emptyText = useProperty($, 'Empty Text');
        const autocompleteText = useProperty($, 'Autocomplete Text');
        const onInputChangeLambda = useProperty($, 'On Input Change');
        const loading = useProperty($, 'Is Loading');
        const label = useProperty($, 'Label');
        const height = useProperty($, 'Height');
        const width = useProperty($, 'Width');
        const [open, setOpen] = useState(false);
        const [limit, setLimit] = useState(1);
        const [chips, setChips] = useState([]);
        const [selectedValue, setSelectedValue] = useState([]);

        React.useEffect(() => {
            if (width && height && multiple) {
                setLimit(getLimitTags(chips.map(chip => chip.width)));
            }
        }, [width, height]);

        /**
         * Handle selected values
         *
         * @param {string} value
         * @return {Object}
         */
        const findOptionValue = (value) => {
            const foundOption = options.find(opt => {
                // Has to filter differently if it's cloud objects
                if(opt.value.getTag){
                    return opt.value.getTag() === value?.getTag()
                } else {
                    return opt.value === value
                }
            });
            const option = foundOption !== undefined ? foundOption : null;
            if (option === null && freeSolo && typeof value === 'string') { // in case of a custom value entered in free solo mode
                return Dropdown.createOption(value, value);
            } else {
                return option;
            }
        };

        React.useEffect(() => {
            if (multiple) {
                setSelectedValue(values !== undefined ? values.map(findOptionValue).filter(val => val !== null) : []);
            } else {
                setSelectedValue(values !== undefined ? findOptionValue(values[0]) : null);
            }
        }, [options, values]);

        const id = 'id-' + generateTag();
        const isMultipleSelected = multiple && values && values.length > 0;
        const commonSx = {
            height: height,
            'input': {
                height: isMultipleSelected && emptyText === '' && autocompleteText === '' ? 0 : 'auto', // hide input to maintain the height the brick
                color: isMultipleSelected ? 'transparent' : '', // prevent helper text and input text overflow
            },
            textOverflow: 'ellipsis',
        };
        const maxChipWidth = `calc(100% - ${(values && values.length > 1 ? 32 : 6)}px)`; // padding for number of tags label + buttons
        const focusedSx = {
            ...commonSx,
            '.MuiAutocomplete-tag': {
                maxWidth: maxChipWidth,
            },
        };

        /**
         * @param {Array<number>} chipWidths
         * @param {number} totalWidth
         * @param {number} numberOfRows
         * @return {number}
         */
        const getChipsNumber = (chipWidths, totalWidth, numberOfRows) => {
            // Arrange chips to groups in which element's sum <= total width
            let total, rows = [], index = -1;
            while (chipWidths.length > 0) {
                total = 0;
                index++;
                rows[index] = [];
                while (total + chipWidths[0] <= totalWidth) {
                    total += chipWidths[0];
                    rows[index].push(chipWidths.shift());
                }
                if (total === 0 || rows.length === numberOfRows) {
                    break;
                }
            }
            const chipsNumber = rows.reduce((prev, cur) => prev + cur.length, 0) || 1;
            return chipsNumber;
        };

        /**
         * @param {Array<number>} chipWidths
         * @return {number}
         */
        const getLimitTags = (chipWidths) => {
            const size = Math.floor((height - 12) / 33); // 12 - padding, 33 - chip height
            const numberOfRows = size > 0 ? size : 1;
            const availableWidth = width - 65; // padding
            return getChipsNumber(chipWidths, availableWidth, numberOfRows);
        };

        /**
         * @param {?function()=} callback
         */
        const onBlur = (callback) => {
            if (multiple) {
                const chipElements = document.getElementById(id).getElementsByClassName('MuiChip-root');
                const currentChips = Array.from(chipElements).map((chip, index) => {
                    return {
                        value: values[index],
                        width: chip.clientWidth + 6, // side margins
                    };
                });
                setChips(currentChips);
                const widths = currentChips.map(chip => chip.width);
                setLimit(getLimitTags(widths));
            }
            if (callback) {
                callback();
            }
        };

        /**
         * @param {!Array<Object>} currentValues
         */
        const onRemoveOption = (currentValues) => {
            const curChips = chips.filter(chip => {
                return currentValues.find(val => {
                    const isEnumEqual = val.value === chip.value;
                    const isObjectEqual = val.value.tag === chip.value.tag;
                    return isObjectEqual || isEnumEqual;
                });
            });
            const widths = curChips.map(chip => chip.width);
            setLimit(getLimitTags(widths));
        };

        /**
         * @param {*} params
         */
        const renderInput = (params) => {
            const isSelectedValue = values !== undefined && values[0] !== undefined && values[0] !== null;
            const hasInput = isSelectedValue || autocompleteText !== '';
            const props = Dropdown.getTextFieldProps($, hasInput, params);
            const inputProps = {
                ...props.InputProps,
                endAdornment: (
                    <React.Fragment>
                        {loading && open ? (
                            <CircularProgress
                                color="inherit"
                                size={20}
                                sx={{marginRight: `${isSelectedValue ? 0 : 30}px`}}
                            />
                        ) : null}
                        {params.InputProps.endAdornment}
                    </React.Fragment>
                ),
                onBlur: () => onBlur(props.onBlur)
            };

            return (
                <TextField
                    {...params}
                    {...props}
                    InputProps={inputProps}
                />
            );
        };

        /**
         * @param {*} event
         * @param {string} newValue
         * @param {string} reason
         */
        const onInputChange = (event, newValue, reason) => {
            // Only triggers the Draw onInputChange when the user has typed something in the textfield (not when selecting or clearing the textfield programmatically).
            if (event !== null) {
                $.set('Autocomplete Text', newValue || '');
                if (onInputChangeLambda && reason === 'input') {
                    const [startInput, textInput] = onInputChangeLambda.getInputs();
                    $.runner(onInputChangeLambda)
                        .set(textInput, newValue)
                        .trigger(startInput);
                }
            }
        };

        /**
         * @param {*} event
         * @param {Object|Array<Object>} currentValues
         * @param {string} reason
         */
        const onChange = (event, currentValues, reason) => {
            if (reason === 'removeOption') {
                onRemoveOption(currentValues);
            }
            Dropdown.onChangeCallbackAutocomplete($, multiple, currentValues);
        };

        // The `inputValue` below will hold the `Autocomplete Text` property as long as we
        // are "editing" the value. Once a value is chosen, it will be pushed to the `Selected Value(s)`
        // property and the `Autocomplete Text` property will be emptied
        const isTextDefined = autocompleteText !== undefined && autocompleteText !== '';
        const inputValue = isTextDefined ? autocompleteText
            : (selectedValue === null || multiple ? '' : selectedValue.label);

        // Element
        return (
                <Autocomplete
                    // Props
                    value={selectedValue}
                    options={options}
                    multiple={multiple}
                    disabled={disabled}
                    forcePopupIcon={!disabled}
                    freeSolo={freeSolo}
                    inputValue={inputValue}
                    openOnFocus={true}
                    loading={loading && open}
                    limitTags={limit || 1}
                    PaperComponent={(params) => (
                        <Dropdown.CustomPaper
                            $={$}
                            params={params}
                        />
                    )}
                    renderInput={renderInput}

                    // events
                    onChange={onChange}
                    onInputChange={onInputChange}
                    onClick={() => $.trigger('On Click')}
                    onClose={() => {
                        setOpen(false);
                        $.trigger('On Close');
                    }}
                    onOpen={() => {
                        setOpen(true);
                        $.trigger('On Open');
                    }}
                    // Textfield styling
                    // assign the id to the chip array container to get its chips later on
                    ref={element => {
                        if (element) {
                            const [chipArray] = element.getElementsByClassName('MuiFormControl-root');
                            chipArray.id = id;
                        }
                    }}
                    // needs to maintain the height of the brick for different variants of autoselect
                    sx={{
                        // Outline variant
                        '.MuiOutlinedInput-root.MuiInputBase-root:not(.Mui-focused)': {
                            padding: isMultipleSelected ? '4px 45px 6px 6px' : '6px 65px 6px 6px',
                            '.MuiAutocomplete-tag': {
                                margin: `${label !== '' ? 1 : 0}px 3px 3px 0px`,
                                maxWidth: `calc(100% - ${(values && values.length > 1 ? 40 : 15)}px)`, // padding for number of tags label + buttons
                            },
                            ...commonSx,
                        },
                        // Standard variant
                        '.MuiInput-underline': {
                            '&.MuiInputBase-root:not(.Mui-focused)': {
                                ...focusedSx,
                            }
                        },
                        // Filled variant
                        '.MuiFilledInput-root': {
                            '&.MuiInputBase-root:not(.Mui-focused)': {
                                paddingTop: label ? '15px' : '0px',
                                paddingRight: '60px',
                                ...focusedSx,
                            },
                        },
                    }}
                />
        );
    }

    /**
     * @param {!BrickContext} $
     * @return {Object}
     */
    static getTheme($) {
        const overrideColor = useProperty($, 'Color') || 'primary';
        const theme = createTheme({
            palette: {
                primary: {
                    main: Dropdown.COLORS[overrideColor]
                }
            },
            components: {
                MuiAutocomplete: {
                    styleOverrides: {
                        root: {
                            height: '100%',
                        },
                        endAdornment: {
                            right: '7px !important',
                        },
                    },
                },
                MuiFormControl: {
                    styleOverrides: {
                        root: {
                            height: '100%',
                        },
                    },
                },
            },
        });
        return theme;
    }

    /**
     * Apply the styling to the Textfields of both the Select (no autocomplete) and Autocomplete versions
     * of this component, so that they have a similar appearance and options
     *
     * @private
     * @param {!BrickContext} $
     * @param {boolean} hasInput
     * @param {{InputProps: {}, InputLabelProps: {}}} params
     * @return {Object}
     */
    static getTextFieldProps($, hasInput, params = { InputProps: {}, InputLabelProps: {} }) {
        const label = useProperty($, 'Label');
        const emptyText = useProperty($, 'Empty Text');
        const fontFamily = useProperty($, 'Font Family');
        const borderWidth = useProperty($, 'Border Width');
        const borderColor = useProperty($, 'Border Color');
        const borderRadius = useProperty($, 'Border Radius');
        const showBorder = borderWidth > 0 && borderColor.toHexString() !== '#00000000';
        const textColorOverride = useProperty($, 'Text Color Override');
        const focusedColorOverride = useProperty($, 'Focused Color Override');
        const error = useProperty($, 'Error');
        // TODO rework Dropdown, a change in the list of data should not trigger a complete re-rendering of the dropdown
        // focus: it is necessary to store this state in the context, so that is it kept when a new value is emitted
        // from setupExecution
        // i.e. when the list of data changes, and we still want to keep the focus while typing in the input
        const [focused, setFocused] = useState($.get(Dropdown.FOCUSED_KEY) || false);

        const shrink = (hasInput || emptyText !== '') && label !== '';

        /**
         * @param {string} key
         * @return {Object}
         */
        const focusedBorderColor = (key) => {
            let colObj;
            if (focused && !error) {
                colObj = ifNotTransparent(key, focusedColorOverride);
            } else {
                colObj = ifNotTransparent(key, borderColor);
            }
            // making the value important will allow it to override the Mui-Focused color,
            // and to override the borderColor (when not using outlined variant)
            colObj[key] += ' !important';
            return colObj;
        };

        return {
            // MUI Properties
            label: typeof label === 'string' ? label.trim() : '',
            placeholder: emptyText,
            helperText: useProperty($, 'Helper Text'),
            variant: useProperty($, 'Variant'),
            color: useProperty($, 'Color'),
            size: useProperty($, 'Min Size'),
            disabled: useProperty($, 'Disabled'),
            required: useProperty($, 'Required'),
            error: useProperty($, 'Error'),
            fontFamily: fontFamily,
            // Control over the focused state, so that we can force change color when textfield is in focus
            focused: focused,
            onBlur: () => {
                $.set(Dropdown.FOCUSED_KEY, false);
                setFocused(false);
            },
            onFocus: () => {
                $.set(Dropdown.FOCUSED_KEY, true);
                setFocused(true);
            },
            inputRef: (input) => {
                if (focused && input) {
                    input.focus();
                }
            },

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
                shrink: shrink,
                sx: {
                    fontFamily: fontFamily,
                    ...focusedBorderColor('color')
                }
            },
            sx: {
                width: 1,
                height: 1,
            }
        };
    }

    /**
     * On change callback when using Select component (no autocomplete)
     *
     * @private
     * @param {BrickContext} $
     * @param {boolean} multiple
     * @return {function(*, *): void}
     */
    static onChangeCallbackSelect($, multiple) {
        return (event) => {
            let selectedValues = null, selectedValue = null;
            if (multiple) {
                selectedValues = /** @type {Array} */(event.target.value);
            } else {
                selectedValue = /** @type {Object} */(event.target.value);
            }
            // TODO only seems to make a change in testing app https://marketplace-codev.fluidapp.io/?hc.app=sc.runtime&sc.app=0180d65a76e865d8a10a
            // disabled as it may not be needed
            //$.set(Dropdown.FOCUSED_KEY, false);
            $.set('Selected Value', selectedValue);
            $.set('Selected Values', selectedValues);
            $.trigger('On Change');
        }
    }

    /**
     * On change callback when using Autocomplete component
     *
     * @private
     * @param {!BrickContext} $
     * @param {boolean} multiple
     * @param {?string|Object|Array<!*>} newValue
     */
    static onChangeCallbackAutocomplete($, multiple, newValue) {
        let selectedValues = null, selectedValue = null;
        if (multiple) {
            selectedValues = newValue !== null
                ? newValue.map(item => typeof item === 'string' ? item : item.value)
                : [];
        } else {
            selectedValue = (typeof newValue === 'string' || newValue === null)
                ? newValue : newValue.value;
        }
        // TODO only seems to make a change in testing app https://marketplace-codev.fluidapp.io/?hc.app=sc.runtime&sc.app=0180d65a76e865d8a10a
        // disabled as it may not be needed
        //$.set(Dropdown.FOCUSED_KEY, false);
        $.set('Selected Value', selectedValue);
        $.set('Selected Values', selectedValues);
        // Once a value has been selected, we can safely empty the `Autocomplete Text` property
        // This will allow the Autocomplete to display the selected value and to properly react to external
        // Selected Value changes
        $.set('Autocomplete Text', '');
        $.trigger('On Change');
    }
}

registerBrick('017c9dc1ef990c55b61b', Dropdown);

// Default separator for multiple selection
Dropdown.SEPARATOR = ', ';

Dropdown.FOCUSED_KEY = '__focused';

/**
 * @param {!BrickContext} $
 * @param {*} params
 */
Dropdown.CustomPaper = ({ $, params }) => {
    return (
        <Paper
            {...params}
            sx={{
                ...cssToSxProps(useProperty($, 'CSS Property')),
                ...jsonToSxProps(useProperty($, 'MUI sx [json]')),
            }}
        />
    );
};

/**
 * @param {string} value
 * @param {Array} options
 * @return {string}
 */
Dropdown.getNameFromValue = (value, options) => {
    const option = options.filter(o => o.value === value);
    return option.length === 1 ? option[0].label : value;
};

Dropdown.COLORS = {
    primary: blue[700],
    secondary: purple[500],
    success: green[800],
    warning: orange[700],
    info: lightBlue[700],
    error: red[700],
};
