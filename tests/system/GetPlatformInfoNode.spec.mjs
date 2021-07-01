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
