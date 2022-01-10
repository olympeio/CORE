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
 import { jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent } from 'helpers/mui';

import React from 'react';
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
            const orientation = useProperty($, 'Orientation');
            const borderColor = useProperty($, 'Border Color');
            return !hidden && (
                <MUIDivider
                    // Properties
                    orientation={orientation}
                    variant={useProperty($, 'Variant')}
                    textAlign={useProperty($, 'Text Position')}

                    // UI
                    flexItem={orientation === 'vertical'}
                    sx={{
                        ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                        fontFamily: useProperty($, 'Font Family'),
                        ...ifNotTransparent('color', useProperty($, 'Text Color')),
                        '&.MuiDivider-root': {
                            '&::before': {
                                ...ifNotTransparent('borderColor', borderColor)
                            },
                            '&::after': {
                                ...ifNotTransparent('borderColor', borderColor)
                            }
                        },
                        ...ifNotNull('flex', 'auto', orientation === 'horizontal'),
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}
                >
                    {useProperty($, 'Text')}
                </MUIDivider>
            );
        };
    }
}

registerBrick('017ccb7269412f5f174d', Divider);
