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
export const getBrowserInfo = () => {
    const navigatorAgent = navigator.userAgent;

    let name = '';
    let version = '';

    // Browser name and version
    if (navigatorAgent.includes('Opera')) {
        // Opera
        name = 'Opera';
        version = navigatorAgent.includes('Version') ?
            navigatorAgent.substring(navigatorAgent.indexOf('Version') + 8) :
            navigatorAgent.substring(navigatorAgent.indexOf('Opera') + 6);
    } else if (navigatorAgent.includes('OPR')) {
        // Opera Next
        name = 'Opera';
        version = navigatorAgent.substring(navigatorAgent.indexOf('OPR') + 4);
    } else if (navigatorAgent.includes('Edg')) {
        // Edge
        name = 'Microsoft Edge';
        version = navigatorAgent.substring(navigatorAgent.indexOf('Edg') + 4);
    } else if (navigatorAgent.includes('Edge')) {
        // Edge
        name = 'Microsoft Edge';
        version = navigatorAgent.substring(navigatorAgent.indexOf('Edge') + 5);
    } else if (navigatorAgent.includes('MSIE')) {
        // MSIE
        name = 'Microsoft Internet Explorer';
        version = navigatorAgent.substring(navigatorAgent.indexOf('MSIE') + 5).split(";")[0];
    } else if (navigatorAgent.includes('Chrome')) {
        // Chrome
        name = 'Chrome';
        version = navigatorAgent.substring(navigatorAgent.indexOf('Chrome') + 7);
    } else if (navigatorAgent.includes('Safari')) {
        // Safari
        name = 'Safari';
        version = navigatorAgent.includes('Version') ?
            navigatorAgent.substring(navigatorAgent.indexOf('Version') + 8) :
            navigatorAgent.substring(navigatorAgent.indexOf('Safari') + 7);
    } else if (navigatorAgent.includes('Firefox')) {
        // Firefox
        name = 'Firefox';
        version = navigatorAgent.substring(navigatorAgent.indexOf('Firefox') + 8);
    } else if (navigatorAgent.includes('Trident/')) {
        // MSIE 11+
        name = 'Microsoft Internet Explorer';
        version = navigatorAgent.substring(navigatorAgent.indexOf('rv:') + 3).split(")")[0];
    } else {
        // Other browsers
        const nameOffset = navigatorAgent.lastIndexOf(' ');
        const verOffset = navigatorAgent.lastIndexOf('/');
        if (nameOffset + 1 < verOffset) {
            version = navigatorAgent.substring(verOffset + 1);
            const browser = navigatorAgent.substring(nameOffset, verOffset);
            name = browser.toLowerCase() === browser.toUpperCase() ? navigator.appName : navigatorAgent.substring(nameOffset, verOffset);
        }
    }

    version = version.split(" ")[0];
    return [name, version];
};

/**
 * @return {Array<string>} [name, version]
 */
export const getOSInfo = () => {
    const navigatorAgent = navigator.userAgent;
    const clientStrings = [
        {s: 'Windows Phone', r: /Windows Phone/},
        {s: 'Windows', r: /Windows/},
        {s: 'Android', r: /Android/},
        {s: 'Open BSD', r: /OpenBSD/},
        {s: 'Sun OS', r: /SunOS/},
        {s: 'Linux', r: /(Linux|X11)/},
        {s: 'iOS', r: /(iPhone|iPad|iPod)/},
        {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh|Mac OS X)/},
        {s: 'QNX', r: /QNX/},
        {s: 'UNIX', r: /UNIX/},
        {s: 'BeOS', r: /BeOS/},
        {s: 'OS/2', r: /OS\/2/},
        {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];

    let name = '';
    let version = '';

    for (const cs of clientStrings) {
        if (cs.r.test(navigatorAgent)) {
            name = cs.s;
            break;
        }
    }

    switch (name) {
        case 'Mac OS':
            version = (/Mac OS X (\d+[._\d]+)/).exec(navigatorAgent)[1].replace(new RegExp('_', 'g'), '.');
            break;
        case 'Android':
            version = (/Android ([._\d]+)/).exec(navigatorAgent)[1].replace(new RegExp('_', 'g'), '.');
            break;
        case 'iOS':
            const groups = (/OS (\d+)_(\d+)_?(\d+)?/).exec(navigatorAgent);
            version = groups[1] + '.' + groups[2] + '.' + (groups[3] | 0);
            break;
        case 'Windows':
            version = (/Windows (.*)/).exec(navigatorAgent)[1].split(';')[0].replace('NT ', '');

            if (version === '6.1') {
                version = '7'; // NT 6.1 = Windows 7
            } else if (version === '6.0') {
                version = 'Vista'; // NT 6.0 = Windows Vista
            } else if (version === '5.1') {
                version = 'XP'; // NT 6.0 = Windows XP
            } else if (version === '5.01') {
                version = '2000 (SP1)'; // NT 5.01 = Windows 2000 SP1
            } else if (version === '5.0') {
                version = '2000'; // NT 5.01 = Windows 2000
            }

            break;
        case 'Windows Phone':
            version = (/Windows Phone (.*)/).exec(navigatorAgent)[1].split(';')[0];
            break;
        default:
    }

    return [name, version];
};
