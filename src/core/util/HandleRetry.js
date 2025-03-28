import { Brick, registerBrick, BrickContext, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';
import StartRetry from './StartRetry';
import { merge, map } from 'rxjs';

export default class HandleRetry extends Brick {

    /**
     * Error codes
     */
    static NO_ACTIVE_RETRY_ERROR_CODE = 1;


    /**
     * @override
     */
    setupExecution($) {
        // 0 is the control flow
        // 1 is the error flow
        // 2 is the retry for code input (handled in the update() method)
        const [ctrlFlowInput, errorFlowInput] = this.getInputs();
        return merge(
            ...[ctrlFlowInput, errorFlowInput].map((inputTag, index) => {
                const isErrorInput = index === 1; // input 0 is the control flow, input 1 is the error flow
                // observe the input
                return (
                    $.observe(inputTag, true)
                        // ensure error input is of Error type
                        .pipe(map((value) => (isErrorInput && !(value instanceof Error) ? new Error(value) : value)))
                );
            })
        );
    }

    /**
     * @override
     * @protected
     * @param {BrickContext} $
     * @param {*} incomingEvent
     * @param {function(): void} forwardEvent
     * @param {function(ErrorFlow): void} setFailedErrorFlow
     */
    update($, [incomingEvent], [forwardEvent, setFailedErrorFlow]) {
        const logger = getLogger('Retry');
        const parent$ = $.getParent();
        const retryForCode = $.get(this.getInputs()[2]);

        // Guards
        if (parent$.get(StartRetry.RetryContextKey) === null) {
            logger.error(
                'No active retry in progress in the same scope, did you forget to use a "Start Retry" brick before this "Handle Retry" brick ?'
            );
            setFailedErrorFlow(ErrorFlow.create('No active retry', HandleRetry.NO_START_RETRY_ERROR_CODE));
            return;
        }

        // Helper
        const shouldRetryErrorCode = (error) => {
            // If no error code is provided, retry for any error
            if (retryForCode === null || retryForCode === undefined || retryForCode === '') {
                return true;
            }
            if (error instanceof ErrorFlow && typeof retryForCode === 'string') {
                return retryForCode.split(',').map(c => parseInt(c, 10)).includes(error.getCode());
            }
            return false;
        };

        // Handle the success or error
        const retry = parent$.get(StartRetry.RetryContextKey);
        if (incomingEvent instanceof Error) {
            if (!shouldRetryErrorCode(incomingEvent)) {
                retry.complete();
                setFailedErrorFlow(incomingEvent);
            } else if (retry.shouldRetry()) {
                logger.debug('Caught the', incomingEvent.message, 'error, retrying...');
                retry.retry();
            } else {
                retry.complete();
                logger.error('All attempts failed, forwarding the latest error:', incomingEvent.message);
                setFailedErrorFlow(incomingEvent);
            }
        } else {
            logger.debug('Success, no need to retry');
            retry.complete();
            forwardEvent();
        }
    }
}

registerBrick('01915a2c7e516ff295f3', HandleRetry);
