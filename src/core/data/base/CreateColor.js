import { FunctionBrick, registerBrick, Context, Color } from 'olympe';

/**
## Description
Creates a color based on the 3 RGB values provided.
Each value has to be in the 0 - 255 range.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| red | Number | Value for the red channel. |
| green | Number | Value for the green channel. |
| blue | Number | Value for the blue channel. |
| alpha | Number | Value for the alpha channel. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| color | Color | The created color. |
**/
export default class CreateColor extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} a
     * @param {function(!Color)} setResult
     */
    onUpdate(context, [r, g, b, a], [setResult]) {
        r = Math.min(255, Math.max(0, r));
        b = Math.min(255, Math.max(0, b));
        g = Math.min(255, Math.max(0, g));

        const c = Color.create(r, g, b, a);
        setResult(c);
    }
}

registerBrick('01633eb5bdb4e94f82d1', CreateColor);
