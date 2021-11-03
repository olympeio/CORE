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
import {UIBrick, registerBrick} from 'olympe';
import {cssToSxProps} from 'helpers/mui';
import ReactDOM from 'react-dom';
import React from 'react';
import QRCode from 'qrcode.react';
import {css} from "@emotion/react";

/**
 * Provide a visual component that generates a QR code using qrcode.react
 */
export default class QRCodeViewer extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Allow overflow
        elementDom.style.overflow = 'visible';
        elementDom.style.display = 'flex';
        elementDom.style.alignItems = 'center';
        elementDom.style.justifyContent = 'center';

        // Observe all properties
        context.observeMany(
            'Value', 'Render as', 'Level', 'Include Margin', 'Hidden', 'Height', 'Width',
            'Default Color', 'Foreground Color', 'Border Color', 'Border Radius', 'Border Width', 'CSS Property'
        ).subscribe(([
            value, renderAs, level, includeMargin, hidden, height, width, defaultColor, foregroundColor,
            borderColor, borderRadius, borderWidth, cssProperty
        ]) => {
            const cssProps = cssToSxProps(cssProperty);
            const bw = parseInt(cssProps.borderWidth) || borderWidth;

            // Rendering
            ReactDOM.render((
                !hidden &&
                <QRCode
                    // Properties + UI
                    value={value}
                    renderAs={renderAs}
                    size={Math.min(height, width) - bw*2}
                    bgColor={defaultColor.toHexString()}
                    fgColor={foregroundColor.toHexString()}
                    level={level}
                    includeMargin={includeMargin}
                    style={{
                            borderStyle: bw > 0 ? 'solid' : 'none',
                            borderWidth: bw + 'px',
                            borderColor: borderColor.toHexString(),
                            borderRadius: borderRadius + 'px',
                            ...cssProps,
                    }}
                    // Events
                    onClick={() => context.getEvent('On Click').trigger()}
                />
            ), elementDom);
        });
    }
}

registerBrick('017cdfebb7bdf5d05cea', QRCodeViewer);
