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

import {VisualBrick, registerBrick} from 'olympe';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import {cssToSxProps} from 'helpers/mui';

/**
 * Provide an Audio Player visual component using react-audio-player
 */
export default class AudioPlayer extends VisualBrick {

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
            'Source', 'Auto Play', 'Show Controls', 'Loop', 'Muted', 'Volume [%]', 'Hidden',
            'Border Color', 'Border Radius', 'Border Width', 'CSS Property', 'Width', 'Listen Interval [ms]'
        ).subscribe(([
            src, autoPlay, showControls, loop, muted, volume, hidden, borderColor, borderRadius,
            borderWidth, cssProperty, width, listenInterval
        ]) => {
            // Repeat the olympe DIV style change in case the hidden property changed it (OF-1627)
            elementDom.style.display = 'flex';

            // 0 <= volume <= 100
            const clampedVolume = Math.min(Math.max(0, volume), 100);

            const cssProps = cssToSxProps(cssProperty);
            const bw = parseInt(cssProps.borderWidth) || borderWidth;

            // Rendering
            ReactDOM.render((
                !hidden &&
                <ReactAudioPlayer
                    // Properties + UI
                    src={src}
                    autoPlay={autoPlay}
                    controls={showControls}
                    loop={loop}
                    muted={muted}
                    volume={clampedVolume/100}
                    style={{
                        width: width - bw * 2 + 'px',
                        borderStyle: bw > 0 ? 'solid' : 'none',
                        borderWidth: bw + 'px',
                        borderColor: borderColor.toHexString(),
                        borderRadius: borderRadius + 'px',
                        ...cssProps
                    }}
                    listenInterval={listenInterval}

                    // Events
                    onCanPlay={() => context.getEvent('On Can Play').trigger()}
                    onCanPlayThrough={() => context.getEvent('On Can Play Through').trigger()}
                    onEnded={() => context.getEvent('On Ended').trigger()}
                    onError={() => context.getEvent('On Error').trigger()}
                    onListen={() => context.getEvent('On Listen').trigger()}
                    onPause={() => context.getEvent('On Pause').trigger()}
                    onPlay={() => context.getEvent('On Play').trigger()}
                    onSeeked={() => context.getEvent('On Seeked').trigger()}
                    onVolumeChanged={() => context.getEvent('On Volume Changed').trigger()}
                />
            ), elementDom);
        });
    }
}

registerBrick('017ce4d37f7258bdec17', AudioPlayer);
