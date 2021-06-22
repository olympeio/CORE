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
