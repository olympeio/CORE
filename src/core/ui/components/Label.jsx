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

import { UIBrick, registerBrick } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import Typography from '@mui/material/Typography';

import { markdownTextToReactElement } from 'helpers/remarkable';
import { jsonToSxProps, cssToSxProps, ifNotNull } from 'helpers/mui';

/**
 * Provide a Label visual component using MUI Typography
 */
export default class Label extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Change draw div display to flex for vertical alignment
        elementDom.style.display = 'flex';

        // Allow overflow
        elementDom.style.overflow = 'visible';

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
                        borderColor: borderColor.toHexString(),
                        borderRadius: borderRadius,
                        borderWidth: borderWidth,
                        borderStyle: 'solid',
                        boxSizing: 'border-box',
                        backgroundColor: defaultColor.toHexString(),
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}

                    // Events
                    onClick={() => context.getEvent('On Click').trigger()}
                >
                    {withFormat ? markdownTextToReactElement(text, 'span') : text}
                </Typography>
            ), elementDom);
        });
    }
}

registerBrick('017c79a94cb2090c4d7d', Label);
