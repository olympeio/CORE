import HTTPGet from '../../../src/core/net/httpActions/HTTPGet.js';
import {Context, ErrorFlow} from "@olympeio/runtime-web";

describe('HTTPGet brick', () => {
    it('should get correctly',  (done) => {
        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();

        outputs.push(statusCodeSpy);
        outputs.push(_timestamp => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(200);
            expect(headersSpy).toHaveBeenCalled();
            expect(bodySpy).toHaveBeenCalled();
            done();
        });
        outputs.push(headersSpy);
        outputs.push(_errorFlow => {});
        outputs.push(bodySpy);

        brick.onUpdate(context, ['{"Content-Type": "application/json"}', 'https://httpbin.org/ip'], outputs);

    });

    it('should get an error correctly',  (done) => {
        const brick = new HTTPGet();

        const context = new Context();
        const outputs = [];

        const statusCodeSpy = jasmine.createSpy();
        const headersSpy = jasmine.createSpy();
        const bodySpy = jasmine.createSpy();
        const errorFlowSpy = jasmine.createSpy();

        outputs.push(statusCodeSpy);
        outputs.push(_timestamp => {
            expect(statusCodeSpy).toHaveBeenCalledOnceWith(404);
            expect(headersSpy).toHaveBeenCalledTimes(0);
            expect(bodySpy).toHaveBeenCalledOnceWith('NOT FOUND');
            expect(errorFlowSpy).toHaveBeenCalledOnceWith(ErrorFlow.create('Network error', 404));
            done();
        });
        outputs.push(headersSpy);
        outputs.push(errorFlowSpy);
        outputs.push(bodySpy);

        brick.onUpdate(context, ['', 'abcd'], outputs);

    });
});
