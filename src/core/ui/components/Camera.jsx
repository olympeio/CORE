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

import { UIBrick, registerBrick } from 'olympe';
import ReactDOM from 'react-dom';
import React from 'react';
import {cssToSxProps} from 'helpers/mui';
import Webcam from 'react-webcam';

export default class Camera extends UIBrick {

    /**
     * This method runs when the brick is ready in the HTML DOM.
     * @override
     * @param {!UIContext} context
     * @param {!Element} elementDom
     */
    draw(context, elementDom) {
        // Allow overflow and center the audio player
        elementDom.style.overflow = 'visible';
        elementDom.style.display = 'flex';
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
            // 0 <= screenshot quality <= 100
            const clampedQuality = Math.min(Math.max(0, screenshotQuality), 100);

            const cssProps = cssToSxProps(cssProperty);
            const bw = parseInt(cssProps.borderWidth) || borderWidth;

            navigator.mediaDevices.enumerateDevices()
                .then((devices) => {
                    return devices.filter(device => device.kind === 'videoinput').length > 1;
                })
                .then((hasTwoOrMoreCameras) => {
                    if (!hasTwoOrMoreCameras) {
                        context.getProperty('Source').set('front');
                    }
                    return {
                        facingMode: src === 'front' && hasTwoOrMoreCameras
                            ? 'user'
                            : {exact: 'environment'}
                }})
                .finally((videoConstraints) => {
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
                            videoConstraints={videoConstraints}
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
                })
        });
    }
}

function WebcamWithRef(props) {

    const webcamRef = React.useRef();

    props.context.getEvent('Get Screenshot').observe().subscribe(() => {
        props.context.getProperty('Screenshot').set(webcamRef.current.getScreenshot());
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
