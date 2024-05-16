import {Brick, registerBrick, BrickContext} from 'olympe';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

export default class Switch8 extends Brick {
    /**
     * @override
     */
    setupExecution($: BrickContext) {
        const inputs = this.getInputs();
        return combineLatest(...inputs.map((i) => $.observe(i, false))).pipe(map(() => inputs.map((i) => $.get(i))));
    }

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Object} comparator
     * @param {Object} case1
     * @param {Object} value1
     * @param {Object} case2
     * @param {Object} value2
     * @param {Object} case3
     * @param {Object} value3
     * @param {Object} case4
     * @param {Object} value4
     * @param {Object} case5
     * @param {Object} value5
     * @param {Object} case6
     * @param {Object} value6
     * @param {Object} case7
     * @param {Object} value7
     * @param {Object} case8
     * @param {Object} value8
     * @param {Object} defaults
     * @param {function(Object)} setReturn
     */
    update(
        $: BrickContext,
        [comparator, case1, value1, case2, value2, case3, value3, case4, value4, case5, value5, case6, value6, case7, value7, case8, value8, defaults]: [
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any,
            any
        ],
        [setReturn]: [(param: any) => void]
    ) {
        let result;
        switch (comparator) {
            case case1:
                result = value1;
                break;
            case case2:
                result = value2;
                break;
            case case3:
                result = value3;
                break;
            case case4:
                result = value4;
                break;
            case case5:
                result = value5;
                break;
            case case6:
                result = value6;
                break;
            case case7:
                result = value7;
                break;
            case case8:
                result = value8;
                break;
            default:
                result = defaults;
        }

        setReturn(result);
    }
}

registerBrick('018f7de0dbb9e5f84201', Switch8);
