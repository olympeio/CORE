import { Brick, registerBrick, BrickContext } from 'olympe';

/*
 Hardcoded part of implementation used in the soft-coded brick GetNavigationRoute
*/
export default class GetNavigationRouteImpl extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} _$
     * @param {string} state
     * @param {string} key
     * @param {string} defaultValue
     * @param {function(string)} setValue
     */
    update(_$, [state, key, defaultValue], [setValue]) {
        const keyValuePairs = state.split(';')
            .map(substate => substate.split('='))
            .filter(([key, value]) => key && value);

        const pair = keyValuePairs.find(([pairKey]) => pairKey === key);
        setValue(pair ? pair[1] : defaultValue);
    }
}

registerBrick('01882310f642c1b2f2d6', GetNavigationRouteImpl);
