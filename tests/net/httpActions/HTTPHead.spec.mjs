/**
 * Copyright 2021 Olympe S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

        brick.onUpdate(context, ['https://httpbin.org/get', '{"Content-Type": "application/json"}'], outputs);
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

        brick.onUpdate(context, ['https://httpbin.org/put', '{"Content-Type": "application/json"}'], outputs);
    });
});
