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

import {registerBrick, EnumValue, QueryResult, BrickContext, Brick, ListDef, CloudObject, Enum} from 'olympe';
import {ReactBrick, useProperty} from 'helpers/react.jsx';
import {jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent, useMUITheme, validateString, validateVariant, colorExists} from 'helpers/mui';
import {getLogger} from 'logging';

import {map, switchMap} from 'rxjs/operators';
import {of, combineLatest, from, Observable} from 'rxjs';

import React, {useState, useEffect, useRef} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

import Autocomplete from '@mui/material/Autocomplete';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {blue, green, purple, lightBlue, red, orange} from '@mui/material/colors';
import {Chip} from "@mui/material";

/**
 * Provide a Dropdown visual component using MUI TextField
 */
export default class Dropdown extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        // Combine with Hidden property
        return combineLatest([
            $.observe('Hidden'),
            $.observe('Auto Complete'),
            $.observe('Multiple')
        ]);
    }

    /**
     * @override
     */
    init($) {
        $.set('Options', []);
        this.getListObservable($)
            .pipe(switchMap(([values, size, isEnum]) => {
                if (size === 0) {
                    return of([]);
                } else if (isEnum) {
                    return this.observeEnum($, values);
                } else {
                    return $.observe('Object To String', false).pipe(switchMap((objectToString) => {
                        return combineLatest(this.runTransformer($, objectToString, values));
                    }));
                }
            }))
            .subscribe({
                next: options => {
                    const filteredOption = options.filter(option => {
                        if (!option.value) {
                            getLogger('Dropdown').error(`There is an option without a value in the dropdown: ${option.label}`);
                        }
                        return option.value;
                    });
                    $.set('Options', filteredOption);
                }, error: (error) => {
                    getLogger('Dropdown').error(`Impossible to get the list of values for the dropdown: ${error}`);
                }, complete: () => {}
            });
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
                if(!CloudObject.exists(enumModel) || !CloudObject.get(enumModel).getModel().equals(Enum)) {
                    throw new Error(`Provided enum model is not an Enum: ${enumModel}`);
                }
                if (objectList !== null) {
                    getLogger('Dropdown').warn('Both Enum and Object List property are set. Object List is ignored');
                }
                list = enumModel.getValues();
                isEnum = true;
            } else {
                list = objectList;
            }

            let sizeObservable = null;
            if (Array.isArray(list)) {
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
                    if (selectedValues) {
                        const selectedValueElements = Dropdown.getListElements(selectedValues);
                        // We want to concat the elements with the selectedValues only if:
                        // - elements is empty
                        // - OR the types of elements and selectedValues are the same -> avoid bad filtering
                        if (elements.length === 0 || typeof elements[0] === typeof selectedValueElements[0]) {
                            const tags = new Set();
                            elements = elements
                                .concat(selectedValueElements)
                                .filter(elem => {
                                    const elemTag = elem instanceof CloudObject ? elem.getTag() : elem;
                                    if (tags.has(elemTag)) {
                                        return false;
                                    } else {
                                        tags.add(elemTag);
                                        return true;
                                    }
                                });
                        }
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
            // case where there is no ObjectToString lambda defined
            // returns an array of observers. the observers push a single value corresponding to the CloudObject basic string representation
            return list.map(item => of(Dropdown.createOption(item, item?.toString() ?? '')));
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
            const [hidden, autocomplete, multiple] = props.values;
            const [values, setValues] = useState([]);
            const options = useProperty($, 'Options') || [];
            const selectedValue = useProperty($, 'Selected Value');
            const selectedValues = useProperty($, 'Selected Values');
            const theme = Dropdown.getTheme($);

            useEffect(() => {
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
        const brickHeight = useProperty($, 'Height');
        const validatedHelperText = validateString(useProperty($, 'Helper Text'), 'Helper Text', 'Dropdown');
        const hasHelperText = !!validatedHelperText;
        const validatedEmptyText = validateString(useProperty($, 'Empty Text'), 'Empty Text', 'Dropdown');
        const hasEmptyText = !!validatedEmptyText;
        const selectedValue = useProperty($, 'Selected Value');
        const variant = useProperty($, 'Variant');
        /**
         * Handle selected values
         *
         * @param {string | CloudObject} value
         * @return {Object}
         */
        const findOptionValue = (value) => {
            let foundOption = options.find(opt => {
                // Has to filter differently if it's cloud objects
                if (opt.value instanceof CloudObject && value instanceof CloudObject) {
                    return opt.value.getTag() === value?.getTag()
                } else {
                    const optionValue = opt.value instanceof EnumValue ? opt.value.toString() : opt.value;
                    const selectedValue = value instanceof EnumValue ? value.toString() : value;
                    return optionValue === selectedValue;
                }
            });
            if (foundOption instanceof EnumValue) foundOption = Dropdown.createOption(foundOption.toString(), foundOption.toString());
            return foundOption?.value || '';
        };

        // Handle selected values
        let value = null;
        if (multiple) {
            value = values !== undefined ? values.map(findOptionValue).filter(val => val !== null) : [];
        } else {
            value = values[0] !== undefined ? findOptionValue(values[0]) : '';
        }

        const isSelectedValue = values !== undefined && values[0] !== null && values[0] !== undefined;
        const isSelectedEmptyInSingleMode = multiple === false && value === '';
        const props = Dropdown.getTextFieldProps($, isSelectedValue && !isSelectedEmptyInSingleMode);

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

        const cssProperty = useProperty($, 'CSS Property');
        const muiSxJson = useProperty($, 'MUI sx [json]');

        // 20 is height of helper text, 40 is the min height of the component (by MUI)
        const actualInputHeight = Math.max((brickHeight - (hasHelperText ? 20 : 0)), 40);
        let translateY = (actualInputHeight - 23) / 2; // 23 is height of label
        const hasSelectedValue = multiple ? Array.isArray(value) && value.length > 0 : value;
        if (hasEmptyText || hasSelectedValue) {
            translateY = -8;
        }

        let customSx = {
            '.MuiSelect-select': {
                paddingBlock: '8px'
            },
            '.MuiInputLabel-formControl': {
                transform: `translate(14px, ${translateY}px) scale(${hasEmptyText || hasSelectedValue ? 0.75 : 1})`
            }
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
                sx={{
                    width: 1, height: 1,
                    ...customSx
                }}>
                {/* Options */}
                {options.map((option, index) => (
                    <MenuItem
                        key={index}
                        value={option.value}
                        sx={{
                            fontFamily: props.fontFamily,
                            ...cssToSxProps(cssProperty),
                            ...jsonToSxProps(muiSxJson),
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
        const autocompleteText = useProperty($, 'Autocomplete Text');
        const onInputChangeLambda = useProperty($, 'On Input Change');
        const loading = useProperty($, 'Is Loading');
        const label = useProperty($, 'Label');
        const height = useProperty($, 'Height');
        const width = useProperty($, 'Width');

        const variant = useProperty($, 'Variant');
        const validatedHelperText = validateString(useProperty($, 'Helper Text'),  'Helper Text', 'Dropdown');
        const hasHelperText = !!validatedHelperText;
        const validatedEmptyText = validateString(useProperty($, 'Empty Text'),  'Empty Text', 'Dropdown');
        const hasEmptyText = !!validatedEmptyText;

        const [open, setOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState(multiple ? [] : null);

        // Create a unique sub-context for the onInputChange lambda function and destroy and recreate it only when the brick is changed.
        const onInputChangeContext = useRef();
        useEffect(() => {
            // Set the context in the ref object.
            onInputChangeContext.current = onInputChangeLambda ? $.runner(onInputChangeLambda) : null;
            // Destroy the sub-context when the onInputChangeLambda (the brick itself) is deleted/changed.
            return () => onInputChangeContext.current?.destroy();
        }, [onInputChangeLambda]);

        /**
         * Handle selected values
         *
         * @param {string | CloudObject} value
         * @return {Object}
         */
        const findOptionValue = (value) => {
            let foundOption = options.find(opt => {
                // Has to filter differently if it's cloud objects
                if (opt.value instanceof CloudObject && value instanceof CloudObject) {
                    return opt.value.getTag() === value?.getTag()
                } else {
                    const optionValue = opt.value instanceof EnumValue ? opt.value.toString() : opt.value;
                    const selectedValue = value instanceof EnumValue ? value.toString() : value;
                    return optionValue === selectedValue;
                }
            });
            if (foundOption instanceof EnumValue) foundOption = Dropdown.createOption(foundOption.toString(), foundOption.toString());
            const option = foundOption !== undefined ? foundOption : null;
            if (option === null && freeSolo && typeof value === 'string') { // in case of a custom value entered in free solo mode
                return Dropdown.createOption(value, value);
            } else {
                return option;
            }
        };

        useEffect(() => {
            if (multiple) {
                setSelectedValue(values !== undefined ? values.map(findOptionValue).filter(val => val !== null) : []);
            } else {
                setSelectedValue(values !== undefined ? findOptionValue(values[0]) : null);
            }
        }, [options, values]);

        const isMultipleSelected = multiple && values && values.length > 0;

        const maxChipWidth = `calc(100% - ${(values && values.length > 1 ? 32 : 6)}px)`; // padding for number of tags label + buttons
        const focusedSx = {
            ...commonSx,
            '.MuiAutocomplete-tag': {
                maxWidth: maxChipWidth,
            },
        };

        let customSx = {};
        // 20 is height of helper text, 40 is the min height of the component (by MUI)
        const actualInputHeight = Math.max((height - (hasHelperText ? 20 : 0)), 40);
        let translateY = (actualInputHeight - 23) / 2; // 23 is height of label
        const hasSelectedValue = Array.isArray(values) && values.filter(v => !!v).length > 0;
        if (hasEmptyText || hasSelectedValue || autocompleteText) {
            translateY = -8;
        }

        const commonSx = {
            height: actualInputHeight,
            'input': {
                color: isMultipleSelected ? 'transparent' : '', // prevent helper text and input text overflow
            },
            textOverflow: 'ellipsis',
        };

        customSx = {
            '.MuiInputLabel-formControl': {
                transform: `translate(14px, ${translateY}px) scale(${hasEmptyText || hasSelectedValue || autocompleteText ? 0.75 : 1})`
            }
        }


        /**
         * @param {?function()=} callback
         */
        const onBlur = (callback) => {
            if (callback) {
                callback();
            }
        };

        /**
         * @param {*} params
         */
        const renderInput = (params) => {
            const isSelectedValue = values !== undefined && values[0] !== null && values[0] !== undefined;
            const hasInput = isSelectedValue || autocompleteText !== '';
            const props = Dropdown.getTextFieldProps($, hasInput, params);
            const InputProps = {
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
                    inputProps={{
                        ...params.inputProps
                    }}
                    InputProps={InputProps}
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
                if (onInputChangeContext.current instanceof BrickContext && reason === 'input') {
                    const [startInput, textInput] = onInputChangeLambda.getInputs();
                    // Set new input values to the onInputChange context.
                    onInputChangeContext.current.set(textInput, newValue).trigger(startInput);
                }
            }
        };

        /**
         * @param {*} event
         * @param {Object|Array<Object>} currentValues
         * @param {string} reason
         */
        const onChange = (event, currentValues, reason) => {
            Dropdown.onChangeCallbackAutocomplete($, multiple, currentValues);
        };

        // The `inputValue` below will hold the `Autocomplete Text` property as long as we
        // are "editing" the value. Once a value is chosen, it will be pushed to the `Selected Value(s)`
        // property and the `Autocomplete Text` property will be emptied
        let inputValue;
        if (autocompleteText !== undefined && autocompleteText !== '') {
            // case 1: there is some text in the autocomplete
            inputValue = autocompleteText;
        } else if (selectedValue === null || multiple || selectedValue.length === 0) {
            // case 2: there is no selected value or multiple selection is enabled
            inputValue = '';
        } else {
            // case 3: there is a single selected value
            inputValue = selectedValue.label;
        }

        const sortedOptions = options
            .map(option => {
                option.isSelected = Array.isArray(selectedValue) ?
                    selectedValue.some(value => value?.value === option.value) :
                    selectedValue?.value === option.value;
                return option;
            })
            .sort((a, b) => {
                if (a.isSelected === b.isSelected) {
                    return 0;
                } else if (a.isSelected) {
                    return -1;
                } else {
                    return 1;
                }
            })

        const isSelected = (option) => {
            return option.isSelected ? '' : ' ';
        }

        // Element
        return (
            <Autocomplete
                // Props
                value={selectedValue}
                options={sortedOptions}
                groupBy={isSelected}
                multiple={multiple}
                disabled={disabled}
                forcePopupIcon={!disabled}
                freeSolo={freeSolo}
                inputValue={inputValue}
                openOnFocus={true}
                loading={loading && open}
                PaperComponent={(params) => (
                    <Dropdown.CustomPaper
                        $={$}
                        params={params}
                    />
                )}
                renderInput={renderInput}
                renderTags={(value, getTagProps) => {
                    return (
                        <>
                            <Chip label={value[0].label} sx={{'height': '25px'}}></Chip>
                            {value.length > 1 ? <span> +{value.length - 1}</span> : undefined}
                        </>)
                }}
                getOptionLabel={option => {
                    return option.label ?? (typeof option === 'string' ? option : option.toString());
                }}
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
                // needs to maintain the height of the brick for different variants of autoselect
                sx={{
                    ...customSx,
                    '.MuiInputBase-root>span': {
                        paddingLeft: '4px',
                    },
                    // chip max-width
                    '.MuiChip-label': {
                        maxWidth: `calc(${width - 140}px)`,
                    },
                    // Outline variant
                    '.MuiOutlinedInput-root.MuiInputBase-root:not(.Mui-focused)': {
                        paddingTop: label ? '6px' : '4px',
                        ...commonSx,

                    },
                    '.MuiAutocomplete-tag': {
                        margin: `${label !== '' ? 1 : 0}px 3px 3px 0px`,
                        maxWidth: `calc(100% - ${(values && values.length > 1 ? 40 : 15)}px)`,
                    },
                    // Standard variant
                    '.MuiInput-underline': {
                        '&.MuiInputBase-root:not(.Mui-focused)': {
                            padding: '4px 45px 4px 6px',
                            ...focusedSx,
                        }
                    },
                    // Filled variant
                    '.MuiFilledInput-root': {
                        '&.MuiInputBase-root:not(.Mui-focused)': {
                            paddingTop: label ? '20px' : '6px',
                            paddingBottom: label ? '20px' : '6px',
                            paddingRight: '60px',
                            ...focusedSx,
                        },
                        '&.MuiInputBase-root.Mui-focused': {
                            paddingTop: label ? '20px' : '6px',
                            paddingBottom: label ? '20px' : '6px',
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
        const color = useProperty($, 'Color');
        const originalTheme = useMUITheme($);
        const overrideColor = colorExists (originalTheme, color, 'Dropdown') ? color : 'primary';
        return createTheme({
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
                        inputRoot: {
                            height: '42px',
                            flexWrap: 'nowrap'
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
        }, originalTheme);
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
    static getTextFieldProps($, hasInput, params = {InputProps: {}, InputLabelProps: {}}) {
        const label = useProperty($, 'Label');
        const emptyText = validateString(useProperty($, 'Empty Text'),  'Empty Text', 'Dropdown');
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
        const dropdownFieldVariants = ['filled', 'outlined', 'standard'];
        const variant =  useProperty($, 'Variant');
        const color = useProperty($, 'Color');
        const theme = Dropdown.getTheme($);


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
            helperText: validateString(useProperty($, 'Helper Text'), 'Helper Text', 'Dropdown'),
            variant: validateVariant(variant, 'Variant', 'Dropdown', dropdownFieldVariants),
            color: colorExists(theme, color, 'Dropdown') ? color : 'primary',
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

            inputProps: {
                tabIndex: useProperty($, 'Tab Index'),
            },

            // custom styling
            InputProps: {
                ...params.InputProps,
                sx: {
                    flex: 'auto',
                    fontFamily: fontFamily,
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

Dropdown.CustomPaper = ({$, params}) => {
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
