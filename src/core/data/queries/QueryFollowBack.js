import { Brick, registerBrick } from 'olympe';
import {getLogger} from 'logging';

export default class QueryFollowBack extends Brick {

    /**
     * @protected
     * @param {!BrickContext} $
     * @param {!Query} query
     * @param {number} hops
     * @param {function(*)} setQuery
     */
    update($, [query, hops], [setQuery]) {
        if (typeof hops !== 'number' || hops <= 0) {
            getLogger('Query Follow Back').warn('Hop 0 or less does not apply any change on the query, this query backtrack was ignored');
            setQuery(query);
        } else {
            setQuery(query.back(hops));
        }
    }
}
registerBrick('018692d782d42ae24a1f', QueryFollowBack);
