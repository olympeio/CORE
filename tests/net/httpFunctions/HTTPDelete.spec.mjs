import HTTPDelete from "../../../src/core/net/httpFunctions/HTTPDelete.js";
import {Context} from 'olympe';

describe('HTTPDelete function brick', () => {
    it('should delete correctly',  () => {
        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(200));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/delete', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);

    });

    it('should generate a 405 error when deleting on a put-only url',  () => {
        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(405));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['https://httpbin.org/put', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });

    it('should generate a 404 error when deleting on a wrong url',  () => {
        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        outputs.push(_statusCode => expect(_statusCode).toEqual(404));
        outputs.push(_setBody => expect(_setBody).not.toBeNull());
        outputs.push(_setHeaders => expect(_setHeaders).not.toBeNull());

        brick.onUpdate(context, ['abcd', '{"test": "payload"}', '{"Content-Type": "application/json"}'], outputs);
    });
});
