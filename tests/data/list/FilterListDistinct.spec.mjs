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

import FilterListDistinct from '../../../src/core/data/list/FilterListDistinct.js';
import testResults from '../../helpers/testResults.mjs';
import {Context, ListDef} from 'olympe';
import MockSync from "../../helpers/MockSync.mjs";

describe('FilterListDistinct brick', () => {

    it('should return an array of unique elements', () => {
        let vals = [ 1, 2, 3, 4, 5, 6, 7, 8];
        const tags = ['1', '2', '1', '4', '5', '1', '7', '8'];
        const list = [];
        let res = [];
        tags.forEach((v, index, a) => {
            const s = new MockSync(v);
            s.setProperty('1', vals[index]);
            list.push(s);
        });
        const brick = new FilterListDistinct();
        const context = new Context();
        const setListSpy = jasmine.createSpy().and.callFake(l => {
            res = l;
        });

        brick.update(context, [list], [setListSpy]);

        expect(setListSpy).toHaveBeenCalled();
        expect(res.length).toBe(6);
    });

    xit('should do return 1 element out of 2 identical', () => {
        // TODO
    });
});
