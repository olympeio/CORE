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

import GetSizeOfList from '../../../src/core/data/list/GetSizeOfList.js';
import testEqual from "../../helpers/testEqual.mjs";
import {BehaviorSubject} from 'rxjs';
import {Context, ListDef} from "olympe";

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
        const context = new Context();
        const list = new ListDef();
        const size = new BehaviorSubject(0);
        const brick = new GetSizeOfList();
        spyOn(list, "observeSize").and.returnValue(size);

        let output = null;
        const setter = jasmine.createSpy().and.callFake(value => output = value);

        brick.onUpdate(context, [list], [setter]);
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
