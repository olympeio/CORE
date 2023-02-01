
import { Brick, registerBrick, BrickContext } from 'olympe';
import {NavigationManager, parseCurrentHash} from 'helpers/navigation';

export default class GetNavigationState extends Brick {

    /**
     * @protected
     * @param {!BrickContext} context
     * @param {!Array} inputs
     * @param {function(string)} setState
     */
    update(context, inputs, [setState]) {
        const navigationMgr = NavigationManager.get();
        setState(parseCurrentHash());
        const cbId = navigationMgr.onOnHashChange(() => setState(parseCurrentHash()));
        context.onClear(() => navigationMgr.offOnHashChange(cbId));
    }
}

registerBrick('017aeda30452a1965bc7', GetNavigationState);
