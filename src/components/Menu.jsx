import React, { useState, useEffect } from 'react';
import useClient from '../hooks/sb-hooks';

const Menu = () => {
  const supabase = useClient();
  const [search, setSearch] = useState('');
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

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
    // Filter songs based on the search term only when there is a search term
    if (search.trim() !== '') {
      const filteredResults = songs.filter((song) =>
        song.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredSongs(filteredResults);
    } else {
      // Clear filtered songs when there is no search term
      setFilteredSongs([]);
    }
  }, [search, songs]);

  return (
    <div className='menu-content'>
      <div className="menu-border">
        <div className="menu">
          <input
            type="text"
            placeholder='Recherchez un titre...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <div className="result-search">
            {filteredSongs.map((song) => (
              <div className="song-search" key={song.id}>
                <div className="song-img">
                    <img src={song.image} alt={song.title} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'song_cover.png';
                    }}/>
                </div>
                <div className="song-info">
                    <div className="song-title">{song.title}</div>
                    <div className="song-artist">{song.artist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
