import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useClient from '../hooks/sb-hooks';

const ListMusic = () => {

    const supabase = useClient();
    const [songs, setSongs] = useState([]);

    const fetchSongs = async () => {
        try {
            const { data } = await supabase.from('Music').select('*');
            setSongs(data || []);
        } catch (error) {
            console.error('Error fetching songs:', error.message);
        }
    }

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div className='songs-content'>
            <div className="song-border">
                    {songs.map((song, index) => (
                        <Link to={`/musicdetail/${song.id}`} className="song-link" key={index}>
                            <div className="song">
                                <div className="song-img">
                                    <img src={song.image} alt={song.title} onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'song_cover.png';
                                    }} />
                                </div>
                                <div className="song-info">
                                    <h3>{song.title}</h3>
                                    <h4>{song.artist}</h4>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default ListMusic;