import { Brick, Cache, ErrorFlow, registerBrick } from 'olympe';
import { Observable } from "rxjs";

export default class SyncChanges extends Brick {

    // as long as SyncChanges only have one input and it's the Control Flow it doesn't need to
    // override the setup execution

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {function()} setOnSuccess
     * @param {function(number)} setTotalChanges
     * @param {function(number)} setNbCompleted
     * @param {function(*)} setError
     */
    async update($, [], [setOnSuccess, setTotalChanges, setNbCompleted, setError]) {
        const progress = /** @type {Observable<[number, number]>} */ (Cache.synchroniseChanges());
        progress.subscribe({
            next: ([nbPatches, nbSyncedPatches]) => {
                setTotalChanges(nbPatches);
                setNbCompleted(nbSyncedPatches);
            }, error: (err) => {
                setError(ErrorFlow.create(`Failed to Sync Cache with Cloud: ${err}`, 0));
            }, complete: () => {
                setOnSuccess();
            }
        });
    }
}

registerBrick('018ad1b940263620a155', SyncChanges);
