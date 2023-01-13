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
import MUIButton from '@mui/material/Button';
import Icon from '@mui/material/Icon';

/**
 * Provide a Button visual component using MUI Button
 */
export default class Button extends ReactBrick {

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
            const theme = useMUITheme($);

            const startIcon = useProperty($, 'Start Icon');
            const endIcon = useProperty($, 'End Icon');
            const borderColor = useProperty($, 'Border Color');
            const borderRadius = useProperty($, 'Border Radius');
            const borderWidth = useProperty($, 'Border Width');
            const defaultColor = useProperty($, 'Default Color');

            return !hidden && (
                <ThemeProvider theme={theme}><MUIButton
                    // Properties
                    variant={useProperty($, 'Variant')}
                    color={useProperty($, 'Color')}
                    startIcon={startIcon && (<Icon>{startIcon}</Icon>)}
                    endIcon={endIcon && (<Icon>{endIcon}</Icon>)}
                    disabled={useProperty($, 'Disabled')}
                    size={useProperty($, 'Font Size')}

                    // Events
                    onClick={() => $.trigger('On Click')}

                    tabIndex={useProperty($, 'Tab Index')}

                    // UI
                    sx={{
                        width: 1,
                        height: 1,
                        fontFamily: useProperty($, 'Font Family'),
                        ...ifNotTransparent('color', useProperty($, 'Text Color Override')),
                        ...ifNotTransparent('borderColor', borderColor),
                        ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                        ...ifNotNull('borderWidth', borderWidth),
                        ...ifNotTransparent('borderStyle', 'solid', borderColor),
                        ...ifNotTransparent('backgroundColor', defaultColor),
                        '&:hover': {
                            ...ifNotTransparent('borderColor', borderColor),
                            ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                            ...ifNotNull('borderWidth', borderWidth),
                            ...ifNotTransparent('borderStyle', 'solid', borderColor),
                            ...ifNotTransparent('backgroundColor', defaultColor)
                        },
                        boxSizing: 'border-box',
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}
                >
                    {useProperty($, 'Text')}
                </MUIButton></ThemeProvider>
            );
        };
    }
}

registerBrick('017c9cd311170bc1f95e', Button);
