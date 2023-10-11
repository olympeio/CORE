import { ActionBrick, registerBrick, ListDef, CloudObject, BrickContext, tagToString, Transaction, QueryResult } from 'olympe';
import {getLogger} from "logging";

export default class DeleteListOfObjects extends ActionBrick {
    

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {Array<CloudObject> | ListDef | QueryResult} list
     * @param {function()} forwardEvent
     */
    update(context, [list], [forwardEvent]) {
        const logger = getLogger('Delete List');
        const isCorrectList = checkList(list);
        if (!isCorrectList) {
            throw new Error('Input provided is not a ListDef, an Array or a QueryResult');
        }

        const transaction = Transaction.from(context);
        const deleteInstance = (objectIn) => {
            if (tagToString(objectIn) !== '') {
                transaction.delete(objectIn);
            } else {
                logger.error('Cannot delete object ' + objectIn);
            }
        }

        const execute = () => {
            Transaction.process(context, transaction).then(() => {
                forwardEvent();
            }).catch((message) => {
                logger.error(`Could not execute transaction. ${message}`);
            });
        };

        performOperation(list, deleteInstance, execute);
    }
}

const performOperation = (list, operation, execute) => {
    if (Array.isArray(list) || list instanceof QueryResult) {
        list.forEach(operation);
        execute();
    } else {
        list.onReady(() => {
            list.forEachCurrentValue(operation);
            execute();
        });
    }
};

const checkList = (list) => {
    const isListDef = list instanceof ListDef;
    const isQueryResult = list instanceof QueryResult;
    return Array.isArray(list) || isListDef || isQueryResult;
};

registerBrick('017d22d3f9193248714d', DeleteListOfObjects);
