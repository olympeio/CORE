/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {ActionBrick, instanceToTag, ListDef, registerBrick, Sync} from 'olympe';
import {addElementToList} from "./AddElementToListFunction";

/**
## Description
Adds en element to a list. If no list is provided, it is created.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list in which the element will be added. |
| Object | Object | The element to add. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The result list, with the added element. |
 **/
export default class AddElementToListAction extends ActionBrick {

    /**
     * Executed every time the brick receives a new trigger event.
     * Note that the method will be executed _even if_ an input (list, object) is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {!ListDef|!Array} inputList
     * @param {!Sync|!Object} object
     * @param {function()} forwardEvent
     * @param {function(!ListDef|!Array)} setList
     */
    onUpdate(context, [inputList, object], [forwardEvent, setList]) {
        setList(addElementToList(inputList || [], object));
        forwardEvent();
    }
}

registerBrick('0179c7fea60380c20ff4', AddElementToListAction);
