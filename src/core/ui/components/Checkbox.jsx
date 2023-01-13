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
import { jsonToSxProps, cssToSxProps, ifNotTransparent, ifNotNull, useMUITheme } from 'helpers/mui';
import { ThemeProvider } from '@mui/material/styles';

import React from 'react';
import MUICheckbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';

/**
 * Provide a Checkbox visual component using MUI Checkbox
 */
export default class Checkbox extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        return $.observe('Hidden');
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        // Change draw div display to center the checkbox
        parent.style.display = 'flex';
        parent.style.alignItems = 'center';
        parent.style.justifyContent = 'center';

        // Allow overflow
        parent.style.overflow = 'visible';

        return super.updateParent(parent, element);
    }

    /**
     * @override
     */
    static getReactComponent($) {
        return (props) => {
            const [hidden] = props.values;
            const theme = useMUITheme($);

            // Compute components size
            const checkboxSize = Math.min(useProperty($, 'Width'), useProperty($, 'Height'));
            const iconSize = checkboxSize / 1.75;

            // Icon props
            const borderRadius = useProperty($, 'Border Radius');
            const iconSxProps = {
                fontSize: iconSize,
                ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                ...ifNotTransparent('color', useProperty($, 'Border Color')),
                ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius)
            };

            return !hidden && (
                <ThemeProvider theme={theme}><MUICheckbox
                    // Properties
                    checked={useProperty($, 'Checked') || false}
                    indeterminate={useProperty($, 'Indeterminate')}
                    disabled={useProperty($, 'Disabled')}
                    color={useProperty($, 'Color')}
                    checkedIcon={(<Icon sx={{...iconSxProps}}>{useProperty($, 'Checked Icon')}</Icon>)}
                    icon={(<Icon sx={{...iconSxProps}}>{useProperty($, 'Unchecked Icon')}</Icon>)}
                    indeterminateIcon={(<Icon sx={{...iconSxProps}}>{useProperty($, 'Indeterminate Icon')}</Icon>)}

                    // Events
                    onChange={(event) => {
                        // Set the Checked property before triggering the event
                        $.set('Checked', event.target.checked);
                        $.trigger('On Change');
                        $.trigger('On Click');
                    }}

                    tabIndex={useProperty($, 'Tab Index')}

                    // UI
                    sx={{
                        width: checkboxSize,
                        height: checkboxSize,
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}
                ></MUICheckbox></ThemeProvider>
            );
        };
    }
}

registerBrick('017c9c9b5f604f5f79ac', Checkbox);
