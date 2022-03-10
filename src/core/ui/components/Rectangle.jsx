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
import Box from '@mui/material/Box';

/**
 * Provide a Rectangle visual component (empty div) using MUI Box
 */
export default class Rectangle extends ReactBrick {

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
        parent.style.overflow = 'visible'; // Allow overflow
        return super.updateParent(parent, element);
    }

    /**
     * @override
     */
    static getReactComponent($) {
        return (props) => {
            const [hidden] = props.values;
            const borderRadius = useProperty($, 'Border Radius');
            return !hidden && (
                <Box
                    // Properties + UI
                    component={'div'}
                    sx={{
                        width: 1,
                        height: 1,
                        ...ifNotTransparent('borderColor', useProperty($, 'Border Color')),
                        ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                        borderWidth: useProperty($, 'Border Width'),
                        borderStyle: 'solid',
                        boxSizing: 'border-box',
                        ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}

                    // Events
                    onClick={() => $.trigger('On Click')}
                ></Box>
            );
        };
    }
}

registerBrick('017cc0cf86f2a650141a', Rectangle);
