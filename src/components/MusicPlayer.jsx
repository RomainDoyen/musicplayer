import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const songs = [
        { title: 'Music Title 1', artist: 'Artist 1', url: 'url1.mp3' },
        { title: 'Music Title 2', artist: 'Artist 2', url: 'url2.mp3' },
    ];

    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleDuration = (e) => {
        setDuration(e.target.duration);
    };

    const handleTimeUpdate = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent / roundedDuration) * 100);
        setProgress(animation);
    };

    const handleProgressClick = (e) => {
        const width = e.target.clientWidth;
        const clickX = e.nativeEvent.offsetX;
        const duration = audioRef.current.duration;
        audioRef.current.currentTime = (clickX / width) * duration;
    };

    const handleNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const handlePrevSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    };

    return (
        <div className='music-content-player'>
            <div className='music-player'>
                <div className='music-info'>
                    <h4>{songs[currentSongIndex].title} - {songs[currentSongIndex].artist}</h4>
                </div>
                <div className='music-img'>
                    <img src='https://source.unsplash.com/random/100x100' alt='' />
                </div>
                <div className="progress-bar" onClick={handleProgressClick}>
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <div className='duration'>
                    {duration ? formatTime(duration) : '0:00'}
                </div>
                <audio
                    ref={audioRef}
                    src={songs[currentSongIndex].url}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedData={handleDuration}
                ></audio>
                <div className='music-control'>
                    <i className='fas fa-backward' onClick={handlePrevSong}></i>
                    {isPlaying ? (
                        <i className='fas fa-pause' onClick={togglePlay}></i>
                    ) : (
                        <i className='fas fa-play' onClick={togglePlay}></i>
                    )}
                    <i className='fas fa-forward' onClick={handleNextSong}></i>
                </div>
            </div>
        </div>
    );
};

// Fonction utilitaire pour formater le temps en minutes:secondes
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MusicPlayer;
