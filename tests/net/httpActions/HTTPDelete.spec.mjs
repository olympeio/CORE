import HTTPDelete from '../../../src/core/net/httpActions/HTTPDelete.js';
import {Context, ErrorFlow} from 'olympe';

describe('HTTPDelete action brick', () => {
    it('should delete correctly', (done) => {
        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();

        outputs.push(() => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalled();
            expect(bodySpy).toHaveBeenCalled();
            done();
        });
        outputs.push(_errorFlow => {});
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['{"test": "payload"}', '{"Content-Type": "application/json"}', 'https://httpbin.org/delete'], outputs);
    });

    it('should generate a 405 error when deleting on a put-only url',  (done) => {
        const brick = new HTTPDelete();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();
        const errorFlowSpy = jasmine.createSpy();

        outputs.push(_timestamp => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(405);
            expect(headersSpy).toHaveBeenCalledTimes(0);
            expect(bodySpy).toHaveBeenCalledTimes(1);
            expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create('Network error', 405));
            done();
        });
        outputs.push(errorFlowSpy);
        outputs.push(statusCodeSpy);
        outputs.push(bodySpy);
        outputs.push(headersSpy);

        brick.onUpdate(context, ['{"test": "payload"}', '{"Content-Type": "application/json"}', 'https://httpbin.org/put'], outputs);
    });
});
