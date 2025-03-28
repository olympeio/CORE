import { Brick, registerBrick, ErrorFlow } from 'olympe';
import { addElementToList } from './AddToListFunction';

export default class AddToList extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {ListDef} source
     * @param {*} newObject
     * @param {function()} forwardEvent
     * @param {function(ListDef|Array)} setResult
     * @param {function(*)} setErrorFlow
     */
    update($, [source, newObject], [forwardEvent, setResult, setErrorFlow]) {
        addElementToList(source || [], newObject, (newList, errorMessage) => {
            if (newList !== null) {
                setResult(newList);
                forwardEvent();
            } else {
                setErrorFlow(ErrorFlow.create(errorMessage, 1));
            }
        });
    }
}

registerBrick('017fcfbd64e6222bf79f', AddToList);
