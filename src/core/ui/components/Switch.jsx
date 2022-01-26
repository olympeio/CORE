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
 import { jsonToSxProps, cssToSxProps, ifNotTransparent, ifNotNull } from 'helpers/mui';

import React from 'react';
import MUISwitch from '@mui/material/Switch';

/**
 * Provide a Switch visual component using MUI Switch
 */
export default class Switch extends ReactBrick {

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
            return !hidden && (
                <MUISwitch
                    // Properties
                    checked={useProperty($, 'Checked') || false}
                    disabled={useProperty($, 'Disabled')}
                    color={useProperty($, 'Color')}
                    size={useProperty($, 'Size')}

                    // UI
                    sx={{
                        ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                        ...ifNotNull('borderRadius', useProperty($, 'Border Radius')),
                        tabIndex: useProperty($, 'Tab Index'),
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}

                    // Events
                    onChange={(event) => {
                        // Set the Checked property before triggering the event
                        $.set('Checked', event.target.checked);
                        $.trigger('On Change');
                        $.trigger('On Click');
                    }}
                ></MUISwitch>
            );
        };
    }
}

registerBrick('017c9e0e9f6f81f21a93', Switch);
