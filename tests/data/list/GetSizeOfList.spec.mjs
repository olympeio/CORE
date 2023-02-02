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

import GetSizeOfList from '../../../src/core/data/list/GetSizeOfList.js';
import testEqual from "../../helpers/testEqual.mjs";
import {BehaviorSubject} from 'rxjs';
import {BrickContext, ListDef} from "olympe";

describe('GetSizeOfList brick', () => {
    it('should call the observeSize method of the list', () => {
        const list = new ListDef();
        spyOn(list, "observeSize").and.returnValue(new BehaviorSubject(0));

        testEqual(new GetSizeOfList(), [list], [0]);
        expect(list.observeSize).toHaveBeenCalled();
    });

    it('should return the size of the list', () => {
        const list = new ListDef();
        spyOn(list, "observeSize").and.returnValue(new BehaviorSubject(4));

        testEqual(new GetSizeOfList(), [list], [4]);
    });

    it('should update the returned size if the list changes', () => {
        const context = new BrickContext().createChild();
        const list = new ListDef();
        const size = new BehaviorSubject(0);
        const brick = new GetSizeOfList();
        spyOn(list, "observeSize").and.returnValue(size);

        let output = null;
        const setter = jasmine.createSpy().and.callFake(value => output = value);

        brick.update(context, [list], [setter]);
        expect(output).toEqual(0);
        size.next(1);
        expect(output).toEqual(1);
        size.next(2);
        expect(output).toEqual(2);
    });

    it('should work if the list is an array', () => {
        testEqual(new GetSizeOfList(), [[0, 1, 2]], [3]);
    });

    xit('should return the size of the list', () => {
        // TODO
    });

    xit('should update the returned size if the list changes', () => {
        // TODO
    });

    xit('should work if the list is an array', () => {
        testEqual(new GetSizeOfList(), [[0, 1, 2]], [3]);
    });

    xit('should not execute if the list is not a ListDef nor an Array', () => {
        // TODO
    });
});
