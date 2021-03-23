
import { FunctionBrick, registerBrick, Context } from 'olympe';

/**
## Description
Returns a number indicating whether the reference string s2 comes before, after, or is equivalent to s1 string in sort order, ignoring the case
Use localeCompare js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
## Inputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | s1 | String | The first string |
 | s2 | String | The second string |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| s1.localeCompare(s2) | Number | -1 if s1 < s2, 0 if s1 == s2, 1 if s1 > s2, ignoring case. |
**/
export default class CompareStringsIgnoreCase extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Context} context
     * @param {string} s1
     * @param {string} s2
     * @param {function(number)} setResult
     */
    onUpdate(context, [s1, s2], [setResult]) {
        setResult(s1.toLocaleLowerCase().localeCompare(s2.toLocaleLowerCase()));
    }
}

registerBrick('01717c91b5f57d8e871b', CompareStringsIgnoreCase);

