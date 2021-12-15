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

import { VisualBrick, registerBrick } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

import { markdownTextToReactElement } from 'helpers/remarkable';
import { jsonToSxProps, cssToSxProps } from 'helpers/mui';

/**
 * Provide a Label visual component using MUI Typography
 */
export default class Label extends VisualBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!BrickContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Observe all properties
        context.observeMany(
            'Text', 'Text Variant', 'No Wrap', 'With Format', 'Text Color', 'Font Family', 'Horizontal Align', 'Vertical Align', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden'
        ).subscribe(([
            text, textVariant, noWrap, withFormat, textColor, fontFamily, horizontalAlign, verticalAlign, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, hidden
        ]) => {
            // Rendering
            ReactDOM.render((
                !hidden &&
                <Box
                    // UI
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        overflow: 'visible',
                        borderColor: borderColor.toHexString(),
                        borderRadius: borderRadius,
                        borderWidth: borderWidth,
                        borderStyle: 'solid',
                        boxSizing: 'border-box',
                        backgroundColor: defaultColor.toHexString()
                    }}

                    // Events
                    onClick={() => context.trigger('On Click')}
                >
                    <Typography
                        // Properties
                        component={'p'}
                        variant={textVariant}
                        noWrap={noWrap}
                        align={horizontalAlign}

                        // UI
                        sx={{
                            width: 1,
                            color: textColor.toString(),
                            fontFamily: fontFamily,
                            alignSelf: verticalAlign,
                            ...cssToSxProps(cssProperty),
                            ...jsonToSxProps(muiSxJson)
                        }}
                    >
                        {withFormat ? markdownTextToReactElement(text, 'span') : text}
                    </Typography>
                </Box>
            ), elementDom);
        });
    }
}

registerBrick('017c79a94cb2090c4d7d', Label);
