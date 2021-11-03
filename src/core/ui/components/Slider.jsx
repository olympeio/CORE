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

import { UIBrick, registerBrick } from 'olympe';

import React from 'react';
import ReactDOM from 'react-dom';

import MUISlider from '@mui/material/Slider';

import { jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent } from 'helpers/mui';

/**
 * Provide a Slider visual component using MUI Slider
 */
export default class Slider extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Change draw div display to center the slider
        elementDom.style.display = 'flex';
        elementDom.style.alignItems = 'center';
        elementDom.style.justifyContent = 'center';

        // Allow overflow
        elementDom.style.overflow = 'visible';

        // Observe all properties
        context.observeMany(
            'Value 1', 'Value 2', 'Min', 'Max', 'Step', 'Disabled', 'Use Range', 'Range Behavior', 'Range Min Distance', 'Enable Marks', 'Orientation', 'Color', 'Color Override', 'Size', 'Track', 'Label Display', 'MUI sx [json]',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Default Color', 'Hidden', 'Tab Index'
        ).subscribe(([
            value1, value2, min, max, step, disabled, useRange, rangeBehavior, rangeMinDistance, enableMarks, orientation, color, colorOverride, size, track, labelDisplay, muiSxJson,
            borderColor, borderRadius, borderWidth, cssProperty, defaultColor, hidden, tabIndex
        ]) => {
            // Handle range slider
            const muiValue = useRange ? [value1, value2] : value1;

            // Rendering
            ReactDOM.render(!hidden && (
                <MUISlider
                    // Properties
                    value={muiValue}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    disableSwap={rangeBehavior !== 'allow-swap'}
                    marks={enableMarks}
                    orientation={orientation}
                    color={color}
                    size={size}
                    track={track === 'no-track' ? false : track}
                    valueLabelDisplay={labelDisplay}
                    tabIndex={tabIndex}

                    // Events
                    onClick={() => context.getEvent('On Click').trigger()}
                    onChangeCommitted={() => context.getEvent('On Change Committed').trigger()}
                    onChange={(_, value, thumb) => {
                        let newValue1 = value1;
                        let newValue2 = value2;

                        // Unique value slider
                        if(!useRange) {
                            newValue1 = value;
                        }

                        // Range slider
                        //  (behavior algo: https://mui.com/components/slider/#minimum-distance)
                        else {
                            switch(rangeBehavior) {
                                case 'allow-swap':
                                    newValue1 = value[0];
                                    newValue2 = value[1];
                                    break;

                                case 'min-distance-block':
                                    if (thumb === 0) {
                                        newValue1 = Math.min(value[0], value2 - rangeMinDistance);
                                    } else {
                                        newValue2 = Math.max(value[1], value1 + rangeMinDistance);
                                    }
                                    break;

                                case 'min-distance-shift':
                                    if (value[1] - value[0] < rangeMinDistance) {
                                        if (thumb === 0) {
                                            newValue1 = Math.min(value[0], max - rangeMinDistance);
                                            newValue2 = newValue1 + rangeMinDistance;
                                        } else {
                                            newValue2 = Math.max(value[1], min + rangeMinDistance);
                                            newValue1 = newValue2 - rangeMinDistance;
                                        }
                                    } else {
                                        newValue1 = value[0];
                                        newValue2 = value[1];
                                    }
                                    break;

                                default:
                                    break;
                            }
                        }

                        // Update
                        if(value1 !== newValue1 || value2 !== newValue2) {
                            context.getProperty('Value 1').set(newValue1);
                            context.getProperty('Value 2').set(newValue2);
                            context.getEvent('On Change').trigger();
                        }
                    }}

                    // UI
                    sx={{
                        borderWidth: borderWidth,
                        borderRadius: borderRadius,
                        ...ifNotNull('borderStyle', 'solid', borderWidth > 0),
                        ...ifNotTransparent('borderColor', borderColor),
                        ...ifNotTransparent('color', colorOverride),
                        ...ifNotTransparent('backgroundColor', defaultColor),
                        ...cssToSxProps(cssProperty),
                        ...jsonToSxProps(muiSxJson)
                    }}
                ></MUISlider>
            ), elementDom);
        });
    }
}

registerBrick('017ccc0836d9bfb1e46f', Slider);
