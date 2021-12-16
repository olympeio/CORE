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

import { VisualBrick, registerBrick, File, Transaction, Sync } from 'olympe';
import { getLogger } from 'logging';

import React from 'react';
import ReactDOM from 'react-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { jsonToSxProps, ifNotNull, ifNotTransparent, cssToSxProps } from 'helpers/mui';
import { combineLatestWith } from 'rxjs/operators';

/**
 * Provides a File Upload component using MUI
 */
export default class FileUpload extends VisualBrick {

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
        const properties = [
            'Multiple', 'Accepted Type', 'Label', 'Helper Text', 'Variant', 'Color', 'Disabled', 'Required', 'Error', 'Font Family', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden', 'Tab Index'
        ];
        const observeRenderer = $.observe('Custom Renderer', false);
        return observeRenderer.pipe(combineLatestWith(properties.map(p => $.observe(p))));
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        // Allow overflow
        parent.style.overflow = 'visible';

        // Rendering
        ReactDOM.render(element, parent);
        // Clear the parent
        return () => { ReactDOM.unmountComponentAtNode(parent); }
    }

    /**
     * @override
     */
    render($) {
        if($.get('Hidden'))
            return null;
        if($.has('Custom Renderer'))
            return this.renderCustom($);
        else
            return this.renderTextField($);
    }

    /**
     * @private
     * @param {!BrickContext} $
     */
    renderTextField($) {
        return (
            <TextField
                // Properties
                label={$.get('Label')}
                helperText={$.get('Helper Text')}
                type={'file'}
                variant={$.get('Variant')}
                color={$.get('Color')}
                disabled={$.get('Disabled')}
                required={$.get('Required')}
                error={$.get('Error')}
                size={'small'}

                // Events
                onClick={(event) => {
                    event.stopPropagation();
                    $.trigger('On Click');
                }}
                onChange={(event) => {
                    this.uploadFiles($, event.target.files);
                }}

                // UI
                InputProps={{
                    inputProps: {
                        multiple: $.get('Multiple'),
                        accept: $.get('Accepted Type')
                    },
                    sx: {
                        flex: 'auto',
                        fontFamily: $.get('Font Family'),
                        tabIndex: $.get('Tab Index'),
                        ...ifNotTransparent('backgroundColor', $.get('Default Color')),
                        ...ifNotNull('borderRadius', $.get('Border Radius')),
                        ...ifNotNull('borderWidth', $.get('Border Width')),
                        ...ifNotTransparent('borderStyle', 'solid', $.get('Border Color')),
                        ...ifNotNull('boxSizing', 'border-box', $.get('Border Width')),
                        ...ifNotTransparent('borderColor', $.get('Border Color'))
                    }
                }}
                FormHelperTextProps={{
                    sx: {
                        fontFamily: $.get('Font Family'),
                        ...ifNotTransparent('color', $.get('Border Color'))
                    }
                }}
                InputLabelProps={{
                    shrink: $.get('Label') !== '',
                    sx: {
                        fontFamily: $.get('Font Family'),
                        ...ifNotTransparent('color', $.get('Border Color'))
                    }
                }}
                sx={{
                    width: 1,
                    height: 1,
                    ...cssToSxProps($.get('CSS Property')),
                    ...jsonToSxProps($.get('MUI sx [json]'))
                }}

                // Open file selector when asked
                ref={el => {
                    if(el) {
                        $.observe('Show File Selector').subscribe(() => {
                            el.querySelector('input').click();
                        });
                    }
                }}
            ></TextField>
        );
    }

    /**
     * @private
     * @param {!BrickContext} $
     */
    renderCustom($) {
        return (
            <Box
                // Style
                sx={{
                    width: 1,
                    height: 1,
                    ...ifNotNull('cursor', 'pointer', !$.get('Disabled'))
                }}

                // Content
                ref={el => {
                    el && $.runner('Custom Renderer')
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
                            multiple: $.get('Multiple'),
                            accept: $.get('Accepted Type')
                        }
                    }}
                    sx={{
                        display: 'none',
                        width: '1px',
                        height: '1px'
                    }}

                    // Events
                    onChange={(event) => {
                        this.uploadFiles($, event.target.files);
                    }}

                    // Open file selector when asked
                    ref={el => {
                        if(el) {
                            $.observe('Show File Selector').subscribe(() => {
                                el.querySelector('input').click();
                            });
                        }
                    }}
                ></TextField>
            </Box>
        );
    }

    /**
     * @private
     * @param {!BrickContext} $
     * @param {!Array} files
     */
    uploadFiles($, files) {
        // Local transaction
        const tags = [];
        const t = new Transaction();

        // Loop over all files
        for (const file of files) {
            // Read file content
            const reader = new FileReader();
            reader.onloadend = () => {
                // Find file model and create it locally
                const tag = File.createFile(File, t, file.name, /** @type {!ArrayBuffer} */ (reader['result']), file.type);
                t.persistInstance(tag, false);
                tags.push(tag);

                // Only call when all files have been loaded.
                if (tags.length === files.length) {
                    // Execute transaction
                    t.persist(false);
                    t.execute((success, message) => {
                        if(!success) {
                            getLogger('FileUpload').warn('The application encountered a problem while uploading files. The transaction failed.', message);
                            return;
                        }

                        // All good, we notice the user
                        $.set('Files', tags.map(Sync.getInstance));
                        $.trigger('On Change');
                    });
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
