import { FunctionBrick, registerBrick, Auth } from 'olympe';

export default class GetUserToken extends FunctionBrick {

    /**
     * Executed every time an input () gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {Context} context
     * @param {!Array} inputs
     * @param {function(string)} setToken
     */
    onUpdate(context, inputs, [setToken]) {
        setToken(Auth.getToken());
    }
}

registerBrick('017a34a31064c3fc1dee', GetUserToken);
