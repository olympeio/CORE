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
import { jsonToSxProps, cssToSxProps, ifNotNull, ifNotTransparent, useMUITheme, colorExists, validateVariant } from 'helpers/mui';
import { ThemeProvider } from '@mui/material/styles';

import React from 'react';
import MUISlider from '@mui/material/Slider';

/**
 * Provide a Slider visual component using MUI Slider
 */
export default class Slider extends ReactBrick {

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
        // Change draw div display to center the slider
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
            const theme = useMUITheme($);
            const useRange = useProperty($, 'Use Range');
            const value1 = useProperty($, 'Value 1') || 0;
            const value2 = useProperty($, 'Value 2') || 0;
            const min = useProperty($, 'Min');
            const max = useProperty($, 'Max');
            const rangeBehavior = useProperty($, 'Range Behavior');
            const track = useProperty($, 'Track');
            const rangeMinDistance = useProperty($, 'Range Min Distance');
            const borderWidth = useProperty($, 'Border Width');
            const borderRadius = useProperty($, 'Border Radius');
            const color = useProperty($, 'Color');
            const size = useProperty($, 'Size');
            const orientation = useProperty($, 'Orientation');
            const sliderSizeVariants = ['small', 'medium'];
            const sliderOrientationVariants = ['horizontal', 'vertical'];

            // Handle range slider
            const muiValue = useRange ? [value1, value2] : value1;

            return !hidden && (
                <ThemeProvider theme={theme}><MUISlider
                    // Properties
                    value={muiValue}
                    min={min}
                    max={max}
                    step={useProperty($, 'Step')}
                    disabled={useProperty($, 'Disabled')}
                    disableSwap={rangeBehavior !== 'allow-swap'}
                    marks={useProperty($, 'Enable Marks')}
                    orientation={validateVariant(orientation, 'Orientation', 'Slider', sliderOrientationVariants)}
                    color={colorExists(theme, color, 'Slider') ? color : 'primary'}
                    size={validateVariant(size, 'Size', 'Slider', sliderSizeVariants)}
                    track={track === 'no-track' ? false : track}
                    valueLabelDisplay={useProperty($, 'Label Display')}
                    tabIndex={useProperty($, 'Tab Index')}

                    // Events
                    onClick={() => $.trigger('On Click')}
                    onChangeCommitted={() => $.trigger('On Change Committed')}
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
                            $.set('Value 1', newValue1);
                            $.set('Value 2', newValue2);
                            $.trigger('On Change');
                        }
                    }}

                    // UI
                    sx={{
                        borderWidth: borderWidth,
                        ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                        ...ifNotNull('borderStyle', 'solid', borderWidth > 0),
                        ...ifNotTransparent('borderColor', useProperty($, 'Border Color')),
                        ...ifNotTransparent('color', useProperty($, 'Color Override')),
                        ...ifNotTransparent('backgroundColor', useProperty($, 'Default Color')),
                        ...cssToSxProps(useProperty($, 'CSS Property')),
                        ...jsonToSxProps(useProperty($, 'MUI sx [json]'))
                    }}
                ></MUISlider></ThemeProvider>
            );
        };
    }
}

registerBrick('017ccc0836d9bfb1e46f', Slider);
