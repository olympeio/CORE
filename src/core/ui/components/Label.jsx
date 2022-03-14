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
import { jsonToSxProps, cssToSxProps, ifNotTransparent, ifNotNull } from 'helpers/mui';

import React from 'react';
import Typography from '@mui/material/Typography';
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
            const text = useProperty($, 'Text');
            const borderRadius = useProperty($, 'Border Radius');
            return !hidden && (
                <Box
                    // UI
                    sx={{
                        width: 1,
                        height: 1,
                        display: 'flex',
                        overflow: 'visible',
                        ...ifNotTransparent('borderColor', useProperty($, 'Border Color')),
                        ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                        borderWidth: useProperty($, 'Border Width'),
                        borderStyle: 'solid',
                        boxSizing: 'border-box',
                        ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color'))
                    }}

                    // Events
                    onClick={() => $.trigger('On Click')}
                >
                    <Typography
                        // Properties
                        component={'p'}
                        variant={useProperty($, 'Text Variant')}
                        noWrap={useProperty($, 'No Wrap')}
                        align={useProperty($, 'Horizontal Align')}

                        // UI
                        sx={{
                            width: 1,
                            ...ifNotTransparent('color', useProperty($, 'Text Color')),
                            fontFamily: useProperty($, 'Font Family'),
                            alignSelf: useProperty($, 'Vertical Align'),
                            ...cssToSxProps(useProperty($, 'CSS Property')),
                            ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                        }}
                    >
                        {useProperty($, 'With Format') ? markdownTextToReactElement(text, 'span') : text}
                    </Typography>
                </Box>
            );
        };
    }
}

registerBrick('017c79a94cb2090c4d7d', Label);
