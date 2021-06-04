
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
This function creates 3 data-flows from the geo-location of the device.
This is updated in real time, but can require a permission check with the user.
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| longitude | Number | The longitude. |
| latitude | Number | The latitude. |
| altitude | Number | The altitude. |

**/
export default class Geolocation extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {function(number)} setLongitude
     * @param {function(number)} setLatitude
     * @param {function(number)} setAltitude
     */
    onUpdate(context, _, [setLongitude, setLatitude, setAltitude]) {

        // Check if the geolocation is accessible
        if(!navigator.geolocation) {
            console.error('Cannot access geolocation data. Please make sure you allowed the geolocation feature for this page.');
        } else {
            navigator.geolocation.getCurrentPosition(position=> {
                setLongitude(position.coords.longitude);
                setLatitude(position.coords.latitude);
                setAltitude(position.coords.altitude);
            }, error => {
                console.error(error);
            });
        }
    }
}

registerBrick('0162d8ec885fdf7a6b69', Geolocation);
