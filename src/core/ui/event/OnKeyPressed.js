import { Brick, registerBrick } from 'olympe';

export default class OnKeyPressed extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {string} key
     * @param {boolean} ctrlKey
     * @param {boolean} metaKey
     * @param {boolean} altKey
     * @param {boolean} shiftKey
     * @param {boolean} ctrlKey
     * @param {function(*)} setControlFlow
     */
    update($, [key, ctrlKey, metaKey, altKey, shiftKey], [setControlFlow]) {

        const exists = $.get('event-already-added') ?? false;
        if(exists === false) {
            document.addEventListener("keydown", (event) => {
                if (event.key === key
                    && event.ctrlKey === ctrlKey
                    && event.metaKey === metaKey
                    && event.altKey === altKey
                    && event.shiftKey === shiftKey)
                {
                    event.preventDefault();
                    setControlFlow(Date.now());
                }
            });
            $.set('event-already-added', true);
        }
    }
}

registerBrick('018ff1bda452dbac0041', OnKeyPressed);
