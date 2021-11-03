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

import Box from '@mui/material/Box';

import { jsonToSxProps, cssToSxProps, ifNotNull } from 'helpers/mui';

/**
 * Provide a Rectangle visual component (empty div) using MUI Box
 */
export default class Rectangle extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Allow overflow
        elementDom.style.overflow = 'visible';

        // Observe all properties
        context.observeMany(
            'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden'
        ).subscribe(([
            muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, hidden
        ]) => {
            // Rendering
            ReactDOM.render((
                !hidden &&
                <Box
                    // Properties + UI
                    component={'div'}
                    sx={{
                        width: 1,
                        height: 1,
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
                ></Box>
            ), elementDom);
        });
    }
}

registerBrick('017cc0cf86f2a650141a', Rectangle);
