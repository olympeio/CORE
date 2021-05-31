
import { FunctionBrick, registerBrick, Context, ObjectRef, Filter, Contains, StringProperty, Constant  } from 'olympe';

/**
## Description
This function filters out a list to generate a list that will contain objects from the original only when their
the value of the specified string property contains the specified string.
**Example:** All the customers who's first name contains 'John'.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The list to filter. |
| Property | Property | The property to test. |
| Substring | String | The string to look for. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The resulting list. |

**/
export default class FilterListContains extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} context
     * @param {!Array} inputs
     * @param {!Array} outputs
     */
    onUpdate(context, inputs, outputs) {
        // Your code goes here
        let property = inputs['Property'];
        let objectsList = inputs['Object list'];
        let substring = inputs['Substring'];
        let setFilteredList = outputs['Filtered list'];


        const propertyTag = ObjectRef.getReferredTag(property);
        const resultContains = objectsList.transform(
            new Filter(
                new Contains(
                    new StringProperty(propertyTag),
                    new Constant(substring)
                )
            )
        );
        setFilteredList(resultContains);




    }
}

registerBrick('01673ff7ce3169f42a81', FilterListContains);
