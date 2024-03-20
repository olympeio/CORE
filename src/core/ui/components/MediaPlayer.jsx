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

 import { registerBrick } from 'olympe';
 import { ReactBrick, useProperty } from 'helpers/react.jsx';
 import { cssToSxProps, ifNotTransparent, validateNumber, validateString } from "helpers/mui";

import ReactPlayer from 'react-player'
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { combineLatestWith } from "rxjs/operators";

/**
 * Provide a Media Player visual component using ReactPlayer
 */
export default class MediaPlayer extends ReactBrick {

    /**
     * @override
     */
    setupExecution($) {
        return $.observe('Hidden').pipe(combineLatestWith($.observe('Media URL', false)));
    }

    /**
     * @override
     */
    updateParent(parent, element) {
        // Allow overflow and center the audio player
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
            const [hidden, url] = props.values;
            const isValidURL = Boolean(validateString(url));

            // Can play
            if(isValidURL && ReactPlayer.canPlay(url)) {
                const validatedVolume = validateNumber(useProperty($, 'Volume [%]'), 'Volume', 'MediaPlayer');
                const clampedVolume = Math.min(Math.max(0, validatedVolume), 100); // 0 <= volume <= 100
                const cssProps = cssToSxProps(useProperty($, 'CSS Property'));
                const bw = parseInt(cssProps.borderWidth) || useProperty($, 'Border Width') || 0;
                return !hidden && (
                    <ReactPlayer
                        // Properties + UI
                        url={url}
                        playing={useProperty($, 'Playing')}
                        loop={useProperty($, 'Loop')}
                        controls={useProperty($, 'Show Controls')}
                        volume={clampedVolume / 100}
                        muted={useProperty($, 'Muted')}
                        playbackRate={useProperty($, 'Playback Rate')}
                        width={(useProperty($, 'Width') || 0) - bw * 2}
                        height={(useProperty($, 'Height') || 0) - bw * 2}
                        progressInterval={useProperty($, 'Progress Interval')}
                        playsinline={useProperty($, 'Plays Inline')}
                        style={{
                            borderStyle: bw > 0 ? 'solid' : 'none',
                            borderWidth: bw + 'px',
                            ...ifNotTransparent('borderColor', useProperty($, 'Border Color')),
                            borderRadius: (useProperty($, 'Border Radius') || 0) + 'px',
                            ...cssProps
                        }}

                        // Events
                        onReady={() => $.trigger('On Ready')}
                        onStart={() => $.trigger('On Start')}
                        onPlay={() => $.trigger('On Play')}
                        onPause={() => $.trigger('On Pause')}
                        onBuffer={() => $.trigger('On Buffer')}
                        onBufferEnd={() => $.trigger('On Buffer End')}
                        onSeek={() => $.trigger('On Seek')}
                        onEnded={() => $.trigger('On Ended')}
                        onError={() => $.trigger('On Error')}

                        // Callbacks
                        onProgress={(state) => {
                            $.set('Played', state.played);
                            $.set('Loaded', state.loaded);
                            $.trigger('On Progress');
                        }}
                        onDuration={(duration) => {
                            $.set('Duration [s]', duration);
                            $.trigger('On Duration');
                        }}

                    />
                );
            }

            // Can't play
            else {
                return !hidden && (
                    <Box sx={{ backgroundColor: 'lightgrey', width: 1, height: 1, overflow: 'hidden' }}>
                        <Typography sx={{ color: 'black', padding: 1 }}>
                            <b>Media Player</b><br/>
                            Please enter a playable <code>Media URL</code> for the component to render.<br/>
                            Current value: {isValidURL ? url : '<no value>'}
                        </Typography>
                    </Box>
                );
            }
        };
    }
}

registerBrick('017db91b13bf1c3027c1', MediaPlayer);
