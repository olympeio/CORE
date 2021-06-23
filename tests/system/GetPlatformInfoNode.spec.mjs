/**
 * Copyright (c) 2021 Olympe S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// import GetPlatformInfo from '../../src/core/system/GetPlatformInfo.js';
// import {testPlatformInfo} from "./GetPlatformInfoWeb.spec.mjs";

// TODO Rewrite tests like the browser environment tests, but execute them in node environment
// describe('GetPlatformInfo node brick', () => {
//     it('should retrieve os informations in node mode', () => {
//         const brick = new GetPlatformInfo();
//         const context = new Context();
//
//         const fakeResultOS = [];
//         const fakeResultOSVersion = [];
//         const fakeOS = [];
//         const fakeOSVersion = [];
//
//         fakeOS.push('darwin');
//         fakeOSVersion.push('11.3.0');
//         fakeResultOS.push('Mac OS');
//         fakeResultOSVersion.push('10.7.3');
//
//         fakeOS.push('darwin');
//         fakeOSVersion.push('20.1.0');
//         fakeResultOS.push('Mac OS');
//         fakeResultOSVersion.push('11.0.1');
//
//         fakeOS.push('win32');
//         fakeOSVersion.push('10.0');
//         fakeResultOS.push('Windows');
//         fakeResultOSVersion.push('10');
//
//         fakeOS.push('win32');
//         fakeOSVersion.push('6.0');
//         fakeResultOS.push('Windows');
//         fakeResultOSVersion.push('Vista');
//
//         fakeOS.push('linux');
//         fakeOSVersion.push('2.6.35-22-generic');
//         fakeResultOS.push('Linux');
//         fakeResultOSVersion.push('2.6.35-22-generic');
//
//
//         for (let i = 0; i < fakeOS.length; ++i) {
//             spyOn(os, 'platform').and.callFake(() => fakeOS[i]);
//             spyOn(os, 'version').and.callFake(() => fakeOSVersion[i]);
//
//             const setOSSpy = jasmine.createSpy();
//             const setOSVersionSpy = jasmine.createSpy();
//             const setBrowserSpy = jasmine.createSpy();
//             const setBrowserVersionSpy = jasmine.createSpy();
//
//             const outputs = [];
//             outputs.push(setOSVersionSpy);
//             outputs.push(setOSSpy);
//             outputs.push(setBrowserVersionSpy);
//             outputs.push(setBrowserSpy);
//
//             brick.onUpdate(context, [], outputs);
//
//             expect(setOSSpy).toHaveBeenCalledOnceWith(fakeResultOS[i]);
//             expect(setOSVersionSpy).toHaveBeenCalledOnceWith(fakeResultOSVersion[i]);
//             expect(setBrowserSpy).toHaveBeenCalledOnceWith('n/a');
//             expect(setBrowserVersionSpy).toHaveBeenCalledOnceWith('n/a');
//         }
//     });
// });
