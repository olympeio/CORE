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

import GetParameter from "../../src/core/system/GetParameter.js";
import {Config, BrickContext} from "olympe";

describe("GetParameter brick", function() {

    it("Should return the expected values", function() {
        const params = new Map([
            ['number', 10],
            ['bool', true],
            ['string', 'foo']
        ]);
        spyOn(Config,'getParameter').and.callFake((k) => {
            const ret = params.get(k);
            return ret || null;
        });
        const setVal = jasmine.createSpy();
        const brick = new GetParameter();

        brick.update(new BrickContext().createChild(),['number'],[setVal]);
        expect(setVal).toHaveBeenCalledOnceWith(10);
        expect(Config.getParameter).toHaveBeenCalledOnceWith('number');

        setVal.calls.reset();
        Config.getParameter.calls.reset();

        brick.update(new BrickContext().createChild(),['bool'],[setVal]);
        expect(setVal).toHaveBeenCalledOnceWith(true);
        expect(Config.getParameter).toHaveBeenCalledOnceWith('bool');
        setVal.calls.reset();
        Config.getParameter.calls.reset();

        brick.update(new BrickContext().createChild(),['string'],[setVal]);
        expect(setVal).toHaveBeenCalledOnceWith('foo');
        expect(Config.getParameter).toHaveBeenCalledOnceWith('string');
        setVal.calls.reset();
        Config.getParameter.calls.reset();

        brick.update(new BrickContext().createChild(),['foo.bar'],[setVal]);
        expect(setVal).toHaveBeenCalledOnceWith(null);
        expect(Config.getParameter).toHaveBeenCalledOnceWith('foo.bar');
    });
});
