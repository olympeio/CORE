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

import MUICheckbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';

import { jsonToSxProps } from '../../../helpers/web/mui';

/**
 * Provide a Checkbox visual component using MUI Checkbox
 */
export default class Checkbox extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Change draw div display to center the checkbox
        elementDom.style.display = 'flex';
        elementDom.style.alignItems = 'center';
        elementDom.style.justifyContent = 'center';

        // Observe all properties
        context.observeMany('Checked', 'Indeterminate', 'Disabled', 'Color', 'Checked Icon', 'Unchecked Icon', 'Indeterminate Icon', 'Width', 'Height', 'MUI sx [json]')
            .subscribe(([checked, indeterminate, disabled, color, checkedIcon, uncheckedIcon, indeterminateIcon, width, height, muiSxJson]) => {
                // Compute components size
                const checkboxSize = Math.min(width, height);
                const iconSize = checkboxSize / 1.75;

                // Rendering
                ReactDOM.render((
                    <MUICheckbox
                        // Properties
                        checked={checked}
                        indeterminate={indeterminate}
                        disabled={disabled}
                        color={color}
                        checkedIcon={(<Icon sx={{fontSize: iconSize}}>{checkedIcon}</Icon>)}
                        icon={(<Icon sx={{fontSize: iconSize}}>{uncheckedIcon}</Icon>)}
                        indeterminateIcon={(<Icon sx={{fontSize: iconSize}}>{indeterminateIcon}</Icon>)}

                        // Events
                        onChange={(event) => {
                            // Set the Checked property before triggering the event
                            context.getProperty('Checked').set(event.target.checked);
                            context.getEvent('On Change').trigger();
                        }}

                        // UI
                        sx={{
                            width: checkboxSize,
                            height: checkboxSize,
                            ...jsonToSxProps(muiSxJson)
                        }}
                    ></MUICheckbox>
                ), elementDom);
            });
    }
}

registerBrick('017c9c9b5f604f5f79ac', Checkbox);
