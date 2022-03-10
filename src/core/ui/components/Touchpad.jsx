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
import { cssToSxProps, jsonToSxProps, ifNotTransparent, ifNotNull } from 'helpers/mui';

import React from 'react';
import Box from "@mui/material/Box";

export default class Touchpad extends ReactBrick {

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
                    component={'div'}
                    sx={{
                        height: 1,
                        width: 1,
                        ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                        borderWidth: useProperty($, 'Border Width'),
                        ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                        boxSizing: 'border-box',
                        borderStyle: 'solid',
                        ...ifNotTransparent('borderColor', useProperty($, 'Border Color')),
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}

                    onTouchMove={(event) => {
                        $.set('Touch Move', event.nativeEvent);
                        $.trigger('On Touch Move');
                    }}

                    onMouseMove={(event) => {
                        $.set('Mouse Move', event.nativeEvent);
                        $.trigger('On Mouse Move');
                    }}
                />
            );
        };
    }
}

registerBrick('017ce5f49f79fff777aa', Touchpad);
