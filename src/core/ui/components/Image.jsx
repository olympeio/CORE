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

import { UIBrick, registerBrick, File, Sync } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import CardMedia from '@mui/material/CardMedia';

import { startWith, combineLatestWith } from 'rxjs/operators';

import { jsonToSxProps, cssToSxProps } from 'helpers/mui';

/**
 * Provide a Image visual component using MUI CardMedia
 */
export default class Image extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Allow overflow
        elementDom.style.overflow = 'visible';

        // Observe all properties + image with a default value
        const observeProperties = context.observeMany(
            'Image URL', 'Alternative Text', 'Image Fit', 'Horizontal Align', 'Vertical Align', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Height', 'Hidden', 'Width'
        );
        const observeImage = context.getProperty('Image').observe().pipe(startWith(null));

        // Subscribe to changes
        observeImage.pipe(combineLatestWith(observeProperties)).subscribe(([image, properties]) => {
            // Image file
            if(image && image instanceof File) {
                image.getContentUrl(url => {
                    properties[0] = url;
                    this.drawImage(context, elementDom, properties);
                });
            }

            // URL
            else if(properties[0].trim()) {
                this.drawImage(context, elementDom, properties);
            }

            // Default image
            else {
                const defaultImage = /** @type {ImageFile} */(Sync.getInstance('016eb13ba1388f7bdd71'));
                defaultImage.getContentUrl(url => {
                    properties[0] = url;
                    this.drawImage(context, elementDom, properties);
                });
            }
        });
    }

    /**
     * @private
     * @param {!UIContext} context
     * @param {!Element} elementDom
     * @param {!Array} properties
     */
    drawImage(context, elementDom, properties) {
        // Extract properties
        const [
            imageUrl, alternativeText, imageFit, horizontalAlign, verticalAlign, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, height, hidden, width
        ] = properties;

        // Detect if it's a SVG file + fill fit
        const isSvg = imageUrl.indexOf('.svg') !== -1 || imageUrl.indexOf('image/svg') !== -1;
        const isFillFit = imageFit === 'fill';

        // Create element
        let element = null;

        // SVG + Fill fit case
        if(isSvg && isFillFit) {
            element = (
                !hidden &&
                <svg
                    style={{
                        width: width,
                        height: height,
                        borderColor: borderColor.toHexString(),
                        borderRadius: borderRadius,
                        borderWidth: borderWidth,
                        borderStyle: 'solid',
                        boxSizing: 'border-box',
                        backgroundColor: defaultColor.toHexString(),
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}
                    onClick={() => context.getEvent('On Click').trigger()}
                >
                    <image
                        alt={alternativeText}
                        href={imageUrl}
                        style={{
                            width: width,
                            height: height
                        }}
                        preserveAspectRatio={'none'} // Fill fit hack for SVG
                    ></image>
                </svg>
            );
        }

        // Normal case
        else {
            element = (
                !hidden &&
                <CardMedia
                    component={'img'}
                    alt={alternativeText}
                    image={imageUrl}
                    sx={{
                        width: 1,
                        height: 1,
                        objectFit: imageFit,
                        objectPosition: `${horizontalAlign} ${verticalAlign}`,
                        borderColor: borderColor.toHexString(),
                        borderRadius: borderRadius,
                        borderWidth: borderWidth,
                        borderStyle: 'solid',
                        boxSizing: 'border-box',
                        backgroundColor: defaultColor.toHexString(),
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}
                    onClick={() => context.getEvent('On Click').trigger()}
                ></CardMedia>
            );
        }

        // Rendering
        ReactDOM.render(element, elementDom);
    }
}

registerBrick('017c9e36570153d68938', Image);