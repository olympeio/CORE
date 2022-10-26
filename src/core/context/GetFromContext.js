import { Brick, registerBrick, BrickContext } from 'olympe';

export default class GetFromContext extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} key
     * @param {*} context
     * @param {function(*)} setValue
     */
    update($, [context, key], [setValue]) {
        if (context instanceof BrickContext) {
            const sub = context.observe(key, false, true).subscribe(setValue);
            $.onClear(() => sub.unsubscribe());
        }
    }
}

registerBrick('01833b2d211c06d24c64', GetFromContext);
