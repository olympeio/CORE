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

import { VisualBrick, registerBrick } from 'olympe';
import ReactPlayer from 'react-player'
import React from 'react'
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {cssToSxProps} from "helpers/mui";

export default class MediaPlayer extends VisualBrick {

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
            'Media URL', 'Playing', 'Loop', 'Show Controls', 'Volume [%]', 'Muted', 'Playback Rate', 'Progress Interval', 'Plays Inline',
            'CSS Property', 'Hidden', 'Width', 'Height', 'Border Color', 'Border Radius', 'Border Width',
        ).subscribe(([
            url, playing, loop, showControls, volume, muted, playbackRate, progressInterval, playsInline,
            cssProperty, hidden, width, height, borderColor, borderRadius, borderWidth
        ]) => {
            // Repeat the olympe DIV style change in case the hidden property changed it (OF-1627)
            elementDom.style.display = 'flex';

            // 0 <= volume <= 100
            const clampedVolume = Math.min(Math.max(0, volume), 100);

            const cssProps = cssToSxProps(cssProperty);
            const bw = parseInt(cssProps.borderWidth) || borderWidth;

            // Can play
            if(ReactPlayer.canPlay(url)) {
                // Rendering
                ReactDOM.render((
                    !hidden &&
                    <ReactPlayer
                        // Properties + UI
                        url={url}
                        playing={playing}
                        loop={loop}
                        controls={showControls}
                        volume={clampedVolume / 100}
                        muted={muted}
                        playbackRate={playbackRate}
                        width={width - bw * 2}
                        height={height - bw * 2}
                        progressInterval={progressInterval}
                        playsinline={playsInline}
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

                        // Callbacks
                        onProgress={(state) => {
                            context.getProperty('Played').set(state.played);
                            context.getProperty('Loaded').set(state.loaded);
                            context.getEvent('On Progress').trigger();
                        }}
                        onDuration={(duration) => {
                            context.getProperty('Duration [s]').set(duration);
                            context.getEvent('On Duration').trigger();
                        }}

                    />
                ), elementDom);
            }

            // Can't play
            else {
                ReactDOM.render((
                    !hidden &&
                    <Box sx={{ backgroundColor: 'lightgrey', width: 1, height: 1 }}>
                        <Typography sx={{ color: 'black', padding: 1 }}>
                            <b>Media Player</b><br/>
                            Please enter a playable <code>Media URL</code> for the component to render.<br/>
                            Current value: {url ? url : 'no value'}
                        </Typography>
                    </Box>
                ), elementDom);
            }
        });
    }
}

registerBrick('017db91b13bf1c3027c1', MediaPlayer);
