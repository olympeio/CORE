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

import { registerBrick, File, CloudObject } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { jsonToSxProps, cssToSxProps, ifNotTransparent, ifNotNull } from 'helpers/mui';

import React from 'react';
import CardMedia from '@mui/material/CardMedia';

import { switchMap } from 'rxjs/operators';
import { of, from, combineLatest } from "rxjs";

/**
 * Provide a Image visual component using MUI CardMedia
 */
export default class Image extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        const imageUrl = combineLatest([$.observe('Image', false), $.observe('Image URL', false)]).pipe(
            switchMap(([image, url]) => {
                // Image file
                if(image && image instanceof File) {
                    return from(new Promise((resolve, reject) => {
                        image.getContentUrl(_url => {
                            resolve(_url);
                        }, reject);
                    }));
                }

                // URL
                else if(url && url.trim()) {
                    return of(url);
                }

                // Default image
                else {
                    return from(new Promise((resolve, reject) => {
                        const defaultImage = /** @type {File} */(CloudObject.get('016eb13ba1388f7bdd71'));
                        defaultImage.getContentUrl(_url => {
                            resolve(_url);
                        }, reject);
                    }));
                }
            })
        );
        return combineLatest([$.observe('Hidden'), imageUrl]);
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
            const [hidden, imageUrl] = props.values;
            const alternativeText = useProperty($, 'Alternative Text');
            const imageFit = useProperty($, 'Image Fit');
            const horizontalAlign = useProperty($, 'Horizontal Align');
            const verticalAlign = useProperty($, 'Vertical Align');
            const muiSxJson = useProperty($, 'MUI sx [json]');
            const borderColor = useProperty($, 'Border Color');
            const borderRadius = useProperty($, 'Border Radius');
            const borderWidth = useProperty($, 'Border Width');
            const cssProperty = useProperty($, 'CSS Property');
            const defaultColor = useProperty($, 'Default Color');
            const height = useProperty($, 'Height');
            const width = useProperty($, 'Width');

            // Detect if it's a SVG file + fill fit
            const isSvg = imageUrl.indexOf('.svg') !== -1 || imageUrl.indexOf('image/svg') !== -1;
            const isFillFit = imageFit === 'fill';

            // SVG + Fill fit case
            if(isSvg && isFillFit) {
                return !hidden && (
                    <svg
                        style={{
                            width: width,
                            height: height,
                            ...ifNotTransparent('borderColor', borderColor),
                            ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                            borderWidth: borderWidth,
                            borderStyle: 'solid',
                            boxSizing: 'border-box',
                            ...ifNotTransparent('backgroundColor', defaultColor),
                            ...cssToSxProps(cssProperty),
                            ...jsonToSxProps(muiSxJson)
                        }}
                        onClick={() => $.trigger('On Click')}
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
                return !hidden && (
                    <CardMedia
                        component={'img'}
                        alt={alternativeText}
                        image={imageUrl}
                        sx={{
                            width: 1,
                            height: 1,
                            objectFit: imageFit,
                            objectPosition: `${horizontalAlign} ${verticalAlign}`,
                            ...ifNotTransparent('borderColor', borderColor),
                            ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                            borderWidth: borderWidth,
                            borderStyle: 'solid',
                            boxSizing: 'border-box',
                            ...ifNotTransparent('backgroundColor', defaultColor),
                            ...cssToSxProps(cssProperty),
                            ...jsonToSxProps(muiSxJson)
                        }}
                        onClick={() => $.trigger('On Click')}
                    ></CardMedia>
                );
            }
        };
    }
}

registerBrick('017c9e36570153d68938', Image);
