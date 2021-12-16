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

import { FunctionBrick, registerBrick } from 'olympe';

import React from 'react';

import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';

/**
 * Create a transition object that can be used by MUI component
 */
export default class CustomizeAlertDialog extends FunctionBrick {

    /**
     * Executed every time an input (type, direction, enterEasing, exitEasing, enterTimeout, exitTimeout) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {boolean} fullWidth
     * @param {string} maxWidth
     * @param {string} scroll
     * @param {string} transitionType
     * @param {string} transitionDirection
     * @param {string} transitionEasing
     * @param {string} transitionTimeout
     * @param {string} transitionExitEasing
     * @param {String} transitionExitTimeout
     * @param {function(Object)} setCustomization
     */
     update(context, [fullWidth, maxWidth, scroll, transitionType, transitionDirection, transitionEasing, transitionTimeout, transitionExitEasing, transitionExitTimeout], [setCustomization]) {
        // Customization object
        const customization = {
            fullWidth: fullWidth,
            maxWidth: maxWidth,
            scroll: scroll,
            transition: createTransitionObject(transitionType, transitionDirection, transitionEasing, transitionTimeout, transitionExitEasing, transitionExitTimeout)
        };

        setCustomization(customization);
    }
}

registerBrick('017cdfc8be25238c71ee', CustomizeAlertDialog);

/**
 * @param {string} transitionType
 * @param {string} transitionDirection
 * @param {string} transitionEasing
 * @param {string} transitionTimeout
 * @param {string} transitionExitEasing
 * @param {string} transitionExitTimeout
 * @return {Object}
 */
export function createTransitionObject(transitionType, transitionDirection, transitionEasing, transitionTimeout, transitionExitEasing, transitionExitTimeout) {
    // Transition object
    const transition = {
        type: transitionType
    };

    // Transition direction/orientation
    if(transitionType === 'collapse') {
        const orientation = transitionDirection === 'up' || transitionDirection === 'down' ? 'vertical' : 'horizontal';
        transition['orientation'] = orientation;
    }
    else if(transitionType === 'slide') {
        transition['direction'] = transitionDirection;
    }

    // Transition easing
    if(transitionEasing !== 'none' && transitionExitEasing !== 'none') {
        transition['easing'] = {
            enter: transitionEasing,
            exit: transitionExitEasing
        };
    }
    else if(transitionEasing !== 'none') {
        transition['easing'] = transitionEasing;
    }

    // Transition timeout
    if(transitionTimeout !== 'default' && transitionExitTimeout !== 'default') {
        transition['timeout'] = {
            enter: Number.parseInt(transitionTimeout),
            exit: Number.parseInt(transitionExitTimeout)
        };
    }
    else if(transitionTimeout !== 'default') {
        transition['timeout'] = Number.parseInt(transitionTimeout);
    }

    return transition;
}

/**
 * Create a MUI Transition component from a transition object
 * @param {Object} transition
 * @return {*}
 */
export function createTransitionElement(transition) {
    const easing = transition.easing ? { easing: transition.easing } : {};
    const timeout = transition.timeout ? { timeout: transition.timeout } : {};
    return React.forwardRef((props, ref) => {
        if(transition.type === 'collapse') {
            return (<Collapse ref={ref} orientation={transition.orientation} {...easing} {...timeout} {...props}></Collapse>);
        }
        if(transition.type === 'fade') {
            return (<Fade ref={ref} {...easing} {...timeout} {...props}></Fade>);
        }
        if(transition.type === 'grow') {
            return (<Grow ref={ref} {...easing} {...timeout} {...props}></Grow>);
        }
        if(transition.type === 'slide') {
            return (<Slide ref={ref} direction={transition.direction} {...easing} {...timeout} {...props}></Slide>);
        }
        if(transition.type === 'zoom') {
            return (<Zoom ref={ref} {...easing} {...timeout} {...props}></Zoom>);
        }
    });
}