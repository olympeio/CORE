import { Brick, registerBrick, BrickContext, File as OFile } from 'olympe';
import { getLogger } from 'logging';

export default class GetBinarySize extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!ArrayBuffer | !DataView | !OFile | string} binary
     * @param {function()} forwardEvent
     * @param {function(number)} setSize
     */
    async update($, [binary], [forwardEvent, setSize]) {
        const logger = getLogger('GetBinarySize');

        const terminate = (size) => {
            setSize(size);
            forwardEvent();
        }

        if (binary instanceof ArrayBuffer || binary instanceof DataView) {
            terminate(binary.byteLength);
        } else if (typeof binary === 'string') {
            terminate(binary.length); // Consider that string a binary string
        } else if (binary instanceof OFile) {
            try {
                const content = await binary.getContentAsBinary();
                terminate(content.byteLength);
            } catch (error) {
                logger.error(`Failed to retrive the binary size of the given file: ${binary.getTag()}`);
                terminate(0);
            }
        } else {
            logger.error('Try to get the size of a binary with a not supported object. Supported once are ArrayBuffer, DataView (eg: Uint8Array), File or binary strings.');
            terminate(0);
        }
    }
}

registerBrick('01882360578725c2593d', GetBinarySize);
