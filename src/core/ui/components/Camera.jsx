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

    useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
            const hasMultiCamera = devices.filter(device => device.kind === 'videoinput').length > 1;

            // `facingMode: 'user'` is used for front camera on smartphones and the default camera on computers
            // `facingMode: {exact: 'environment'}` is only used when back camera is selected and when multiple cameras are available (e.g.: on smartphones)
            setConstraints({ facingMode: (props.source === 'front' || !hasMultiCamera) ? 'user' : {exact: 'environment'} });
        });
    }, []);

    // Take screenshot
    props.context.observe('Take Screenshot').subscribe(() => {
        const t = new Transaction();
        const screenshotFormat = props.screenshotFormat || props.context.get('Screenshot Format') || 'image/png';
        const screenshotAsBase64 = webcamRef.current.getScreenshot();
        const screenshotAsArrayBuffer = dataUrlToBinary(screenshotAsBase64);
        const screenshotExtension = screenshotFormat.match(/.*\/([a-z]*)+?.*/)[1];
        const screenshotName = `screenshot_${Date.now()}.${screenshotExtension}`;
        const tag = File.createFile(t, screenshotName, screenshotAsArrayBuffer, screenshotFormat);
        t.persistInstance(tag, false);
        t.execute()
            .then(() => props.context.set('Screenshot', CloudObject.get(tag)))
            .catch(message => getLogger('Camera').warn('The application encountered a problem while taking a screenshot. The transaction failed.', message));
    });

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
