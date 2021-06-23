import {FunctionBrick, registerBrick} from 'olympe';
import {fromBase64, binaryToString} from 'helpers/binaryConverters';
import {getLogger} from "../../helpers/logging";

export default class Base64Decoder extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} input
     * @param {string} encoding
     * @param {function(string)} output
     */
    onUpdate(context, [input, encoding], [output]) {
        const logger = getLogger('Base 64 Decoder');
        try {
            let decoded = '';
            switch (encoding.toLowerCase()) {
                case 'binary' :
                case 'bin' :
                    const bytes = new Uint8Array(fromBase64(input));
                    for (let i = 0, l = bytes.byteLength; i < l; i++) {
                        decoded += String.fromCodePoint(bytes[i]);
                    }
                    break;
                case 'utf-8' :
                case 'utf8' :
                default:
                    decoded = binaryToString(fromBase64(input));
            }
            output(decoded);
        } catch (e) {
            logger.error(e);
        }
    }
}

registerBrick('016cb933f367c3d1db7a', Base64Decoder);
