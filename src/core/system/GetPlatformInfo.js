import { FunctionBrick, registerBrick } from 'olympe';
import {getBrowserInfo, getOSInfo} from 'helpers/platformInfo';

/**
 ## Description
 Retrieves information about the underlying platform, like operating system and browser name.
 ## Outputs
 | Name | Type | Description |
 | --- | :---: | --- |
 | Browser | String | The name of the browser. |
 | Browser Version | String | Version information for the browser. |
 | OS | String | Operating System name. |
 | OS Version | String | Version information for the Operating system. |
 **/
export default class GetPlatformInfo extends FunctionBrick {

    /**
     * Executed every time an input gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     *
     * @protected
     * @param {!Context} _
     * @param {!Array} inputs
     * @param {function(string)} setOSVersion
     * @param {function(string)} setOS
     * @param {function(string)} setBrowserVersion
     * @param {function(string)} setBrowser
     */
    onUpdate(_, inputs, [setOSVersion, setOS, setBrowserVersion, setBrowser]) {
        const [osName, osVersion] = getOSInfo();
        const [browserName, browserVersion] = getBrowserInfo();

        setBrowser(browserName);
        setBrowserVersion(browserVersion);
        setOS(osName);
        setOSVersion(osVersion);
    }

}

registerBrick('01633f7ff010b741b715', GetPlatformInfo);
