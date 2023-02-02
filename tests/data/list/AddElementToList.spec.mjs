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

import AddElementToListFunction from '../../../src/core/data/list/AddElementToListFunction.js';
import AddElementToListAction from '../../../src/core/data/list/AddElementToListAction.js';
import {BrickContext} from "olympe";

// TODO function and action version of the brick to be tested

describe('AddElementToList bricks', () => {
    xit('should add a Sync to a ListDef', () => {
        // TODO
    });

    it('should add an object to an Array', () => {
        const list = [1, 2, 3, 4, 5];
        const brick = new AddElementToListFunction();
        const context = new BrickContext().createChild();
        const setListSpy = jasmine.createSpy();

        brick.update(context, [list, 6], [setListSpy]);

        expect(setListSpy).toHaveBeenCalledOnceWith([1, 2, 3, 4, 5, 6]);

        const aBrick = new AddElementToListAction();
        const forwardEventSpy = jasmine.createSpy();
        setListSpy.calls.reset();
        aBrick.update(context, [list, 6], [forwardEventSpy, setListSpy]);
        expect(setListSpy).toHaveBeenCalledOnceWith([1, 2, 3, 4, 5, 6]);
        expect(forwardEventSpy).toHaveBeenCalled();
    });

    it('should not execute if the list is not a ListDef nor an Array', () => {
        const brick = new AddElementToListFunction();
        const context = new BrickContext().createChild();
        const setListSpy = jasmine.createSpy();

        brick.update(context,['Hello', 6], [setListSpy]);
        expect(setListSpy).not.toHaveBeenCalled();
        const aBrick = new AddElementToListAction();
        const forwardEventSpy = jasmine.createSpy();
        setListSpy.calls.reset();
        aBrick.update(context, ['Hello', 6], [forwardEventSpy, setListSpy]);
        expect(setListSpy).not.toHaveBeenCalled();
        expect(forwardEventSpy).not.toHaveBeenCalled();
    });

    xit('should not execute if we add a non-Sync object to a ListDef', () => {
        // TODO
    });
});
