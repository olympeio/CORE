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

import { registerBrick } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { jsonToSxProps, ifNotNull, ifNotTransparent, cssToSxProps, useMUITheme } from 'helpers/mui';
import { ThemeProvider } from '@mui/material/styles';

import React from 'react';
import MUITextField from '@mui/material/TextField';

/**
 * Provide a Text Field visual component using MUI TextField
 */
export default class TextField extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        return $.observe('Hidden');
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
            const [hidden] = props.values;
            const theme = useMUITheme($);
            const label = useProperty($, 'Label');
            const type = useProperty($, 'Type');
            const error = useProperty($, 'Error');
            const borderColor = useProperty($, 'Border Color');
            const borderWidth = useProperty($, 'Border Width');
            const borderRadius = useProperty($, 'Border Radius');
            const fontFamily = useProperty($, 'Font Family');
            const vertAlign = useProperty($, 'Vertical Alignment');
            const autoFocus = useProperty($, 'Auto Focus');

            const inputRef = React.useRef(null);

            React.useEffect(() => {
                if (autoFocus && inputRef.current) {
                    inputRef.current.focus();
                } else if (autoFocus === false && inputRef.current) {
                    inputRef.current.blur();
                }
              }, [autoFocus]);

            let justifyContent;
            switch (vertAlign) {
                case 'top':
                    justifyContent = 'flex-start';
                    break;
                case 'bottom':
                    justifyContent = 'flex-end';
                    break;
                default:
                    justifyContent = 'center';
                    break;
            }
            const multiLine = useProperty($, 'Multiline');
            const textColorOverflow = useProperty($, 'Text Color Override');
            const showBorder = borderColor && borderWidth > 0 && borderColor.toHexString() !== '#00000000';
            const showTextColorOverflow = textColorOverflow && !error && textColorOverflow.toHexString() !== '#00000000';

            const value = useProperty($, 'Value');
            const brickHeight = useProperty($, 'Height');
            const hasHelperText = !!useProperty($, 'Helper Text');
            const hasEmptyText = !!useProperty($, 'Placeholder');
            // 20 is height of helper text, 40 is the min height of the component (by MUI)
            const actualInputHeight = Math.max((brickHeight - (hasHelperText ? 20 : 0)), 40);
            let translateY = (actualInputHeight - 23) / 2; // 23 is height of label
            const hasValue = !!value;

            const  isLabelOnTop = hasEmptyText || hasValue || type === 'date' || type === 'datetime-local' || type === 'color' || type === 'time';

            if (isLabelOnTop) {
                translateY = -8;
            }

            let customSx = {
                '.MuiInputLabel-formControl:not(.Mui-focused)': {
                    transform: `translate(14px, ${translateY}px) scale(${isLabelOnTop? 0.75 : 1})`
                }
            };

            return !hidden && (
                <ThemeProvider theme={theme}>
                    <MUITextField
                            // Properties
                            value={value || ''}
                            inputRef={inputRef}
                            placeholder={useProperty($, 'Placeholder')}
                            {...ifNotNull('label', label, label && label.trim() !== '')}
                            helperText={useProperty($, 'Helper Text')}
                            type={type}
                            variant={useProperty($, 'Variant')}
                            color={useProperty($, 'Color')}
                            size={useProperty($, 'Min Size')}
                            disabled={useProperty($, 'Disabled')}
                            required={useProperty($, 'Required')}
                            error={error}
                            multiline={multiLine}

                            // Events
                            onClick={() => $.trigger('On Click')}
                            onChange={(event) => {
                                // Set the Value property before triggering the event
                                $.set('Value', event.target.value);
                                $.trigger('On Change');
                            }}

                            // UI

                            // Affects the input component (wrapper of <input> or <textarea>)
                            // see: https://mui.com/api/text-field/#props
                            InputProps={{
                                sx: {
                                    ...ifNotNull('flex', 'auto', !multiLine),
                                    ...ifNotNull('display', 'flex', multiLine),
                                    ...ifNotNull('flexDirection', 'column', multiLine),
                                    ...ifNotNull('justifyContent', justifyContent, multiLine),
                                    fontFamily: fontFamily,
                                    ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                                    ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                                    ...ifNotNull('borderWidth', borderWidth, showBorder),
                                    ...ifNotNull('borderStyle', 'solid', showBorder),
                                    ...ifNotNull('boxSizing', 'border-box', showBorder),
                                    ...ifNotTransparent('borderColor', borderColor),
                                    ...ifNotNull('color', textColorOverflow && textColorOverflow.toHexString(), showTextColorOverflow)
                                },

                                style: {
                                    height: '100%',
                                },

                                // On Enter key pressed
                                onKeyDown: (event) => {
                                    if(event.key === 'Enter') {
                                        $.trigger('On Enter Pressed');
                                    }
                                }
                            }}
                            // Affects the <input> or <textarea> element of the input component
                            // see: https://mui.com/api/text-field/#props
                            inputProps={{
                                ...ifNotNull('min', useProperty($, 'Min Val'), type === 'number'),
                                ...ifNotNull('max', useProperty($, 'Max Val'), type === 'number'),
                                ...ifNotNull('step', useProperty($, 'Step'), type === 'number'),
                                style: {
                                    maxHeight: '100%',
                                    overflow: 'auto'
                                },
                                tabIndex: useProperty($, 'Tab Index'),
                            }}
                            FormHelperTextProps={{
                                sx: {
                                    fontFamily: fontFamily,
                                    ...ifNotTransparent('color', borderColor)
                                }
                            }}
                            InputLabelProps={{
                                ...ifNotNull('shrink', true, type === 'date' || type === 'datetime-local' || type === 'color' || type === 'time' || hasEmptyText),
                                sx: {
                                    fontFamily: fontFamily,
                                     ...ifNotTransparent('color', borderColor)
                                }
                            }}
                            sx={{
                                width: 1,
                                height: 1,
                                ...cssToSxProps(useProperty($, 'CSS Property')),
                                ...jsonToSxProps(useProperty($, 'MUI sx [json]')),
                                ...customSx
                            }}
                        >
                    </MUITextField>
                </ThemeProvider>
            );
        };
    }
}

registerBrick('017c9cfde39047e5f918', TextField);
