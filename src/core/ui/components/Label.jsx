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
import { markdownTextToReactElement } from 'helpers/remarkable';
import { jsonToSxProps, cssToSxProps, ifNotTransparent, ifNotNull, useMUITheme } from 'helpers/mui';
import { getLogger } from 'logging';

import React, { useRef, useLayoutEffect } from 'react';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";

/**
 * Provide a Label visual component using MUI Typography
 */
export default class Label extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        return $.observe('Hidden');
    }

    /**
     * @override
     */
    static getReactComponent($) {
        return (props) => {
            const [hidden] = props.values;
            const labelRef = useRef();
            const allowContentOverflow = useProperty($, 'Allow Content Overflow');
            let text = useProperty($, 'Text');

            useLayoutEffect(() => {
                if (labelRef?.current) {
                    labelRef.current.parentElement.style.overflow = allowContentOverflow ? "unset" : "hidden";
                }

                if($.get('Auto Compute Height')){
                    // Wait for next frame to let the browser render that new text, so we can get the actual height computed by the browser
                    requestAnimationFrame(() => {
                        $.set('Height', labelRef.current.clientHeight);
                    });
                }
            }, [labelRef, allowContentOverflow, text]);

            // Change typeof text to string to avoid crash
            if (typeof text !== 'string') {
                if (text) {
                    getLogger('Label').warn('Improper input in text property, got type ' + typeof text + ' instead of string. You might want to use "To String" brick.');
                }
                text = text !== null && text !== undefined ? text.toString() : '';
            }
            const theme = useMUITheme($);
            const borderRadius = useProperty($, 'Border Radius');
            // Extract text specific SX and CSS properties to be applied on the <p> instead of the box
            const extractFontProps = ({fontFamily, fontSize, lineHeight, letterSpacing, fontWeight, ...otherProps}) => {
                // Remove undefined properties
                const fontProps = {fontFamily, fontSize, lineHeight, letterSpacing, fontWeight};
                Object.keys(fontProps).forEach((k) => fontProps[k] === undefined && delete fontProps[k]);
                // Return separated props series.
                return [fontProps, otherProps];
            };
            const [cssFontProps, cssOtherProps] = extractFontProps(cssToSxProps(useProperty($, 'CSS Property')));
            const [sxFontProps, sxOtherProps] = extractFontProps(jsonToSxProps(useProperty($, 'MUI sx [json]')));

            const autoHeight = useProperty($, 'Auto Compute Height');
            return !hidden && (
                <ThemeProvider theme={theme}>
                    <Box
                        ref={labelRef}
                        onClick={() => $.trigger('On Click')}
                        sx={{
                            width: 1,
                            ...(autoHeight ? {height: 1} : {}),
                            display: 'flex',
                            overflow: 'visible',
                            borderWidth: useProperty($, 'Border Width'),
                            alignItems: useProperty($, 'Vertical Align'),
                            justifyContent: useProperty($, 'Horizontal Align'),
                            textAlign: useProperty($, 'Horizontal Align'),
                            borderStyle: 'solid',
                            boxSizing: 'border-box',
                            ...ifNotTransparent('color', useProperty($, 'Text Color')),
                            ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                            ...ifNotTransparent('borderColor', useProperty($, 'Border Color')),
                            ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                            ...cssOtherProps,
                            ...sxOtherProps
                        }}
                    >
                        <Typography
                            // Properties
                            component={'p'}
                            variant={useProperty($, 'Text Variant')}
                            noWrap={useProperty($, 'No Wrap')}
                            sx={{
                                // Font family should be overridden by the sx and css props
                                fontFamily: useProperty($, 'Font Family'),
                                ...cssFontProps,
                                ...sxFontProps,
                            }}
                        >
                            {useProperty($, 'With Format') ? markdownTextToReactElement(text, 'span') : text}
                        </Typography>
                    </Box>
                </ThemeProvider>
            );
        };
    }
}

registerBrick('017c79a94cb2090c4d7d', Label);
