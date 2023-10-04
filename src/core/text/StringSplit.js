import { Brick, registerBrick, List, BrickContext } from 'olympe';
import {getLogger} from "logging";

export default class StringSplit extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} input
     * @param {string} pattern
     * @param {number} limit
     * @param {function(List)} setResult
     */
    update($, [input, pattern, limit], [setResult]) {
        // Check if 'input' is a valid string
        if (typeof input !== 'string') {
            throw new Error('Error: Input is not a valid string.');
        }

        // Set default values if separator and limit are not provided
        if (typeof pattern !== 'string') {
            pattern = ''; // Default to empty string if separator is not provided
        }

        if (typeof limit !== 'number') {
            limit = -1; // Default to -1 if limit is not provided
        }

        const resultArray  = input.split(pattern, limit);
        setResult(resultArray);

    }
}

registerBrick('017b348dd41b15047a35', StringSplit);
