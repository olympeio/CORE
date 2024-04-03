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
 import { jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent, validateString, getColorDefinition } from 'helpers/mui';

import React, { useLayoutEffect, useRef } from 'react';
import MUIDivider from '@mui/material/Divider';

/**
 * Provide a Divider visual component using MUI Divider
 */
export default class Divider extends ReactBrick {

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
        // Change draw div display to center the divider
        parent.style.alignItems = 'center';
        parent.style.justifyContent = 'center';
        parent.style.display = 'flex';

        return super.updateParent(parent, element);
    }

    /**
     * @override
     */
    static getReactComponent($) {
        return (props) => {
            const [hidden] = props.values;
            const dividerRef = useRef(null);
            const orientation = useProperty($, 'Orientation');
            const borderColor = useProperty($, 'Border Color');
            const borderWidth = useProperty($, 'Border Width') || 1;
            const borderRadius = useProperty($, 'Border Radius');
            const allowContentOverflow = useProperty($, 'Allow Content Overflow');
            const muiSx = jsonToSxProps(useProperty($, 'MUI sx [json]'));
            const text = useProperty($, 'Text');
            const textColor = useProperty($, 'Text Color');
            const isColorValid = Boolean(getColorDefinition(textColor, 'Divider'));
           
            useLayoutEffect(() => {
                if (dividerRef && dividerRef.current) {
                    dividerRef.current.parentElement.style.overflow = allowContentOverflow ? "visible" : "hidden";
                }
            }, [dividerRef, allowContentOverflow]);

            let finalBorderColor = {...ifNotTransparent('borderColor', borderColor) };
            if(muiSx.backgroundColor) {
                finalBorderColor = {...finalBorderColor, borderColor: muiSx.backgroundColor }
            }

            let customStyle = {};
            if (orientation === 'horizontal') {
                customStyle = {
                    ...customStyle,
                    '&.MuiDivider-root': {
                        '&::before': {
                            ...finalBorderColor,
                            borderWidth,
                            transform: `translateY(calc(50% - ${borderWidth / 2}px))`
                        },
                        '&::after': {
                            ...finalBorderColor,
                            borderWidth,
                            transform: `translateY(calc(50% - ${borderWidth / 2}px))`
                        }
                    },
                }
            } else {
                customStyle = {
                    ...customStyle,
                    '&.MuiDivider-root': {
                        '&::before': {
                            ...finalBorderColor,
                            borderWidth,
                            transform: `translateX(-${borderWidth / 2}px)`
                        },
                        '&::after': {
                            ...finalBorderColor,
                            borderWidth,
                            transform: `translateX(-${borderWidth / 2}px)`
                        }
                    },
                }
            }

            return !hidden && (
                <MUIDivider
                    ref={dividerRef}
                    // Properties
                    orientation={orientation}
                    variant={useProperty($, 'Variant')}
                    textAlign={useProperty($, 'Text Position')}

                    // UI
                    flexItem={orientation === 'vertical'}
                    sx={{
                        ...finalBorderColor,
                        fontFamily: useProperty($, 'Font Family'),
                        ...ifNotTransparent('color', isColorValid ? textColor : undefined),
                        borderBottomWidth: borderWidth,
                        borderRightWidth: borderWidth,
                        ...ifNotNull('borderRadius', borderRadius),
                        ...customStyle,
                        ...ifNotNull('flex', 'auto', orientation === 'horizontal'),
                        ...cssToSxProps(useProperty($, 'CSS Property')),

                        '&.MuiDivider-root>span': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                    }}
                >
                    {validateString(text, 'Text', 'Divider')}
                </MUIDivider>
            );
        };
    }
}

registerBrick('017ccb7269412f5f174d', Divider);
