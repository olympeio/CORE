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

        let noDataTimeout;
        // Observe the list size to re-trigger an update if necessary
        const observeList = $.observe('Data', false);
        const observeListAsArray = observeList.pipe(switchMap((list) => {
            // Set no data warning message in development mode.
            if (list === null && $.get(GlobalProperties.EDITION, true)) {
                noDataTimeout = setTimeout(() => getLogger('List component').warn('Data property of List has not been set after 5s.'), 5000);
                return of([]);
            }

            noDataTimeout && clearTimeout(noDataTimeout); // Cancel warning
            noDataTimeout = null;
            let sizeObservable;
            if (Array.isArray(list)) {
                sizeObservable = of(list.length);
            } else if (list instanceof QueryResult) {
                sizeObservable = of(list.size());
            } else if (list instanceof ListDef) {
                sizeObservable = list.observeSize();
            } else {
                getLogger('List component').warn('Data property of List is not a List, Array or QueryResult.');
                return of([]);
            }
            return sizeObservable.pipe(
                combineLatestWith($.observe('Reverse')),
                map(([_, reverse]) => {
                    let elements = [];
                    // Array case
                    if (Array.isArray(list)) {
                        elements = !reverse ? list : list.reverse();
                    }
                    // QueryResult case
                    else if (list instanceof QueryResult) {
                        elements = !reverse ? list.toArray() : list.toArray().reverse();
                    }
                    // ListDef case
                    else {
                        list.forEachCurrentValue((value) => {
                            elements.push(value);
                        });
                        elements = reverse ? elements.reverse() : elements;
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
        const data = $.get('Data');

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
                {((data !== null && renderer) || !$.get(GlobalProperties.EDITION, true))
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
                                        // Create renderer: first create the child and run it
                                        const renderer$ = $.runner(renderer);

                                        // Repeat the item size (we need to set the parent also to have a correct layout)
                                        renderer$.repeat('Height', observeItemHeight);
                                        renderer$.repeat('Width', observeItemWidth);

                                        renderer$.observe('Width').subscribe(width => {
                                            el.style.width = `${width}px`;
                                        });

                                        renderer$.observe('Height').subscribe(height => {
                                            el.style.height = `${height}px`;
                                        });

                                        // Finally set the item and its rank so that we know that when it gets a value, we can consume
                                        // it and potentially override the "width" or "height" properties (custom size of renderer)
                                        renderer$.set('Current Item', item)
                                            .set('Current Rank', rank)
                                            .set('Current List', data)
                                            .setParentElement(el);

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
