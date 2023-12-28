import React, { useState, useRef, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://klvqrilujppcrjpijrme.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdnFyaWx1anBwY3JqcGlqcm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3MDA0MDYsImV4cCI6MjAxOTI3NjQwNn0.QtBesgwuMoldjeGqSGN-clGAHNMmuhEs7cj5xXJuX0k');

const MusicPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [voulume, setVolume] = useState(0.5);

  const audioRef = useRef(null);

  const fetchSongs = async () => {
    try {
      const { data } = await supabase.from('Music').select('*');
      setSongs(data || []);
    } catch (error) {
      console.error('Error fetching songs:', error.message);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDuration = (e) => {
    setDuration(e.target.duration);
  };

  const handleTimeUpdate = (e) => {
    const current = e.target.currentTime;
    setCurrentTime(current);
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

    const handleVolumeChange = (e) => {
        const value = e.target.value;
        setVolume(value);
        audioRef.current.volume = value;
    }

  return (
    <div className='music-content-player'>
      <div className='music-player'>
        <div className='music-info'>
          <h4>{songs.length > 0 && songs[currentSongIndex].title} - {songs.length > 0 && songs[currentSongIndex].artist}</h4>
        </div>
        <div className='music-img'>
        {songs.length > 0 && (
            <img src={songs[currentSongIndex]?.image} alt={songs.title} />
        )}
        </div>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className='duration'>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <audio
          ref={audioRef}
          src={songs.length > 0 && songs[currentSongIndex].url}
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
          {
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={voulume}
                    onChange={handleVolumeChange}
                />
          }
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
