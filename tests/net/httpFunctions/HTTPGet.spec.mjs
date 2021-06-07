import HTTPGet from '../../../src/core/net/httpFunctions/HTTPGet.js';
import {Context} from 'olympe';

describe('HTTPGet function brick', () => {
    it('should get correctly',  () => {
        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());
        outputs.push(_statusCode => expect(_statusCode).toEqual(200));

        brick.onUpdate(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);

    });

    it('should generate a 405 error when getting on a put-only url',  () => {
        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());
        outputs.push(_statusCode => expect(_statusCode).toEqual(405));

        brick.onUpdate(context, ['https://httpbin.org/put', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when getting on a wrong url',  () => {
        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());
        outputs.push(_statusCode => expect(_statusCode).toEqual(404));

        brick.onUpdate(context, ['abcd', '{"Content-Type": "application/json"}'], outputs);
    });
});
