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

import { registerBrick, File, Transaction, CloudObject } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { jsonToSxProps, ifNotNull, ifNotTransparent, cssToSxProps } from 'helpers/mui';
import { getLogger } from 'logging';

import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { combineLatestWith } from 'rxjs/operators';

/**
 * Provides a File Upload component using MUI
 */
export default class FileUpload extends ReactBrick {

    /**
     * @override
     */
    init($) {
        $.set('Files', []);
    }

    /**
     * @override
     */
    setupExecution($) {
        return $.observe('Hidden').pipe(combineLatestWith($.observe('Custom Renderer', false)));
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
            const [hidden, renderer] = props.values;
            if (hidden) {
                return null;
            }
            if(renderer) {
                return FileUpload.renderCustom($, renderer);
            } else {
                return FileUpload.renderTextField($);
            }
        };
    }

    /**
     * @static
     * @private
     * @param {!BrickContext} $
     * @return {!ReactElement}
     */
    static renderTextField($) {
        const label = useProperty($, 'Label');
        const fontFamily = useProperty($, 'Font Family');
        const borderWidth = useProperty($, 'Border Width');
        const borderColor = useProperty($, 'Border Color');
        const borderRadius = useProperty($, 'Border Radius');
        const showBorder = borderWidth > 0 && borderColor.toHexString() !== '#00000000';
        return (
            <TextField
                // Properties
                label={label}
                helperText={useProperty($, 'Helper Text')}
                type={'file'}
                variant={useProperty($, 'Variant')}
                color={useProperty($, 'Color')}
                disabled={useProperty($, 'Disabled')}
                required={useProperty($, 'Required')}
                error={useProperty($, 'Error')}
                size={'small'}

                // Events
                onClick={(event) => {
                    event.stopPropagation();
                    $.trigger('On Click');
                }}
                onChange={(event) => {
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
                        tabIndex: useProperty($, 'Tab Index'),
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
                ref={el => FileUpload.bindShowFileSelector($, el)}
            ></TextField>
        );
    }

    /**
     * @static
     * @private
     * @param {!BrickContext} $
     * @param {!VisualBrick} renderer
     * @return {!ReactElement}
     */
    static renderCustom($, renderer) {
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
                        FileUpload.uploadFiles($, event.target.files);
                    }}

                    // Open file selector when asked
                    ref={el => FileUpload.bindShowFileSelector($, el)}
                ></TextField>
            </Box>
        );
    }

    /**
     * @static
     * @private
     * @param {!BrickContext} $
     * @param {Element} el
     */
    static bindShowFileSelector($, el) {
        if(el) {
            $.observe('Show File Selector').subscribe(() => {
                el.querySelector('input').click();
            });
        }
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
        const t = new Transaction();

        // Loop over all files
        for (const file of files) {
            // Read file content
            const reader = new FileReader();
            reader.onloadend = () => {
                // Find file model and create it locally
                const tag = File.createFromContent(t, file.name, /** @type {!ArrayBuffer} */ (reader['result']), file.type);
                t.persistInstance(tag, false);
                tags.push(tag);

                // Only call when all files have been loaded.
                if (tags.length === files.length) {
                    // Execute transaction
                    t.persist(false);
                    t.execute()
                        .then(() => {
                            // All good, we notice the user
                            $.set('Files', tags.map(CloudObject.get));
                            $.trigger('On Change');
                        })
                        .catch(message => getLogger('FileUpload').warn('The application encountered a problem while uploading files. The transaction failed.', message));
                }
            };
            reader.readAsArrayBuffer(file);
        }

        // No file case
        if(files.length === 0) {
            $.set('Files', []);
            $.trigger('On Change');
        }
    }
}

registerBrick('017d23e8b5a69ed79fe4', FileUpload);
