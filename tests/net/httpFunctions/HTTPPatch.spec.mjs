import HTTPPatch from '../../../src/core/net/httpFunctions/HTTPPatch.js';
import {Context} from 'olympe';

describe('HTTPPatch function brick', () => {
    it('should patch correctly',  () => {
        const brick = new HTTPPatch();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_body => expect(_body).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/patch', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);

    });

    it('should generate a 405 error when patching on a put-only url',  () => {
        const brick = new HTTPPatch();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_body => expect(_body).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when patching on a wrong url',  () => {
        const brick = new HTTPPatch();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_body => expect(_body).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['abcd', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });
});
