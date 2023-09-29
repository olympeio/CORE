import {Brick, QueryResult, registerBrick} from 'olympe';

export default class IsListEmpty extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {Array | QueryResult} list
     * @param {function(boolean)} setIsEmpty
     */
    update($, [list], [setIsEmpty]) {
        // Check if the list is null or undefined
        // Check if the list is an empty array or an empty QueryResult
        if ((Array.isArray(list) && list.length === 0) || (list instanceof QueryResult && list.size() === 0)) {
            setIsEmpty(true);
        } else {
            // If none of the above conditions are met, the list is not empty
            setIsEmpty(false);
        }
    }
}

registerBrick('018acccf1b81f83184bf', IsListEmpty);
