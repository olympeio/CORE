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

import { registerBrick, GlobalProperties } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';
import { ReactBrick, useProperty } from 'helpers/react.jsx';

import MUIDialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { createTransitionElement, createTransitionObject } from './CustomizeAlertDialog.jsx';
import { markdownTextToReactElement } from 'helpers/remarkable';
import { cssToSxProps, jsonToSxProps, ifNotTransparent } from 'helpers/mui';
import {map} from "rxjs";

/**
 * Provides a Dialog component using MUI Dialog
 */
export default class Dialog extends ReactBrick {

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
        // Don't wait for value on the "Content Renderer" so that in Draw we can display the "placeholder".
        // But map it into an array to avoid returning "null" which would not render the component at all.
        return $.observe('Content Renderer', false).pipe(map((renderer) => [renderer]));
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
     * @return {Element}
     */
    static getReactComponent($) {
        return (props) => {
            const [contentRenderer] = props.values;
            const open = useProperty($, 'Open');
            const title = useProperty($, 'Title');
            const contentWidth = useProperty($, 'Content Width');
            const contentHeight = useProperty($, 'Content Height');
            const contentPadding = useProperty($, 'Content Padding');
            const fullScreen = useProperty($, 'Full Screen');
            const scroll = useProperty($, 'Scroll');
            const showDivider = useProperty($, 'Show Divider');
            const hideBackdrop = useProperty($, 'Hide Backdrop');
            const enableBackdropClick = useProperty($, 'Enable Backdrop Click');
            const keepMounted = useProperty($, 'Keep Mounted');
            const transitionType = useProperty($, 'Transition Type');
            const transitionDirection = useProperty($, 'Transition Direction'); // aie
            const transitionEasing = useProperty($, 'Transition Easing');
            const transitionTimeout = useProperty($, 'Transition Timeout');
            const transitionExitEasing = useProperty($, 'Transition Exit Easing');
            const transitionExitTimeout = useProperty($, 'Transition Exit Timeout');
            const muiSxJson = useProperty($, 'MUI sx [json]');
            const borderColor = useProperty($, 'Border Color');
            const borderRadius = useProperty($, 'Border Radius');
            const borderWidth = useProperty($, 'Border Width');
            const cssProperty = useProperty($, 'CSS Property');
            const defaultColor = useProperty($, 'Default Color');
            const zIndex = useProperty($, 'Z-Index');

            const editionMode = $.get(GlobalProperties.EDITION, true);

            const [$renderer, set$Renderer] = React.useState(null);

            React.useEffect(() => {
                if (!editionMode && (open || keepMounted) && $renderer === null) {
                    set$Renderer((contentRenderer) ? $.runner(contentRenderer) : null);
                } else {
                    $renderer?.destroy();
                    set$Renderer(null);
                }
            }, [open, keepMounted]);

            // In DRAW we want to show a placeholder
            if (editionMode) {
                return (
                    <Box sx={{backgroundColor: 'lightgrey', width: 1, height: 1, overflow: 'hidden'}}>
                        <Typography sx={{color: 'black', padding: 1}}>
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
                return (open || keepMounted) ? (
                    <MUIDialog
                        // Properties
                        disableEnforceFocus
                        open={open}
                        maxWidth={false}
                        fullScreen={fullScreen}
                        scroll={scroll}
                        hideBackdrop={hideBackdrop}
                        keepMounted={keepMounted}
                        TransitionComponent={transitionElement}

                        // Event
                        onClose={() => {
                            if (enableBackdropClick) {
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
                        {$renderer && (
                            <DialogContent
                                dividers={showDivider}
                                ref={el => {
                                    el && $renderer
                                        .set('Width', contentWidth)
                                        .set('Height', contentHeight)
                                        .setParentElement(el);
                                }}
                                sx={{
                                    width: contentWidth,
                                    height: contentHeight,
                                    padding: typeof contentPadding === 'number' ? `${contentPadding}px` : undefined
                                }}
                            ></DialogContent>
                        )}
                    </MUIDialog>
                ) : null;
            }
        }
    }
}

registerBrick('017ce674618b030841a7', Dialog);
