import { ActionBrick, registerBrick, BrickContext } from 'olympe';

/*
 Hardcoded part of implementation used in the soft-coded brick SetNavigationRoute
*/
export default class SetNavigationRouteImpl extends ActionBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} _$
     * @param {string} state
     * @param {string} key
     * @param {string} value
     * @param {function()} forwardEvent
     * @param {function(string)} setState
     */
    update(_$, [state, key, value], [forwardEvent, setState]) {
        const keys = key.split(';');
        const values = value.split(';');

        // Get all pairs from the navigation state and filter out the pairs to change
        const pairs = state.split(';')
            .map(substate => substate.split('='))
            .filter(pair => pair.length === 2)
            .filter(([pairKey]) => pairKey !== '' && !keys.includes(pairKey));

        // Add the new pairs
        values.forEach((_value, i) => {
            if (_value) {
                pairs.push([keys[i], _value]);
            }
        });

        // Recreate the navigation state
        const newState = pairs.map(([pairKey, pairValue]) => `${pairKey}=${pairValue}`).join(';');

        // Done if state has changed
        if (newState !== state) {
            setState(newState);
            forwardEvent();
        }
    }
}

registerBrick('01882312a4028afaa989', SetNavigationRouteImpl);
