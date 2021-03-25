import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Use string length js property.See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| s | String | The string |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s.length | Number | Length of provided string |
**/
export default class LengthOfString extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {function(number)} setLength
     */
    onUpdate(context, [s], [setLength]) {
        setLength(s.length);
    }
}

registerBrick('01717c67d5d487aa3ac4', LengthOfString);
