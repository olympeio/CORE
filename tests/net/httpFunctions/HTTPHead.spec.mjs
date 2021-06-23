import HTTPHead from '../../../src/core/net/httpFunctions/HTTPHead.js';
import {Context} from 'olympe';

describe('HTTPHead function brick', () => {
    it('should head correctly',  () => {
        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);

    });

    it('should generate a 405 error when heading on a put-only url',  () => {
        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/put', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when heading on a wrong url',  () => {
        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['abcd', '{"Content-Type": "application/json"}'], outputs);
    });
});
