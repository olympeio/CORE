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

import { VisualBrick, registerBrick, QueryResult, ListDef, GlobalProperties } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { combineLatestWith, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { jsonToSxProps, cssToSxProps, ifNotTransparent, ifNotNull } from 'helpers/mui';
import {getLogger} from "logging";

/**
 * Provide a "List Renderer" visual component using MUI
 */
export default class List extends VisualBrick {

    /**
     * @override
     * @param {!BrickContext} $
     * @return {!Observable}
     */
    setupExecution($) {
        // List of properties to observe normally
        const properties = [
            'Orientation', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden'
        ];

        // Observe the list size to re-trigger an update if necessary
        const observeList = $.observe('Data', false);
        const observeListAsArray = observeList.pipe(switchMap(list => {
            let sizeObservable;
            if (Array.isArray(list)) {
                sizeObservable = of(list.length);
            } else if (list instanceof QueryResult) {
                sizeObservable = of(list.size());
            } else if (list instanceof ListDef) {
                sizeObservable = list.observeSize();
            } else {
                getLogger('List component').warn('No data list has been set (maybe you set a query or nothing?)');
                sizeObservable = of(0);
            }
            return sizeObservable.pipe(
                combineLatestWith($.observe('Reverse')),
                map(([size, reverse]) => {
                    let elements = [];
                    if(size > 0) {
                        // Array case
                        if(Array.isArray(list)) {
                            elements = !reverse ? list : list.reverse();
                        }

                        // QueryResult case
                        else if(list instanceof QueryResult) {
                            elements = !reverse ? list.toArray() : list.toArray().reverse();
                        }

                        // ListDef case
                        else {
                            list.forEachCurrentValue((value, key) => {
                                elements.push({
                                    value: value,
                                    rank: list.getCurrentRank(key)
                                });
                            });
                            if(!reverse) {
                                elements = elements.sort((a, b) => a.rank - b.rank);
                            } else {
                                elements = elements.sort((a, b) => b.rank - a.rank);
                            }
                            elements = elements.map(e => e.value);
                        }
                    }
                    return elements;
                })
            );
        }));

        // Final observable
        return $.observe('Item Renderer', false).pipe(
            combineLatestWith(observeListAsArray),
            combineLatestWith(properties.map(p => $.observe(p)))
        );
    }

    /**
     * @override
     * @param {!Element} parent
     * @param {!Element} element
     * @return {function()}
     */
    updateParent(parent, element) {
        parent.style.overflow = 'visible';
        ReactDOM.render(element, parent);
        return () => ReactDOM.unmountComponentAtNode(parent);
    }

    /**
     * @override
     * @param {!BrickContext} $
     * @param {!Array} properties
     * @return {Element}
     */
    render($, properties) {
        // List properties
        const [
            [renderer, elements], orientation, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, hidden
        ] = properties;

        // Item position and size
        const observeItemSize = $.observe('Item Width or Height');
        const observeItemWidth = orientation === 'vertical'
            ? $.observe('Width').pipe(map(width => width - 2 * borderWidth))
            : observeItemSize;
        const observeItemHeight = orientation === 'vertical'
            ? observeItemSize
            : $.observe('Height').pipe(map(height => height - 2 * borderWidth));
        const observeItemPosition = rank => $.observe('Spacing').pipe(map(spacing => rank * spacing));

        // Element
        return !hidden && (
            <Box
                sx={{
                    // Full width and height
                    width: 1,
                    height: 1,

                    // Scroll
                    overflow: 'auto',

                    // Horizontal orientation
                    ...ifNotNull('whiteSpace', 'nowrap', orientation === 'horizontal'),

                    // Border and background
                    ...ifNotTransparent('borderColor', borderColor),
                    ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                    ...ifNotNull('borderWidth', `${borderWidth}px`, borderWidth),
                    ...ifNotTransparent('borderStyle', 'solid', borderColor),
                    ...ifNotTransparent('backgroundColor', defaultColor),
                    ...ifNotNull('boxSizing', 'border-box', borderWidth),

                    // Additional
                    ...cssToSxProps(cssProperty),
                    ...jsonToSxProps(muiSxJson)
                }}
            >
                {(($.get('Data') && renderer) || !$.get(GlobalProperties.EDITION, true))
                    // Only render if there is a list and a renderer, OR if we are not in draw
                    ? elements.map((item, rank) => {
                        return (
                            <Box
                                key={rank}
                                sx={{
                                    position: 'relative',

                                    // Horizontal orientation
                                    ...ifNotNull('display', 'inline-block', orientation === 'horizontal'),
                                }}

                                // Item rendering
                                ref={el => {
                                    if(el && renderer) {
                                        // Create renderer
                                        const renderer$ = $.runner(renderer)
                                            .set('Current Item', item)
                                            .set('Current Rank', rank)
                                            .set('Current List', $.get('Data'))
                                            .setParentElement(el);

                                        // Item size (we need to set the parent also to have a correct layout)
                                        observeItemWidth.subscribe(width => {
                                            renderer$.set('Width', width);
                                            el.style.width = `${width}px`;
                                        });
                                        observeItemHeight.subscribe(height => {
                                            renderer$.set('Height', height);
                                            el.style.height = `${height}px`;
                                        });

                                        // Item position (offset in this case)
                                        observeItemPosition(rank).subscribe(position => {
                                            if(orientation === 'vertical') {
                                                el.style.top = `${position}px`;
                                            } else {
                                                el.style.left = `${position}px`;
                                            }
                                        });
                                    }
                                }}
                            ></Box>
                        );
                    })

                    // No list or renderer
                    : (
                        <Box sx={{ backgroundColor: 'lightgrey', width: 1, height: 1, overflow: 'hidden' }}>
                            <Typography sx={{ color: 'black', padding: 1 }}>
                                <b>List</b><br/>
                                The following properties have to be defined for the component to render:<br/>
                                - <code>Data</code><br/>
                                - <code>Item Renderer</code>
                            </Typography>
                        </Box>
                    )}
            </Box>
        );
    }
}

registerBrick('017d7af225e6b07f0408', List);
