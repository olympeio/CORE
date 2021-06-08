
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Gets the absolute position of the mouse.
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| x | Number | The x coordinate. |
| y | Number | The y coordinate. |

**/
export default class GetMouseCoordinates extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {function(number)} setX
     * @param {function(number)} setY
     */
    onUpdate(context, inputs, [setX, setY]) {
        const mouseTracking = event => {
            setX(event.clientX);
            setY(event.clientY);
        }
        context.set('mouseTrackingFunction', mouseTracking);

        document.addEventListener('mousemove', mouseTracking);
    }

    /**
     * @protected
     * @param {!Context} context
     */
    onDestroy(context) {
        super.onDestroy(context);
        document.removeEventListener('mousemove', context.get('mouseTrackingFunction'));
    }
}

registerBrick('0169ed4b78d2b7e1faa5', GetMouseCoordinates);
