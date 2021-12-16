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

import { VisualBrick, registerBrick, GlobalProperties } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import MUIDialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { createTransitionElement, createTransitionObject } from './CustomizeAlertDialog.jsx';
import { markdownTextToReactElement } from 'helpers/remarkable';
import { cssToSxProps, jsonToSxProps, ifNotTransparent } from 'helpers/mui';

import { combineLatestWith } from 'rxjs/operators';

/**
 * Provides a Dialog component using MUI Dialog
 */
export default class Dialog extends VisualBrick {

    /**
     * @override
     */
    init($) {
        // Handle dialog opening/closing events
        $.set('Open', false);
        $.observe('Open Dialog').subscribe(() => {
            $.set('Open', true);
        });
        $.observe('Close Dialog').subscribe(() => {
            $.set('Open', false);
        });
    }

    /**
     * @override
     */
    setupExecution($) {
        const properties = [
            'Open', 'Title', 'Content Width', 'Content Height', 'Full Screen', 'Scroll',
            'Show Divider', 'Hide Backdrop', 'Enable Backdrop Click', 'Keep Mounted', 'Transition Type', 'Transition Direction',
            'Transition Easing', 'Transition Timeout', 'Transition Exit Easing', 'Transition Exit Timeout', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Z-Index'
        ];
        const contentRendererObserver = $.observe('Content Renderer', false);
        return contentRendererObserver.pipe(combineLatestWith(properties.map(p => $.observe(p))));
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        // Allow overflow
        parent.style.overflow = 'visible';

        // Rendering
        ReactDOM.render(element, parent);
        return () => { ReactDOM.unmountComponentAtNode(parent); }
    }

    /**
     * @override
     * @param {!BrickContext} $
     * @param {!Array} properties
     * @return {Element}
     */
    render($, properties) {
        const [
            contentRenderer, open, title, contentWidth, contentHeight, fullScreen, scroll,
            showDivider, hideBackdrop, enableBackdropClick, keepMounted, transitionType, transitionDirection,
            transitionEasing, transitionTimeout, transitionExitEasing, transitionExitTimeout, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, zIndex
        ] = properties;

        // In DRAW we want to show a placeholder
        if($.get(GlobalProperties.EDITION, true)) {
            return (
                <Box sx={{ backgroundColor: 'lightgrey', width: 1, height: 1 }}>
                    <Typography sx={{ color: 'black', padding: 1 }}>
                        <b>Dialog</b><br/>
                        To control it use events <code>Open Dialog</code> and <code>Close Dialog</code>.
                    </Typography>
                </Box>
            );
        }

        // Not in DRAW
        else {
            // Transition element
            const transition = createTransitionObject(transitionType, transitionDirection, transitionEasing, transitionTimeout, transitionExitEasing, transitionExitTimeout);
            const transitionElement = createTransitionElement(transition);

            // Element
            return (open || keepMounted) && (
                <MUIDialog
                    // Properties
                    open={open}
                    maxWidth={false}
                    fullScreen={fullScreen}
                    scroll={scroll}
                    hideBackdrop={hideBackdrop}
                    keepMounted={keepMounted}
                    TransitionComponent={transitionElement}

                    // Event
                    onClose={() => {
                        if(enableBackdropClick) {
                            $.trigger('Close Dialog');
                        }
                    }}

                    // UI
                    sx={{
                        zIndex: open ? Math.abs(zIndex) : -Math.abs(zIndex),
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}
                    PaperProps={{
                        variant: borderWidth > 0 ? 'outlined' : 'elevation',
                        elevation: borderWidth > 0 ? 0 : 24,
                        sx: {
                            borderColor: borderColor.toHexString(),
                            borderRadius: `${borderRadius}px`,
                            borderWidth: `${borderWidth}px`,
                            ...ifNotTransparent('backgroundColor', defaultColor)
                        }
                    }}
                >
                    {title && (
                        <DialogTitle>
                            {markdownTextToReactElement(title, 'span')}
                        </DialogTitle>
                    )}
                    {contentRenderer && (
                        <DialogContent
                            dividers={showDivider}
                            ref={el => {
                                el && $.runner(contentRenderer)
                                    .set('Width', contentWidth)
                                    .set('Height', contentHeight)
                                    .setParentElement(el);
                            }}
                            sx={{
                                width: contentWidth,
                                height: contentHeight
                            }}
                        ></DialogContent>
                    )}
                </MUIDialog>
            );
        }
    }
}

registerBrick('017ce674618b030841a7', Dialog);
