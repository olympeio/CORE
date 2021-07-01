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

/**
 * @return {Array<string>} [name, version]
 */
export const getBrowserInfo = () => ['n/a', 'n/a'];
import * as os from 'os';

/**
 * @return {Array<string>} [name, version]
 */
export const getOSInfo = () => {
    let name = os.platform();
    let version = os.release();

    switch (name) {
        case 'darwin':
            name = 'Mac OS'
            //map Mac OS versions to darwin versions (source: https://en.wikipedia.org/wiki/Uname)

            const versionMatchMacOS = /([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(version);

            //append 0 in if major, minor or build version number is single digit
            version =
                (versionMatchMacOS[1].length === 2 ? versionMatchMacOS[1] : '0' + versionMatchMacOS[1]) +
                (versionMatchMacOS[2].length === 2 ? versionMatchMacOS[2] : '0' + versionMatchMacOS[2]) +
                (versionMatchMacOS[3].length === 2 ? versionMatchMacOS[3] : '0' + versionMatchMacOS[3]);

            if (version >= '20.01.00') {
                version = '11.0.1';
            } else if (version >= '19.05.00') {
                version = '10.15.5';
            } else if (version >= '18.02.00') {
                version = '10.14.3';
            } else if (version >= '17.04.00') {
                version = '10.13.3';
            } else if (version >= '16.05.00') {
                version = '10.12';
            } else if (version >= '15.00.00') {
                version = '10.11';
            } else if (version >= '14.00.00') {
                version = '10.10';
            } else if (version >= '13.00.00') {
                version = '10.9';
            } else if (version >= '12.03.00') {
                version = '10.8.3';
            } else if (version >= '11.03.00') {
                version = '10.7.3';
            } else if (version >= '10.00.00') {
                version = '10.6';
            } else if (version >= '07.08.00') {
                version = '10.3';
            } else {
                version = 'unknown';
            }

            break;
        case 'linux':
            name = 'Linux';
            //no version mapping for linux, as there are many distribution with different versions

            break;
        case 'win32':
            name = 'Windows';

            //source: https://msdn.microsoft.com/en-us/library/windows/desktop/ms724832(v=vs.85).aspx
            switch (version) {
                case '10.0':
                    version = '10';
                    break;
                case '6.3':
                    version = '8.1';
                    break;
                case '6.2': //Windows 10 or 8.1 may return this (if application is not manifested)
                    version = '8';
                    break;
                case '6.1':
                    version = '7';
                    break;
                case '6.0':
                    version = 'Vista';
                    break;
                case '5.2':
                case '5.1':
                    version = 'XP';
                    break;
                case '5.0':
                    version = '2000';
                    break;
            }
            break;
        case 'aix':
            name = 'AIX';
            break;
        case 'android':
            name = 'Android';
            break;
        case 'freebsd':
            name = 'Free BSD';
            break;
        case 'openbsd':
            name = 'Open BSD';
            break;
        case 'sunos':
            name = 'Sun OS';
            break;
    }

    return [name, version];
}
