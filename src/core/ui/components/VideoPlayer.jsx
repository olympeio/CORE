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
import ReactPlayer from 'react-player'
import React from 'react'
import ReactDOM from 'react-dom';
import {cssToSxProps} from "helpers/mui";
import Icon from "@mui/material/Icon";


export default class VideoPlayer extends UIBrick {

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
            'URL', 'Playing', 'Loop', 'Show Controls', 'Volume [%]', 'Light', 'Muted', 'Playback Rate',
            'Progress Interval', 'Plays inline', 'Picture in Picture', 'Stop on Unmount', 'Play Icon',
            'Preview Tab Index', 'Played [fraction]', 'Loaded [fraction]', 'Played [seconds]', 'Loaded [seconds]',
            'Duration [seconds]', 'CSS Property', 'Hidden', 'Width', 'Height', 'Border Color', 'Border Radius',
            'Border Width',
        ).subscribe(([
            url, playing, loop, showControls, volume, light, muted, playbackRate, progressInterval,
            playsInline, pip, stopOnUnmount, playIcon, previewTabIndex, playedFraction, loadedFraction,
            playedSeconds, loadedSeconds, duration, cssProperty, hidden, width, height, borderColor, borderRadius,
            borderWidth
        ]) => {
            // 0 <= volume <= 100
            const clampedVolume = Math.min(Math.max(0, volume), 100);

            const cssProps = cssToSxProps(cssProperty);
            const bw = parseInt(cssProps.borderWidth) || borderWidth;

            // Rendering
            ReactDOM.render((
                !hidden &&
                <ReactPlayer
                    // Properties + UI
                    url={url}
                    playing={playing}
                    loop={loop}
                    controls={showControls}
                    light={light}
                    volume={clampedVolume / 100}
                    muted={muted}
                    playbackRate={playbackRate}
                    width={width - bw * 2}
                    height={height - bw * 2}
                    progressInterval={progressInterval}
                    playsinline={playsInline}
                    pip={pip}
                    stopOnUnmount={stopOnUnmount}
                    playIcon={playIcon && (<Icon>{playIcon}</Icon>)}
                    previewTabIndex={previewTabIndex}
                    style={{
                        borderStyle: bw > 0 ? 'solid' : 'none',
                        borderWidth: bw + 'px',
                        borderColor: borderColor.toHexString(),
                        borderRadius: borderRadius + 'px',
                        ...cssProps
                    }}

                    // Events
                    onReady={() => context.getEvent('On Ready').trigger()}
                    onStart={() => context.getEvent('On Start').trigger()}
                    onPlay={() => context.getEvent('On Play').trigger()}
                    onPause={() => context.getEvent('On Pause').trigger()}
                    onBuffer={() => context.getEvent('On Buffer').trigger()}
                    onBufferEnd={() => context.getEvent('On Buffer End').trigger()}
                    onSeek={() => context.getEvent('On Seek').trigger()}
                    onEnded={() => context.getEvent('On Ended').trigger()}
                    onError={() => context.getEvent('On Error').trigger()}
                    onClickPreview={() => context.getEvent('On Click Preview').trigger()}
                    onEnablePIP={() => context.getEvent('On Enable PiP').trigger()}
                    onDisablePIP={() => context.getEvent('On Disable PiP').trigger()}

                    // Callbacks
                    onProgress={(state) => {
                        context.getProperty('Played [fraction]').set(state.played);
                        context.getProperty('Played [seconds]').set(state.playedSeconds);
                        context.getProperty('Loaded [fraction]').set(state.loaded);
                        context.getProperty('Loaded [seconds]').set(state.loadedSeconds);
                        context.getEvent('On Progress').trigger();
                    }}
                    onDuration={(duration) => {
                        context.getProperty('Duration [seconds]').set(duration);
                        context.getEvent('On Duration').trigger();
                    }}

                />
            ), elementDom);
        });
    }
}

registerBrick('017ce68d72f9cad20f87', VideoPlayer);
