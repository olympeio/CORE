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

import FilterListBigger from '../../../src/core/data/list/FilterListBigger.js';
import {BrickContext} from "olympe";
import MockSync from "../../helpers/MockSync.mjs";

// TODO function and action version of the brick to be tested

describe('FilterListBigger brick', () => {
    xit('should filter a ListDef', () => {
        // TODO
    });

    it('should filter an Array', () => {
        let vals = [ 1, 2, 3, 4, 5, 6, 7, 8];
        const tags = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const list = [];
        let res = [];
        tags.forEach((v, index, a) => {
            const s = new MockSync(v);
            s.setProperty('1', vals[index]);
            list.push(s);
        });
        const brick = new FilterListBigger();
        const context = new BrickContext().createChild();
        const setListSpy = jasmine.createSpy().and.callFake(l => {
            res = l;
        });

        brick.update(context, [list, '1', 6, false], [setListSpy]);

        expect(setListSpy).toHaveBeenCalled();
        expect(res.length).toBe(3);
        brick.update(context, [list, '1', 6, true], [setListSpy]);
        expect(res.length).toBe(2);
    });

    it('should not execute if the list is not a ListDef nor an Array', () => {
        const brick = new FilterListBigger();
        const context = new BrickContext().createChild();
        const setListSpy = jasmine.createSpy();

        brick.update(context,['Hello', 6], [setListSpy]);
        expect(setListSpy).not.toHaveBeenCalled();
    });

    xit('should not execute if we add a non-Sync object to a ListDef', () => {
        // TODO
    });
});
