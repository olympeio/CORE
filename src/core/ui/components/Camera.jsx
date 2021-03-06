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

import { registerBrick, File, Transaction, CloudObject } from 'olympe';
import { ReactBrick, useProperty } from 'helpers/react.jsx';
import { cssToSxProps, ifNotTransparent } from 'helpers/mui';
import { dataUrlToBinary } from 'helpers/binaryConverters';
import { getLogger } from 'logging';

import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Box } from "@mui/material";

import { combineLatest } from "rxjs";

const ua = navigator.userAgent.toLowerCase();
const isAndroid = ua.indexOf('android') > -1;

export default class Camera extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        return combineLatest([$.observe('Hidden'), $.observe('Disable Video')]);
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        // Allow overflow and center the webcam
        parent.style.overflow = 'visible';
        parent.style.alignItems = 'center';
        parent.style.justifyContent = 'center';
        parent.style.display = 'flex';

        return super.updateParent(parent, element);
    }

    /**
     * @override
     */
    static getReactComponent($) {
        return (props) => {
            const [hidden, disableVideo] = props.values;
            if(hidden) {
                return null;
            }

            const cssProps = cssToSxProps(useProperty($, 'CSS Property'));
            const bw = parseInt(cssProps.borderWidth) || useProperty($, 'Border Width') || 0;
            const width = useProperty($, 'Width') || 0;
            const height = useProperty($, 'Height') || 0;
            const borderColor = useProperty($, 'Border Color');
            const borderRadius = useProperty($, 'Border Radius') || 0;

            // If mediaDevices features are not available in the browser, display a box with an error message.
            if (navigator['mediaDevices'] === undefined || typeof navigator.mediaDevices.enumerateDevices !== 'function') {
                getLogger('Camera').error('Current platform doesn\'t support media devices.');
                return (<Box
                    width={width - bw * 2}
                    height={height - bw * 2}
                    style={{
                        borderStyle: bw > 0 ? 'solid' : 'none',
                        borderWidth: bw + 'px',
                        ...ifNotTransparent('borderColor', borderColor),
                        borderRadius: borderRadius + 'px',
                        ...cssProps
                    }}
                >Current platform does not support media devices.</Box>);
            }

            const clampedQuality = Math.min(Math.max(0, useProperty($, 'Screenshot Quality [%]')), 100); // 0 <= screenshot quality <= 100
            return !disableVideo && (
                <WebcamWithRef
                    audio={!useProperty($, 'Disable Audio')}
                    imageSmoothing={useProperty($, 'Image Smoothing')}
                    mirrored={useProperty($, 'Mirrored')}
                    screenshotFormat={useProperty($, 'Screenshot Format')}
                    screenshotQuality={clampedQuality / 100}
                    width={width - bw * 2}
                    height={height - bw * 2}
                    source={useProperty($, 'Source')}
                    context={$}
                    style={{
                        borderStyle: bw > 0 ? 'solid' : 'none',
                        borderWidth: bw + 'px',
                        ...ifNotTransparent('borderColor', borderColor),
                        borderRadius: borderRadius + 'px',
                        ...cssProps
                    }}
                />
            );
        };
    }
}

// React component
function WebcamWithRef(props) {
    const webcamRef = React.useRef();
    const [constraints, setConstraints] = useState(null);
    const [hasMultiCamera, setHasMultiCamera] = useState(false);

    const [androidTimeout, setAndroidTimeout] = useState(null);
    const [androidWorkaroundCompleted, setAndroidWorkaroundCompleted] = useState(!isAndroid);

    const checkDeviceList = () => {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            setHasMultiCamera(devices.filter(device => device.kind === 'videoinput').length > 1);
        });
    };
    useEffect(() => {
        // `facingMode: 'user'` is used for front camera on smartphones and the default camera on computers
        // `facingMode: {exact: 'environment'}` is only used when back camera is selected and when multiple cameras are available (e.g.: on smartphones)
        setConstraints({ facingMode: (props.source === 'front' || !hasMultiCamera || !androidWorkaroundCompleted) ? 'user' : {exact: 'environment'} });

        if (props.source === 'front' && !androidWorkaroundCompleted) {
            setAndroidWorkaroundCompleted(true);
        }

        if (props.source === 'back' && !androidWorkaroundCompleted && !androidTimeout && hasMultiCamera) {
            setAndroidTimeout(setTimeout(() => {
                setAndroidWorkaroundCompleted(true);
            }, 1000));
        }
    }, [props.source, hasMultiCamera, androidWorkaroundCompleted]);

    useEffect(() => {
        // This is necessary to trigger the event manager on mediaDevices, at least on Safari
        checkDeviceList();
        // MediaDevices can change. For example after user gives permission to access camera.
        navigator.mediaDevices.addEventListener('devicechange', checkDeviceList);
        props.context.onDestroy(() => {
            navigator.mediaDevices.removeEventListener('devicechange', checkDeviceList);
        });

        // Take screenshot => observe must be called in the "useEffect" to avoid recalling it everytime React re-render the component
        props.context.observe('Take Screenshot').subscribe(() => {
            const t = new Transaction();
            const screenshotFormat = props.screenshotFormat || props.context.get('Screenshot Format') || 'image/png';
            const screenshotAsBase64 = webcamRef.current.getScreenshot();
            if (screenshotAsBase64 === null) {
                return;
            }
            const screenshotAsArrayBuffer = dataUrlToBinary(screenshotAsBase64);
            const screenshotExtension = screenshotFormat.match(/.*\/([a-z]*)+?.*/)[1];
            const screenshotName = `screenshot_${Date.now()}.${screenshotExtension}`;
            const tag = File.createFromContent(t, screenshotName, screenshotAsArrayBuffer, screenshotFormat);
            t.persistInstance(tag, false);
            t.execute().catch(message => getLogger('Camera').warn('The application encountered a problem while taking a screenshot. The transaction failed.', message));
            // Set the screenshot property synchronously in the context, instead of calling it inside the transaction callback
            // because that component needs to get the screenshot directly for its usage in Draw. Moreover, it is a local, synchronous transaction that has no reason to fail
            props.context.set('Screenshot', CloudObject.get(tag));
        });
    }, []);

    // Only add the webcam component once constraints has been defined.
    return constraints && (
        <Webcam
            // Properties + UI
            ref={webcamRef}
            videoConstraints={constraints}
            {...props}
        />
    );
}

registerBrick('017cef1da1b9d9d128d6', Camera);
