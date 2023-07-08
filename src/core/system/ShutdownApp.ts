import { Brick, BrickContext, registerBrick } from 'olympe';
import {getLogger} from "logging";

export default class ShutdownApp extends Brick {

    /**
     * @override
     */
    update($: BrickContext, inputs: [], outputs: []) {
        // Plan the kill of this process.
        return Promise.resolve().then(() => {
            getLogger('ShutdownApp').info('Service app manually killed');
            process.kill(process.pid, 'SIGTERM');
        });
    }
}

registerBrick('0189317b9c6b081a41e4', ShutdownApp);
