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

import { VisualBrick } from 'olympe';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

/**
 * Specialized version of VisualBrick for React.
 */
export class ReactBrick extends VisualBrick {

    /**
     * @override
     */
    updateParent(parent, element) {
        ReactDOM.render(element, parent);
        return () => { ReactDOM.unmountComponentAtNode(parent); };
    }

    /**
     * @override
     */
    render($, properties) {
        const Component = this.constructor.getReactComponent($);
        return (<Component values={properties} />);
    }

    /**
     * @static
     * @param {!BrickContext} $
     * @return {function():ReactElement}
     */
    static getReactComponent($) {
        return () => (<p>ReactBrick: <code>getReactComponent()</code> not implemented.</p>);
    }
}

/**
 * Allows to bind a context property to a stateful react value.
 *
 * @param {!BrickContext} $
 * @param {string} property
 * @param {boolean=} [waitForValue=true]
 * @return {*} a stateful value usable in JSX
 */
export function useProperty($, property, waitForValue = true) {
    const [value, setValue] = useState();
    useEffect(() => {
        const subscription = $.observe(property, waitForValue).subscribe(setValue);
        return () => { subscription.unsubscribe(); };
    }, []);
    return value;
}