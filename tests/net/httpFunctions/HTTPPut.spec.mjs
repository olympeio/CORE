import HTTPPut from '../../../src/core/net/httpFunctions/HTTPPut.js';
import {Context} from 'olympe';

describe('HTTPPut function brick', () => {
    it('should put correctly',  () => {
        const brick = new HTTPPut();

        const context = new Context();
        const outputs = [];

        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());
        outputs.push(_statusCode => expect(_statusCode).toEqual(200));

        brick.onUpdate(context, ['{"Content-Type": "application/json"}', '{"test": "payload"}', 'https://httpbin.org/put'], outputs);

    });

    it('should generate a 405 error when putting on a post-only url',  () => {
        const brick = new HTTPPut();

        const context = new Context();
        const outputs = [];

        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());
        outputs.push(_statusCode => expect(_statusCode).toEqual(405));

        brick.onUpdate(context, ['{"Content-Type": "application/json"}', '{"test": "payload"}', 'https://httpbin.org/post'], outputs);
    });

    it('should generate a 404 error when putting on a wrong url',  () => {
        const brick = new HTTPPut();

        const context = new Context();
        const outputs = [];

        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());
        outputs.push(_statusCode => expect(_statusCode).toEqual(404));

        brick.onUpdate(context, ['{"Content-Type": "application/json"}', '{"test": "payload"}', 'abcd'], outputs);
    });
});
