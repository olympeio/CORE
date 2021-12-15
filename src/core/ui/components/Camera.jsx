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

import { VisualBrick, registerBrick, File, Transaction, Sync } from 'olympe';
import {dataUrlToBinary} from 'helpers/binaryConverters';
import { getLogger } from 'logging';
import ReactDOM from 'react-dom';
import React from 'react';
import {cssToSxProps} from 'helpers/mui';
import Webcam from 'react-webcam';
import {Box} from "@mui/material";

export default class Camera extends VisualBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Allow overflow and center the audio player
        elementDom.style.overflow = 'visible';
        elementDom.style.alignItems = 'center';
        elementDom.style.justifyContent = 'center';

        // Observe all properties
        context.observeMany(
            'Source', 'Disable Video', 'Disable Audio', 'Image Smoothing', 'Mirrored', 'Screenshot Format',
            'Screenshot Quality [%]', 'Hidden', 'Border Color', 'Border Radius', 'Border Width', 'CSS Property',
            'Width', 'Height'
        ).subscribe(([
            src, disableVideo, disableAudio, imageSmoothing, mirrored, screenshotFormat, screenshotQuality,
            hidden, borderColor, borderRadius, borderWidth, cssProperty, width, height
        ]) => {
            // Repeat the olympe DIV style change in case the hidden property changed it (OF-1627)
            elementDom.style.display = 'flex';

            // 0 <= screenshot quality <= 100
            const clampedQuality = Math.min(Math.max(0, screenshotQuality), 100);

            const cssProps = cssToSxProps(cssProperty);
            const bw = parseInt(cssProps.borderWidth) || borderWidth;

            // If mediaDevices features are not available in the browser, display a box with an error message.
            if (navigator['mediaDevices'] === undefined || typeof navigator.mediaDevices.enumerateDevices !== 'function') {
                getLogger('Camera').error('Current platform doesn\'t support media devices.');
                ReactDOM.render((
                    <Box
                        width={width - bw * 2}
                        height={height - bw * 2}
                        style={{
                            borderStyle: bw > 0 ? 'solid' : 'none',
                            borderWidth: bw + 'px',
                            borderColor: borderColor.toHexString(),
                            borderRadius: borderRadius + 'px',
                            ...cssProps
                        }}
                    >Current platform does not support media devices.</Box>
                ), elementDom);
                return;
            }

            navigator.mediaDevices.enumerateDevices().then((devices) => {
                const hasMultiCamera = devices.filter(device => device.kind === 'videoinput').length > 1;

                // `facingMode: 'user'` is used for front camera on smartphones and the default camera on computers
                // `facingMode: {exact: 'environment'}` is only used when back camera is selected and when multiple cameras are available (e.g.: on smartphones)
                const constraint = { facingMode: (src === 'front' || !hasMultiCamera) ? 'user' : {exact: 'environment'} };

                // Rendering
                ReactDOM.render((
                    !hidden && !disableVideo &&
                    <WebcamWithRef
                        audio={!disableAudio}
                        imageSmoothing={imageSmoothing}
                        mirrored={mirrored}
                        screenshotFormat={screenshotFormat}
                        screenshotQuality={clampedQuality / 100}
                        width={width - bw * 2}
                        height={height - bw * 2}
                        videoConstraints={constraint}
                        context={context}
                        style={{
                            borderStyle: bw > 0 ? 'solid' : 'none',
                            borderWidth: bw + 'px',
                            borderColor: borderColor.toHexString(),
                            borderRadius: borderRadius + 'px',
                            ...cssProps
                        }}
                    />
                ), elementDom);
            });
        });
    }
}

function WebcamWithRef(props) {

    const webcamRef = React.useRef();

    // Take screenshot
    props.context.observe('Take Screenshot').subscribe(() => {
        const t = new Transaction();
        const screenshotAsBase64 = webcamRef.current.getScreenshot();
        const screenshotAsArrayBuffer = dataUrlToBinary(screenshotAsBase64);
        const screenshotExtension = props.screenshotFormat.match(/.*\/([a-z]*)+?.*/)[1];
        const screenshotName = `screenshot_${Date.now()}.${screenshotExtension}`;
        const tag = File.createFile(File, t, screenshotName, screenshotAsArrayBuffer, props.screenshotFormat);
        t.persistInstance(tag, false);
        t.execute((success, message) => {
            if(!success) {
                getLogger('Camera').warn('The application encountered a problem while taking a screenshot. The transaction failed.', message);
                return;
            }
            props.context.set('Screenshot', Sync.getInstance(tag));
        });
    });

    return (
        <Webcam
            // Properties + UI
            ref={webcamRef}
            {...props}
        />
    )
}

registerBrick('017cef1da1b9d9d128d6', Camera);
