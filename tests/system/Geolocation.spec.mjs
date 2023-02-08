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

import GetGeolocation from '../../src/core/system/GetGeolocation.js';
import {BrickContext} from "olympe";

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
        geo.update(new BrickContext().createChild(),[],[setLongitude,setLatitude,setAltitude]);

        expect(setLongitude).toHaveBeenCalledOnceWith(-96);
        expect(setLatitude).toHaveBeenCalledOnceWith(5);
        expect(setAltitude).toHaveBeenCalledOnceWith(1500);

    });
});
