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

import FilterListEquals from "../../../src/core/data/list/FilterListEquals.js";
import MockSync from "../../helpers/MockSync.mjs";
import {Context} from "olympe";

describe('FilterListEquals brick', () => {

    it('should correctly filter an array of Sync', () => {
        let vals = [ 1, 2, 3, 1, 2, 3, 1, 2];
        const tags = ['1', '2', '3', '4', '5', '6', '7', '8'];
        let list = [];
        let res = [];
        tags.forEach((v, index, a) => {
            const s = new MockSync(v);
            s.setProperty('1', vals[index]);
            list.push(s);
        });
        const brick = new FilterListEquals();
        const context = new Context();
        const setListSpy = jasmine.createSpy().and.callFake(l => {
            res = l;
        });

        brick.update(context, [list, '1', 2, false], [setListSpy]);
        expect(res.length).toBe(3);
        brick.update(context, [list, '1', 2, true], [setListSpy]);
        expect(res.length).toBe(5);

        vals = [ '1', '2', '3', '1', '2', '3', '1', '2'];
        list = [];
        res = [];
        tags.forEach((v, index, a) => {
            const s = new MockSync(v);
            s.setProperty('1', vals[index]);
            list.push(s);
        });
        brick.update(context, [list, '1', '2', false], [setListSpy]);
        expect(res.length).toBe(3);
        brick.update(context, [list, '1', '2', true], [setListSpy]);
        expect(res.length).toBe(5);

    });

    it('should not execute if the list is not a ListDef or an Array', () => {
        const brick = new FilterListEquals();
        const context = new Context();
        const setListSpy = jasmine.createSpy();

        brick.update(context,['Hello', '1', 'o'], [setListSpy]);
        expect(setListSpy).not.toHaveBeenCalled();
    });
});
