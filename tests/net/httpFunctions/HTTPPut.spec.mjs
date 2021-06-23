import HTTPPut from '../../../src/core/net/httpFunctions/HTTPPut.js';
import {Context} from 'olympe';

describe('HTTPPut function brick', () => {
    it('should put correctly',  () => {
        const brick = new HTTPPut();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);

    });

    it('should generate a 405 error when putting on a post-only url',  () => {
        const brick = new HTTPPut();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, [ 'https://httpbin.org/post', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when putting on a wrong url',  () => {
        const brick = new HTTPPut();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['abcd',  '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });
});
