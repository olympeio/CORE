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

import { ActionBrick, registerBrick } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { createTransitionElement } from './CustomizeAlertDialog.jsx';
import { markdownTextToReactElement } from 'helpers/remarkable';

/**
 * Show a basic MUI alert/confirm dialog
 */
export default class ShowAlertDialog extends ActionBrick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {string} textContent
     * @param {string} title
     * @param {string} confirmText
     * @param {string} cancelText
     * @param {string} textFieldType
     * @param {Object?} customization
     * @param {function()} forwardEvent
     * @param {function()} onConfirm
     * @param {function()} onCancel
     * @param {function(string)} setTextFieldValue
     */
     update(context, [textContent, title, confirmText, cancelText, textFieldType, customization], [forwardEvent, onConfirm, onCancel, setTextFieldValue]) {
        // Dialog closing
        const handleClose = (confirm) => {
            context.set('open', false);
            if(confirm) {
                const value = context.get('value');
                if(value) {
                    setTextFieldValue(value.toString());
                }
                onConfirm();
            } else {
                onCancel();
            }
            forwardEvent();
        };

        // Create optional customization
        const custom = customization ? {
            fullWidth: customization.fullWidth,
            maxWidth: customization.maxWidth !== 'disabled' ? customization.maxWidth : false,
            scroll: customization.scroll,
            TransitionComponent: createTransitionElement(customization.transition)
        } : {};

        // Compute markdown so we don't do it 2 times
        const titleElement = title && markdownTextToReactElement(title, 'span');
        const textContentElement = markdownTextToReactElement(String(textContent) || '', 'span');

        // Show/hide the dialog
        context.set('open', true);
        context.observe('open').subscribe(open => {
            // Rendering
            const elementDom = context.get('elementDom');
            ReactDOM.render((
                <Dialog
                    // Dialog properties
                    open={open}
                    {...custom}
                    onClose={() => {
                        // Only close here if cancel text is defined
                        if(cancelText) {
                            handleClose(false);
                        }
                    }}
                >
                    {title && (
                        <DialogTitle>
                            {titleElement}
                        </DialogTitle>
                    )}
                    <DialogContent>
                        <DialogContentText>
                            {textContentElement}
                        </DialogContentText>
                        {textFieldType && (
                            <TextField
                                autoFocus={true}
                                margin={'dense'}
                                type={textFieldType}
                                fullWidth={true}
                                variant={'standard'}
                                onChange={(event) => {
                                    context.set('value', event.target.value);
                                }}
                            ></TextField>
                        )}
                    </DialogContent>
                    <DialogActions>
                        {cancelText && (
                            <Button onClick={() => handleClose(false)}>{cancelText}</Button>
                        )}
                        <Button onClick={() => handleClose(true)}>{confirmText}</Button>
                    </DialogActions>
                </Dialog>
            ), elementDom);
        });
    }

    /**
     * @protected
     * @param {!BrickContext} context
     */
    init(context) {
        // Add a custom div to the body
        const elementDom = document.createElement('div');
        elementDom.setAttribute('id', `show_alert_dialog_${Date.now()}`);
        document.body.appendChild(elementDom);
        context.set('elementDom', elementDom);
        context.set('open', false);
        context.set('value', null);
    }

    /**
     * @protected
     * @param {!BrickContext} context
     */
    destroy(context) {
        // Remove the custom div from the body
        const elementDom = context.get('elementDom');
        ReactDOM.unmountComponentAtNode(elementDom);
        document.body.removeChild(elementDom);
    }
}

registerBrick('017cdfb88af6d51fd846', ShowAlertDialog);
