import { ActionBrick, registerBrick } from 'olympe';

/**
## Description
Create an empty JavaScript Array.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| List | List | The created list. |
**/
export default class CreateList extends ActionBrick {

    /**
     * Executed every time the brick receives a new trigger event.
     * Note that the method will be executed _even if_ an input () is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {!Array} inputs
     * @param {function()} forwardEvent
     * @param {function(Array)} setList
     */
    onUpdate(context, inputs, [forwardEvent, setList]) {
        setList([]);
        forwardEvent();
    }
}

registerBrick('017a1e1270d9a8e557a9', CreateList);
