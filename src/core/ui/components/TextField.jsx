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
import { jsonToSxProps, ifNotNull, ifNotTransparent, cssToSxProps } from 'helpers/mui';

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
            const label = useProperty($, 'Label');
            const type = useProperty($, 'Type');
            const error = useProperty($, 'Error');
            const rows = useProperty($, 'Rows');
            const borderColor = useProperty($, 'Border Color');
            const borderWidth = useProperty($, 'Border Width');
            const borderRadius = useProperty($, 'Border Radius');
            const fontFamily = useProperty($, 'Font Family');
            return !hidden && (
                <MUITextField
                    // Properties
                    value={useProperty($, 'Value') || ''}
                    placeholder={useProperty($, 'Placeholder')}
                    {...ifNotNull('label', label, label && label.trim() !== '')}
                    helperText={useProperty($, 'Helper Text')}
                    type={type}
                    variant={useProperty($, 'Variant')}
                    color={useProperty($, 'Color')}
                    size={useProperty($, 'Min Size')}
                    disabled={useProperty($, 'Disabled')}
                    autoFocus={useProperty($, 'Auto Focus')}
                    required={useProperty($, 'Required')}
                    error={error}
                    multiline={useProperty($, 'Multiline')}
                    rows={rows > 0 ? rows : null}
                    minRows={useProperty($, 'Min Rows')}
                    maxRows={useProperty($, 'Max Rows')}

                    // Events
                    onClick={() => $.trigger('On Click')}
                    onChange={(event) => {
                        // Set the Value property before triggering the event
                        $.set('Value', event.target.value);
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
                            ...ifNotNull('borderWidth', borderWidth),
                            ...ifNotTransparent('borderStyle', 'solid', borderColor),
                            ...ifNotNull('boxSizing', 'border-box', borderWidth),
                            ...ifNotTransparent('borderColor', borderColor),
                            ...ifNotNull('color', useProperty($, 'Text Color Override'), !error)
                        },

                        // On Enter key pressed
                        onKeyDown: (event) => {
                            if(event.key === 'Enter') {
                                $.trigger('On Enter Pressed');
                            }
                        }
                    }}
                    FormHelperTextProps={{
                        sx: {
                            fontFamily: fontFamily,
                            ...ifNotTransparent('color', borderColor)
                        }
                    }}
                    InputLabelProps={{
                        ...ifNotNull('shrink', true, type === 'date' || type === 'datetime-local' || type === 'color'),
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
                ></MUITextField>
            );
        };
    }
}

registerBrick('017c9cfde39047e5f918', TextField);
