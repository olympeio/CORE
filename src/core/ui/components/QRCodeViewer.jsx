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

/**
 * Provide a visual component that generates QR codes using qrcode.react
 */

import { registerBrick, Color } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { cssToSxProps, ifNotTransparent } from 'helpers/mui';

import React from 'react';
import QRCode from 'qrcode.react';

/**
 * Provide a visual component that generates a QR code using qrcode.react
 */
export default class QRCodeViewer extends ReactBrick {

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
        parent.style.overflow = 'visible';
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
            const defaultColor = useProperty($, 'Default Color') || Color.create(0, 0, 0, 1);
            const foregroundColor = useProperty($, 'Foreground Color') || Color.create(0, 0, 0);
            const cssProps = cssToSxProps(useProperty($, 'CSS Property'));
            const bw = parseInt(cssProps.borderWidth) || useProperty($, 'Border Width') || 0;
            return !hidden && (
                <QRCode
                    // Properties + UI
                    value={useProperty($, 'Value') || ''}
                    renderAs={useProperty($, 'Render as')}
                    size={Math.min(useProperty($, 'Height') || 0, useProperty($, 'Width') || 0) - bw * 2}
                    bgColor={defaultColor.toHexString()}
                    fgColor={foregroundColor.toHexString()}
                    level={useProperty($, 'Level')}
                    includeMargin={useProperty($, 'Include Margin')}
                    style={{
                        borderStyle: bw > 0 ? 'solid' : 'none',
                        borderWidth: bw + 'px',
                        ...ifNotTransparent('borderColor', useProperty($, 'Border Color')),
                        borderRadius: useProperty($, 'Border Radius') + 'px',
                        ...cssProps,
                    }}
                    // Events
                    onClick={() => $.trigger('On Click')}
                />
            );
        };
    }
}

registerBrick('017cdfebb7bdf5d05cea', QRCodeViewer);
