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
import { cssToSxProps, ifNotTransparent, ifNotNull } from 'helpers/mui';
import { dataUrlToBinary } from 'helpers/binaryConverters';
import { getLogger } from 'logging';

import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Box } from "@mui/material";

import { combineLatest } from "rxjs";

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
            const width = useProperty($, 'Width');
            const height = useProperty($, 'Height');
            let borderWidth = useProperty($, 'Border Width');

            if (hidden || disableVideo || width === undefined || height === undefined || width < 0 || height < 0) {
                return null;
            }

            // If border width < 0
            if (borderWidth < 0) {
                getLogger("Camera").error("Border Width should be greater or equal 0");
                borderWidth = 0;
            }

            // If border width's greater than width | height
            if (borderWidth * 2 >= width || borderWidth * 2 >= height) {
                borderWidth = Math.floor(width >= height ? height / 2 - 1 : width / 2 - 1);
                getLogger('Camera').error(`Border Width is higher Width | Height of Brick - Border Width should be lower than ${borderWidth}`);
            }

            // If mediaDevices features are not available in the browser, display a box with an error message.
            if (navigator['mediaDevices'] === undefined || typeof navigator.mediaDevices.enumerateDevices !== 'function') {
                getLogger('Camera').error("Current platform doesn't support media devices.");
                return (
                    <Box
                        width={width - borderWidth * 2}
                        height={height - borderWidth * 2}
                        style={{
                            borderStyle: borderWidth > 0 ? 'solid' : 'none',
                            ...ifNotNull('borderWidth', `${borderWidth}px`, borderWidth),
                            ...ifNotTransparent('borderColor', borderColor),
                            ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                            // Additional
                            ...cssToSxProps(cssProperty),
                        }}
                    >
                        Current platform does not support media devices.
                    </Box>
                );
            }

            return <Camera.Component $={$} width={width} height={height} borderWidth={borderWidth} />;
        };
    }
}

Camera.Component = ({ $, width, height, borderWidth }) => {
    const cssProperty = useProperty($, 'Css Property');
    const borderColor = useProperty($, 'Border Color');
    const borderRadius = useProperty($, 'Border Radius');
    const screenshotQuality = useProperty($, 'Screenshot Quality [%]');
    const defaultColor = useProperty($, 'Default Color');
    const imageFit = useProperty($, 'Image Fit');

    const clampedQuality = Math.min(Math.max(0, screenshotQuality), 100); // 0 <= screenshot quality <= 100
    return (
        <WebcamWithRef
            audio={!useProperty($, 'Disable Audio')}
            imageSmoothing={useProperty($, 'Image Smoothing')}
            mirrored={useProperty($, 'Mirrored')}
            screenshotFormat={useProperty($, 'Screenshot Format')}
            screenshotQuality={clampedQuality / 100}
            width={width - borderWidth * 2}
            height={height - borderWidth * 2}
            source={useProperty($, 'Source')}
            context={$}
            style={{
                borderStyle: borderWidth > 0 ? 'solid' : 'none',
                ...ifNotNull('borderWidth', `${borderWidth}px`, borderWidth),
                ...ifNotTransparent('borderColor', borderColor),
                ...ifNotTransparent('backgroundColor', defaultColor),
                ...ifNotNull('borderRadius', `${borderRadius}px`, borderRadius),
                ...cssToSxProps(cssProperty),
                objectFit: imageFit,
                width: '100%',
                height: '100%'
            }}
        />
    );
};

// React component
function WebcamWithRef(props) {
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf('android') > -1;
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

            const screenshotFormat = props.screenshotFormat || props.context.get('Screenshot Format') || '.png';
            const screenshotAsBase64 = webcamRef.current.getScreenshot();
            if (screenshotAsBase64 === null) {
                return;
            }
            const screenshotAsArrayBuffer = dataUrlToBinary(screenshotAsBase64);
            const screenshotName = `screenshot_${Date.now()}${screenshotFormat}`;
            const tag = File.createFromContent(t, screenshotName, screenshotAsArrayBuffer, screenshotFormat);
            t.persistInstance(tag, false);
            t.execute().catch(message => getLogger('Camera').warn('The application encountered a problem while taking a screenshot. The transaction failed.', message));
            // Set the screenshot property synchronously in the context, instead of calling it inside the transaction callback
            // because that component needs to get the screenshot directly for its usage in Draw. Moreover, it is a local, synchronous transaction that has no reason to fail
            props.context.set('Screenshot', CloudObject.get(tag));
        });
    }, []);

    let constraintsScreenshotConfig = {};
    let childProps = { ...props };

    const useCameraResolution = useProperty(props.context, 'Use Camera Resolution');
    if (useCameraResolution) {
        delete childProps.width;
        delete childProps.height;
        childProps = { ...childProps, forceScreenshotSourceSize: true };
        // https://stackoverflow.com/questions/27420581/get-maximum-video-resolution-with-getusermedia
        // This will make the browser use the maximum resolution available of camera (auto detect by browser), up to 4K
        constraintsScreenshotConfig = { width: { ideal: 4096 }, height: { ideal: 4096 } };
    }

    // Only add the webcam component once constraints has been defined.screenshotFormat
    return constraints && (
        <Webcam
            // Properties + UI
            ref={webcamRef}
            videoConstraints={{...constraints, ...constraintsScreenshotConfig}}
            {...childProps}
        />
    );
}

registerBrick('017cef1da1b9d9d128d6', Camera);
