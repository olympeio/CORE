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

import MUIButton from '@mui/material/Button';
import Icon from '@mui/material/Icon';

import { jsonToSxProps } from '../../../helpers/web/mui';

/**
 * Provide a Button visual component using MUI Button
 */
export default class Button extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Observe all properties
        context.observeMany('Text', 'Variant', 'Color', 'Start Icon', 'End Icon', 'Disabled', 'Font Size', 'Font Family', 'MUI sx [json]')
            .subscribe(([text, variant, color, startIcon, endIcon, disabled, fontSize, fontFamily, muiSxJson]) => {
                // Rendering
                ReactDOM.render((
                    <MUIButton
                        // Properties
                        variant={variant}
                        color={color}
                        startIcon={startIcon && (<Icon>{startIcon}</Icon>)}
                        endIcon={endIcon && (<Icon>{endIcon}</Icon>)}
                        disabled={disabled}
                        size={fontSize}

                        // Events
                        // onClick not necessary -> would trigger the event 2x

                        // UI
                        sx={{
                            width: 1,
                            height: 1,
                            fontFamily: fontFamily,
                            ...jsonToSxProps(muiSxJson)
                        }}
                    >
                        {text}
                    </MUIButton>
                ), elementDom);
            });
    }
}

registerBrick('017c9cd311170bc1f95e', Button);
