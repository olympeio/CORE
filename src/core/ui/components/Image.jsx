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

import { jsonToSxProps } from '../../../helpers/web/mui';

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
        // Observe all properties + image with a default value
        const defaultImage = /** @type {ImageFile} */(Sync.getInstance('016eb13ba1388f7bdd71'));
        const observeProperties = context.observeMany('Alternative Text', 'Image Fit', 'Horizontal Align', 'Vertical Align', 'Width', 'Height', 'MUI sx [json]');
        const observeImage = context.getProperty('Image').observe().pipe(startWith(defaultImage));

        // Subscribe to changes
        observeImage.pipe(combineLatestWith(observeProperties))
            .subscribe(([image, [alternativeText, imageFit, horizontalAlign, verticalAlign, width, height, muiSxJson]]) => {
                // Guard: not an image
                if(!image || !(image instanceof File))
                    return;

                // Get image URL
                image.getContentUrl(url => {
                    // Detect if it's a SVG file + fill fit
                    const isSvg = url.indexOf('.svg') !== -1 || url.indexOf('image/svg') !== -1;
                    const isFillFit = imageFit === 'fill';

                    // Create element
                    let element = null;

                    // SVG + Fill fit case
                    if(isSvg && isFillFit) {
                        const svgStyle = { width: width, height: height };
                        element = (
                            <svg style={svgStyle}>
                                <image
                                    alt={alternativeText}
                                    href={url}
                                    style={svgStyle}
                                    preserveAspectRatio={'none'} // Fill fit hack for SVG
                                ></image>
                            </svg>
                        );
                    }

                    // Normal case
                    else {
                        element = (
                            <CardMedia
                                component={'img'}
                                alt={alternativeText}
                                image={url}
                                sx={{
                                    width: 1,
                                    height: 1,
                                    objectFit: imageFit,
                                    objectPosition: `${horizontalAlign} ${verticalAlign}`,
                                    ...jsonToSxProps(muiSxJson)
                                }}
                            ></CardMedia>
                        );
                    }

                    // Rendering
                    ReactDOM.render(element, elementDom);
                });
            });
    }
}

registerBrick('017c9e36570153d68938', Image);
