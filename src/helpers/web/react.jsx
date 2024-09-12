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

import { VisualBrick, BrickContext, CloudObject, Transaction } from 'olympe';

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
     * @return {function(!Object=):ReactElement}
     */
    static getReactComponent($) {
        return () => (<p>ReactBrick: <code>getReactComponent()</code> not implemented.</p>);
    }
}

/**
 * Allows to bind a context property to a stateful react value.
 * 
 * Warning: the implementation of `useProperty` will change to match this of `useProp` in a future major version
 * 
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
        return () => {subscription.unsubscribe(); };
    }, []);
    return value;
}


/**
 * Allows to bind a context property to a stateful react value.
 * Provides a setter to update the property accordingly
 * 
 * Warning: will replace `useProperty` in a future major version
 *
 * @beta
 * @param {BrickContext} $
 * @param {string} property
 * @param {*=} initialValue
 * @return {Array} a stateful value usable in JSX
 */
export function useProp($, property, initialValue) {
    const [value, setValue] = useState($.get(property) ?? initialValue);
    useEffect(() => {
        const subscription = $.observe(property, true).subscribe(setValue);
        return () => {subscription.unsubscribe(); };
    }, []);
    const setter = (newValue) => {
        $.set(property, newValue);
    };
    return [value, setter];
}

/**
 * Allows to bind a context or object property to a stateful react value.
 * Provides a setter to update the property accordingly
 * 
 * Be aware that using the provided setter to update the property should be used for occasional updates only since
 * it will perform a micro-transaction. Using it for large volumes of update is unrecommended and may lead to performance
 * issues. 
 * 
 * If you need to update multiple values at once consider doing a grouped transaction instead.
 * If you need to frequently update a value consider debouncing the setter.
 *
 * @param {BrickContext} $
 * @param {string} property
 * @param {CloudObject} cloudObject
 * @param {*=} initialValue
 * @return {Array} a stateful value usable in JSX
 */
export function useObjectProperty($, cloudObject, property, initialValue) {
    const [value, setValue] = useState(cloudObject.get(property) ?? initialValue);
    useEffect(() => {
        const subscription = cloudObject.observe($, property, true).subscribe(setValue);
        return () => {subscription.unsubscribe(); };
    }, []);
    const setter = (newValue) => {
        const transaction = new Transaction();
        transaction.update(cloudObject, property, newValue);
        transaction.execute().catch((e) => console.warn(`failed to update property: ${e}`));
    };
    return [value, setter];
}
