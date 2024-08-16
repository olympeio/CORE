import { ActionBrick, BrickContext, registerBrick, ErrorFlow } from 'olympe';
import { getLogger } from 'logging';

export default class StartRetry extends ActionBrick {

    /**
     * Name of the context key used to store the active retry object.
     */
    static RetryContextKey = '__retry';

    /**
     * Error codes
     */
    static CONCURRENCY_ERROR_CODE = 1;
    static TIMEOUT_ERROR_CODE = 2;
    static INVALID_INPUTS_ERROR_CODE = 3;

    /**
     * @override
     * @protected
     * @param {BrickContext} $
     * @param {string} retryIntervals
     * @param {number} timeout
     * @param {function(): void} forwardEvent
     * @param {function(number): void} setRetryCount
     * @param {function(ErrorFlow): void} setErrorFlow
     */
    update($, [retryIntervals, timeout], [forwardEvent, setRetryCount, setErrorFlow]) {
        const logger = getLogger('Retry');
        const parent$ = $.getParent();

        // Guards
        if (parent$.get(StartRetry.RetryContextKey) !== null) {
            logger.error(
                'Another retry is already in progress in the same scope, concurrency is not supported. Avoid triggering multiple retries in parallel.'
            );
            setErrorFlow(ErrorFlow.create('Concurrent retries are not allowed', StartRetry.CONCURRENCY_ERROR_CODE));
            return;
        }

        if (!retryIntervals.match(/^[0-9,]*$/)) {
            logger.error(
                'Invalid retry intervals format, you must provide a comma separated list of integers, got:',
                retryIntervals
            );
            setErrorFlow(ErrorFlow.create('Invalid inputs', StartRetry.INVALID_INPUTS_ERROR_CODE));
            return;
        }

        if (typeof timeout !== 'number' || timeout <= 0) {
            logger.error('Invalid timeout, must be a postive number');
            setErrorFlow(ErrorFlow.create('Invalid inputs', StartRetry.INVALID_INPUTS_ERROR_CODE));
            return;
        }

        // Format inputs
        const retryIntervalsArray = retryIntervals.split(',').map((interval) => parseInt(interval));
        logger.debug('Initiate retry with intervals', retryIntervalsArray);

        // Retry logic
        let count = 1;
        let noHandlingTimeout;

        // If no handling occurs within the timeout, we should consider that the retry is badly implemented
        const initNoHandlingTimeout = () => {
            noHandlingTimeout = setTimeout(() => {
                logger.error(
                    `No handling occurred within the ${timeout} seconds timeout, did you forget to use a "Handle Retry" brick after the "Start Retry" ?`
                );
                setErrorFlow(ErrorFlow.create('No handling timeout', StartRetry.TIMEOUT_ERROR_CODE));
            }, timeout * 1000);
        };

        // Preparing an object to represent the active retry. The "Handle Retry" brick will be able to call
        // - shouldRetry() to know if there are still "unused" intervals
        // - retry() to trigger the next retry
        // - complete() to indicate that the action will not be retried, either due to a successful attempt or all retries failed
        const retry = {
            shouldRetry: () => count <= retryIntervalsArray.length,
            retry: () => {
                clearTimeout(noHandlingTimeout);
                const interval = retryIntervalsArray[count - 1];
                logger.debug(`Will retry in ${interval} seconds`);
                setTimeout(() => {
                    count++;
                    setRetryCount(count);
                    initNoHandlingTimeout();
                    logger.debug(`Triggering a retry`);
                    forwardEvent();
                }, interval * 1000);
            },
            complete: () => {
                clearTimeout(noHandlingTimeout);
                parent$(StartRetry.RetryContextKey, null);
            },
        };

        // Initiate the first "try"
        logger.debug('Trigger the first attempt');
        parent$.set(StartRetry.RetryContextKey, retry);
        initNoHandlingTimeout();
        setRetryCount(count);
        forwardEvent();
    }
}

registerBrick('01915a2c6ac7c2575f31', StartRetry);
