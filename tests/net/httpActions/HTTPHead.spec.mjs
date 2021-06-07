import HTTPHead from '../../../src/core/net/httpActions/HTTPHead.js';
import {Context, ErrorFlow} from 'olympe';

describe('HTTPHead action brick', () => {
    it('should head correctly', (done) => {
        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();

        outputs.push(() => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalled();
            done();
        });
        outputs.push(_errorFlow => {});
        outputs.push(statusCodeSpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['{"Content-Type": "application/json"}', 'https://httpbin.org/get'], outputs);
    });

    it('should generate a 405 error when heading on a put-only url',  (done) => {
        const brick = new HTTPHead();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const errorFlowSpy = jasmine.createSpy();

        outputs.push(_timestamp => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(405);
            expect(headersSpy).toHaveBeenCalledTimes(0);
            expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create('Network error', 405));
            done();
        });
        outputs.push(errorFlowSpy);
        outputs.push(statusCodeSpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['{"Content-Type": "application/json"}', 'https://httpbin.org/put'], outputs);
    });
});
