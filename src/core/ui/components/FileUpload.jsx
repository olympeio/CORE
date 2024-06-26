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

import { registerBrick, File, Transaction, CloudObject, BrickContext } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { jsonToSxProps, ifNotNull, ifNotTransparent, cssToSxProps, useMUITheme, validateString, validateVariant, colorExists } from 'helpers/mui';
import { getLogger } from 'logging';

import React, {useRef, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { ThemeProvider } from "@mui/material/styles";
import {combineLatest} from "rxjs";

/**
 * Provides a File Upload component using MUI
 */
export default class FileUpload extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        $.set('Files', []);
        return combineLatest([$.observe('Hidden'), $.observe('Custom Renderer', false)]);
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
            /**
             * Ref of the upload text field used to open the file selector when triggering the
             * `Show File Selector` event
             * @type {React.MutableRefObject<null>}
             */
            const uploadTextField = useRef(null);
            const textFieldLastEvent = useRef(null);
            useEffect(() => {
                $.observe('Show File Selector').subscribe(() => {
                    uploadTextField.current?.querySelector('input').click();
                });

                $.observe('Clear Files').subscribe(() => {
                    $.set('Files', []);
                    $.trigger('On Change');

                    const event = textFieldLastEvent.current;
                    if(event){
                        event.target.value = null;
                    }
                });
            }, []);

            const [hidden, renderer] = props.values;
            const theme = useMUITheme($);
            if (hidden) {
                return null;
            }
            const element = renderer
                ? FileUpload.renderCustom($, renderer, uploadTextField, textFieldLastEvent)
                : FileUpload.renderTextField($, uploadTextField, textFieldLastEvent, theme);
            return (
                <ThemeProvider theme={theme}>
                    {element}
                </ThemeProvider>
            );
        };
    }

    /**
     * @static
     * @private
     * @param {!BrickContext} $
     * @param {MutableRefObject} uploadTextField
     * @param {MutableRefObject} textFieldLastEvent
     * @param {MUITheme} theme
     * @return {!ReactElement}
     */
    static renderTextField($, uploadTextField, textFieldLastEvent, theme) {
        const label = validateString(useProperty($, 'Label'), 'Label', 'FileUpload');
        const helperText = validateString(useProperty($, 'Helper Text'), 'Helper Text', 'FileUpload');
        const fontFamily = useProperty($, 'Font Family');
        const borderWidth = useProperty($, 'Border Width');
        const borderColor = useProperty($, 'Border Color');
        const borderRadius = useProperty($, 'Border Radius');
        const showBorder = borderWidth > 0 && borderColor.toHexString() !== '#00000000';
        const variant = useProperty($, 'Variant');
        const color = useProperty($, 'Color');

        const textFieldVariants = ['outlined', 'standard', 'filled'];
        return (
            <TextField
                // Properties
                label={label}
                helperText={helperText}
                type={'file'}
                variant={validateVariant(variant, 'Variant', 'FileUpload', textFieldVariants)}
                color={colorExists(theme, color, 'FileUpload') ? color : 'primary'}
                disabled={useProperty($, 'Disabled')}
                required={useProperty($, 'Required')}
                error={useProperty($, 'Error')}
                size={'small'}
                tabIndex={useProperty($, 'Tab Index')}

                // Events
                onClick={(event) => {
                    event.stopPropagation();
                    $.trigger('On Click');
                }}
                onChange={(event) => {
                    textFieldLastEvent.current = event;
                    FileUpload.uploadFiles($, event.target.files);
                }}

                // UI
                InputProps={{
                    inputProps: {
                        multiple: useProperty($, 'Multiple'),
                        accept: useProperty($, 'Accepted Type')
                    },
                    sx: {
                        flex: 'auto',
                        fontFamily: fontFamily,
                        ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                        ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                        ...ifNotNull('borderWidth', borderWidth, showBorder),
                        ...ifNotNull('borderStyle', 'solid', showBorder),
                        ...ifNotNull('boxSizing', 'border-box', showBorder),
                        ...ifNotTransparent('borderColor', borderColor)
                    }
                }}
                FormHelperTextProps={{
                    sx: {
                        fontFamily: fontFamily,
                        ...ifNotTransparent('color', borderColor)
                    }
                }}
                InputLabelProps={{
                    shrink: label !== '',
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

                // Open file selector when asked
                ref={uploadTextField}
            ></TextField>
        );
    }

    /**
     * @static
     * @private
     * @param {!BrickContext} $
     * @param {!VisualBrick} renderer
     * @param {MutableRefObject} uploadTextField
     * @param {MutableRefObject} textFieldLastEvent
     * @return {!ReactElement}
     */
    static renderCustom($, renderer, uploadTextField, textFieldLastEvent) {
        return (
            <Box
                // Style
                sx={{
                    width: 1,
                    height: 1,
                    ...ifNotNull('cursor', 'pointer', !useProperty($, 'Disabled'))
                }}

                // Content
                ref={el => {
                    el && $.runner(renderer)
                        .repeat('Width', $.observe('Width'))
                        .repeat('Height', $.observe('Height'))
                        .setParentElement(el);
                }}
            >
                <TextField
                    // Hidden file input
                    type={'file'}
                    InputProps={{
                        inputProps: {
                            multiple: useProperty($, 'Multiple'),
                            accept: useProperty($, 'Accepted Type')
                        }
                    }}
                    sx={{
                        display: 'none',
                        width: '1px',
                        height: '1px'
                    }}

                    // Events
                    onChange={(event) => {
                        textFieldLastEvent.current = event;
                        FileUpload.uploadFiles($, event.target.files);
                    }}

                    // Open file selector when asked
                    ref={uploadTextField}
                ></TextField>
            </Box>
        );
    }

    /**
     * @static
     * @private
     * @param {!BrickContext} $
     * @param {!Array} files
     */
    static uploadFiles($, files) {
        // Local transaction
        const tags = [];
        const t = new Transaction(false);

        // Loop over all files
        for (const file of files) {
            // Read file content
            const reader = new FileReader();
            reader.onloadend = () => {
                // Find file model and create it locally
                const fileTag = t.create(File);
                File.setContent(t, fileTag, file.name, /** @type {!ArrayBuffer} */ (reader['result']), file.type);
                tags.push(fileTag);

                // Only call when all files have been loaded.
                if (tags.length === files.length) {
                    // Execute transaction
                    t.execute().then(() => {
                        // All good, we notice the user
                        $.set('Files', tags.map(CloudObject.get));
                        $.trigger('On Files Added');
                        $.trigger('On Change');
                    }).catch((message) => {
                        getLogger('FileUpload').warn('The application encountered a problem while uploading files. The transaction failed.', message);
                    });
                }
            };
            reader.readAsArrayBuffer(file);
        }

        // No file case
        if (files.length === 0) {
            $.set('Files', []);
            $.trigger('On Change');
        }
    }
}

registerBrick('017d23e8b5a69ed79fe4', FileUpload);
