import { useCallback, useEffect, useRef, useState } from 'react';

import { tracks } from '../../data/music';

// Audio state lives outside the visual controls. The JBL model and its 3D
// panel can therefore control the same player without a floating HTML bar.
export function useMusicPlayer() {
    const audio = useRef();
    const isPlayingRef = useRef(false);
    const shouldPlayAfterTrackChange = useRef(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const track = tracks[trackIndex];

    const play = useCallback(() => {
        audio.current?.play().catch(() => setIsPlaying(false));
    }, []);
    const pause = useCallback(() => audio.current?.pause(), []);
    const togglePlayback = useCallback(() => {
        if (audio.current?.paused) play();
        else pause();
    }, [pause, play]);
    const changeTrack = useCallback((direction, autoplay = isPlayingRef.current) => {
        shouldPlayAfterTrackChange.current = autoplay;
        setTrackIndex((current) => (current + direction + tracks.length) % tracks.length);
    }, []);
    const nextTrack = useCallback(() => changeTrack(1), [changeTrack]);
    const previousTrack = useCallback(() => changeTrack(-1), [changeTrack]);

    useEffect(() => {
        const player = audio.current;
        if (!player) return;
        player.pause();
        player.load();
        if (shouldPlayAfterTrackChange.current) play();
        shouldPlayAfterTrackChange.current = false;
    }, [play, trackIndex]);

    const audioElement = <audio
        onEnded={() => changeTrack(1, true)}
        onPause={() => { isPlayingRef.current = false; setIsPlaying(false); }}
        onPlay={() => { isPlayingRef.current = true; setIsPlaying(true); }}
        ref={audio}
        src={track.src}
    />;

    return { audioElement, isPlaying, nextTrack, pause, play, previousTrack, track, togglePlayback };
}
