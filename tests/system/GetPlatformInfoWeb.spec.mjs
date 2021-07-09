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

import GetPlatformInfo from '../../src/core/system/GetPlatformInfo.js';

export const testPlatformInfo = (userAgent, os, osVersion, browser, browserVersion) => {
    window.navigator['__defineGetter__']('userAgent', () => {
        return userAgent;
    });

    const setOSSpy = jasmine.createSpy();
    const setOSVersionSpy = jasmine.createSpy();
    const setBrowserSpy = jasmine.createSpy();
    const setBrowserVersionSpy = jasmine.createSpy();

    const brick = new GetPlatformInfo();
    brick.onUpdate(undefined, [], [setOSVersionSpy, setOSSpy, setBrowserVersionSpy, setBrowserSpy]);

    expect(setOSSpy).toHaveBeenCalledOnceWith(os);
    expect(setOSVersionSpy).toHaveBeenCalledOnceWith(osVersion);
    expect(setBrowserSpy).toHaveBeenCalledOnceWith(browser);
    expect(setBrowserVersionSpy).toHaveBeenCalledOnceWith(browserVersion);
};

describe('GetPlatformInfo brick, web', () => {
    it('should retrieve os and browser information', () => {
        testPlatformInfo('Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18', 'Windows', '7', 'Opera', '12.18'); // Windows NT 6.1, Opera 12.18
        testPlatformInfo('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.991', 'Windows', '10.0', 'Opera', '43.0.2442.991'); // Opera 43.0.2442.991
        testPlatformInfo('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.81', 'Windows', '10.0', 'Microsoft Edge', '88.0.705.81'); // Edge 88.0.705.81
        testPlatformInfo('Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko', 'Windows', '10.0', 'Microsoft Internet Explorer', '11.0'); // IE 11.0
        testPlatformInfo('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36', 'Windows', '10.0', 'Chrome', '74.0.3729.169'); // Chrome 74.0.3729.169
        testPlatformInfo('Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1', 'iOS', '12.2.0', 'Safari', '12.1'); // iOS, Safari 12.1
        testPlatformInfo('Mozilla/5.0 (X11; Linux x86_64) Gecko/20100101 Firefox/54.0', 'Linux', '', 'Firefox', '54.0'); // Linux, Firefox 54.0
        testPlatformInfo('Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537', 'Windows Phone', '8.1', 'Safari', '537'); // Windows phone, IE Mobile
        testPlatformInfo('Mozilla/5.0 (Linux; Android 7.1.2; AFTMM Build/NS6265; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36', 'Android', '7.1.2', 'Chrome', '70.0.3538.110'); // Android, Chrome
        testPlatformInfo('Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36', 'Open BSD', '', 'Chrome', '36.0.1985.125'); // OpenBSD, Chrome
        testPlatformInfo('Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.7.10) Gecko/20050720 Firefox/1.0.6', 'Sun OS', '', 'Firefox', '1.0.6'); // SunOS, Firefox
        testPlatformInfo('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15', 'Mac OS', '10.11.6', 'Safari', '11.1.2'); // MacOS, Safari
        testPlatformInfo('Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.9a1) Gecko/20051002 Firefox/1.6a1', 'BeOS', '', 'Firefox', '1.6a1'); // BeOS, Firefox
        testPlatformInfo('Mozilla/5.0 (OS/2; Warp 4.5; rv:45.0) Gecko/20100101 Firefox/45.0 SeaMonkey/2.42.9esr', 'OS/2', '', 'Firefox', '45.0'); // OS/2
    });
});
