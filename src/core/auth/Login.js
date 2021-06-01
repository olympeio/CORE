import {registerBrick, Context, Auth, AuthState, ErrorFlow, FunctionBrick } from 'olympe'

/**
## Description
Attempts to log in a user providing its name and password. The authentication is attempted only once when the input control flow is triggered.
## Inputs
| Name | Type | Description |
| --- | :---: | --- |
| controlFlow | Control Flow | Control flow to trigger the login process |
| username | String | The username. |
| password | String | The password for that user. |
## Outputs
| Name | Type | Description |
| --- | :---: | --- |
| On failure | Control Flow | Control flow triggered on failed authentication because of invalid credentials. |
| On success | Control Flow | Control flow triggered on successful authentication. |
| Error Flow | Error Flow | Error flow triggered when the server is unreachable or the authentication fails for unknown reasons. |
## Errors
| Code | Description |
| --- | --- |
| undefined | undefined | Server unreachable. |
| undefined | undefined | Authentication error. |
**/
export default class Login extends FunctionBrick {
  /**
   * Executed every time an input gets updated.
   * Note that this method will _not_ be executed if an input value is undefined.
   *
   * @protected
   * @param {!Context} context
   * @param {string} username
   * @param {string} password
   * @param {function()} onSuccess
   * @param {function(ErrorFlow)} dispatchErrorFlow
   * @param {function()} onFailure
   */
  onUpdate(context, [username, password], [onSuccess, dispatchErrorFlow, onFailure]) {

    Auth.loginSRP(username, password)
        .then( () => {
          const currentState = Auth.getState()
          switch (currentState) {
            case AuthState.AUTHENTICATED:
                onSuccess();
                break;
            case AuthState.GUEST:
                // Invalid credentials
                onFailure();
                break;
            case AuthState.ERROR:
                // Authentication error
                dispatchErrorFlow(ErrorFlow.create('Authentication error',2));
                break;
            case AuthState.DISCONNECTED:
                // Server unreachable
                dispatchErrorFlow(ErrorFlow.create('The server is unreachable', 1));
                break;
            default:
          }
        })
        .catch( () => {
            dispatchErrorFlow(ErrorFlow.create('Authentication error',2));
        })
  }

    /**
     * @override
     */
    configCoreUpdate(context, runCoreUpdate, clear) {
        const [incomingFlow, incomingUser, incomingPassword] = this.getDefinition().getCurrentInputsSorted();

        // Listen on `user` and 'password' input updates. Null or undefined value will be considered as empty strings.
        let username, password = '';

        this.onInputValue(incomingUser, context, (inputValue) => {
            if (inputValue === undefined || inputValue === null) {
                username = '';
            } else {
                username = inputValue
            }
        });

        this.onInputValue(incomingPassword, context, (inputValue) => {
            if (inputValue === undefined || inputValue === null) {
                password = '';
            } else {
                password = inputValue
            }
        });

        // Run runCoreUpdate only when incoming flow is triggered.
        this.onInputValue(incomingFlow, context, (timestamp) => {
            if (timestamp) {
                // Execute the action only if the control flow has a value.
                runCoreUpdate([username, password]);
            } else {
                clear();
            }
        });
    }
}

registerBrick('0163d01778b931d801dd', Login)
