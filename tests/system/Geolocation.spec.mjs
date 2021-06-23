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

import GetGeolocation from '../../src/core/system/GetGeolocation.js';
import {Context} from "olympe";

describe("Geolocation brick", function() {

    it("Should call all the setters with the mocked values", function() {

        spyOn(navigator.geolocation,"getCurrentPosition").and.callFake(function() {
            const position = { coords: { longitude: -96,latitude: 5, altitude: 1500 } };
            arguments[0](position);
        });

        const setLongitude = jasmine.createSpy();
        const setLatitude = jasmine.createSpy();
        const setAltitude = jasmine.createSpy();

        const geo = new GetGeolocation();
        geo.onUpdate(new Context(),[],[setLongitude,setLatitude,setAltitude]);

        expect(setLongitude).toHaveBeenCalledOnceWith(-96);
        expect(setLatitude).toHaveBeenCalledOnceWith(5);
        expect(setAltitude).toHaveBeenCalledOnceWith(1500);

    });
});
