import { Brick, registerBrick, BrickContext } from 'olympe';

export default class URLParamsToMap extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} uRLParams
     * @param {function()} forwardEvent
     * @param {function(Map)} setParamsMap
     */
    update($, [uRLParams], [forwardEvent, setParamsMap]) {
        // Guards
        if(typeof uRLParams !== 'string') {
            throw new Error('TypeError: the URL params input should be of type String');
        }

        const regex = /([^&=]+)=([^&=]+)&?/g;
        let res;
        const paramsMap = new Map();
        while ((res = regex.exec(uRLParams)) !== null) {
            const [_, key, value] = res;
            paramsMap.set(key, decodeURIComponent(value));
        }
        setParamsMap(paramsMap);
        forwardEvent();
    }
}

registerBrick('01814224f51c5d3647ee', URLParamsToMap);

