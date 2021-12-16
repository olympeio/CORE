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

import SortList from '../../../src/core/data/list/SortList.js';
import MockSync from "../../helpers/MockSync.mjs";
import {Context} from "olympe";

describe('SortList brick', () => {
    xit('should correctly sort by a string property', () => {
        // TODO
    });

    xit('should correctly sort by a number property', () => {
        // TODO
    });

    xit('should correctly sort by a datetime property', () => {
        // TODO
    });

    xit('should correctly sort by a boolean property', () => {
        // TODO
    });

    xit('should correctly sort by a descending order', () => {
        // TODO
    });

    it('should correctly sort an array of Sync', () => {
        let vals = [ 1, 2, 3, 4, 5, 6, 7, 8];
        const tags = ['1', '2', '3', '4', '5', '6', '7', '8'];
        let list = [];
        let res = [];
        tags.forEach((v, index, a) => {
            const s = new MockSync(v);
            s.setProperty('1', vals[index]);
            list.push(s);
        });
        const brick = new SortList();
        const context = new Context();
        const setListSpy = jasmine.createSpy().and.callFake(l => {
            res = l;
        });

        brick.update(context, [list, '1', false], [setListSpy]);
        expect(res[0].getProperty('1')).toBe(8);
        expect(res[1].getProperty('1')).toBe(7);
        expect(res[4].getProperty('1')).toBe(4);
        expect(res[7].getProperty('1')).toBe(1);
        vals = ['a', 'c', 'b', 'f', 'd', 'h', 'e', 'g'];
        list = [];
        res = [];
        tags.forEach((v, index, a) => {
            const s = new MockSync(v);
            s.setProperty('1', vals[index]);
            list.push(s);
        });
        brick.update(context, [list, '1', false], [setListSpy]);
        expect(res[0].getProperty('1')).toBe('h');
        expect(res[1].getProperty('1')).toBe('g');
        expect(res[4].getProperty('1')).toBe('d');
        expect(res[7].getProperty('1')).toBe('a');

        brick.update(context, [list, '1', true], [setListSpy]);
        expect(res[0].getProperty('1')).toBe('a');
        expect(res[1].getProperty('1')).toBe('b');
        expect(res[4].getProperty('1')).toBe('e');
        expect(res[7].getProperty('1')).toBe('h');
    });

    it('should not execute if the list is not a ListDef nor an Array', () => {
        const brick = new SortList();
        const context = new Context();
        const setListSpy = jasmine.createSpy();

        brick.update(context,['Hello', '6', true], [setListSpy]);
        expect(setListSpy).not.toHaveBeenCalled();
    });
});
