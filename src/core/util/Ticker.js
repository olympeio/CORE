import { FunctionBrick, registerBrick } from 'olympe';

/**
## Description
Triggers the output control-flow at every specified interval.
It is also controlled by an on/off switch.

## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| Interval | Number | The interval in milliseconds. |
| On/Off | Boolean | `true` to activate the ticker, `false` to turn it off. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| Control Flow | Control Flow | The output control-flow. |
**/
export default class Ticker extends FunctionBrick {

    /**
     * The label used as key to save the interval id
     *
     * @return {string}
     */
    static get interval() { return 'INTERVAL'; }

    /**
     * @protected
     * @param {!Context} context
     * @param {number} interval
     * @param {boolean} onOff
     * @param {function(number)} triggerEvent
     */
    onUpdate(context, [interval, onOff], [triggerEvent]) {
        // Clear potential previous timeout
        let intervalID = context.get(Ticker.interval);
        intervalID && clearInterval(intervalID);

        if (onOff) {
            intervalID = setInterval(() => triggerEvent(Date.now()), interval);
            context.set(Ticker.interval, intervalID);
        }
    }

    /**
     * @override
     */
    onDestroy(context) {
        const intervalID = context.get(Ticker.interval);
        intervalID && clearInterval(intervalID);
    }
}

registerBrick('01632af2ee63ea368184', Ticker);
