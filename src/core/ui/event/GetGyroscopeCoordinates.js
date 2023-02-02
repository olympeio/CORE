import { Brick, registerBrick } from 'olympe';

export default class GetGyroscopeCoordinates extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {number} trigger
     * @param {function(number)} setAlpha
     * @param {function(number)} setBeta
     * @param {function(number)} setGamma
     * @param {function(number)} setAccelerationX
     * @param {function(number)} setAccelerationY
     * @param {function(number)} setAccelerationZ
     */
    update($, [trigger], [setAlpha, setBeta, setGamma, setAccelerationX, setAccelerationY, setAccelerationZ]) {
        //initialise to 0 before the sensor sends any data
        setAlpha(0);
        setBeta(0);
        setGamma(0);
        setAccelerationX(0);
        setAccelerationY(0);
        setAccelerationZ(0);


        // feature detect
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceMotionEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener('devicemotion', (event) => {
                            setAccelerationX(event.accelerationIncludingGravity.x);
                            setAccelerationY(event.accelerationIncludingGravity.y);
                            setAccelerationZ(event.accelerationIncludingGravity.z);
                        });
                    }
                })
                .catch(console.error);
        } else {
            // handle regular non iOS 13+ devices
            window.addEventListener('devicemotion', (event) => {
                setAccelerationX(event.accelerationIncludingGravity.x);
                setAccelerationY(event.accelerationIncludingGravity.y);
                setAccelerationZ(event.accelerationIncludingGravity.z);
            });
        }

        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener('deviceorientation', (event) => {
                            setAlpha(event.alpha);
                            setBeta(event.beta);
                            setGamma(event.gamma);
                        });
                    }
                })
                .catch(console.error);
        } else {
            // handle regular non iOS 13+ devices
            window.addEventListener('deviceorientation', (event) => {
                setAlpha(event.alpha);
                setBeta(event.beta);
                setGamma(event.gamma);
            });
        }
    }
}

registerBrick('01860d82085ba1872dc0', GetGyroscopeCoordinates);
