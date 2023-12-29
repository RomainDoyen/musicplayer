import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import useClient from '../hooks/sb-hooks';

const MusicDetail = () => {
    const { id } = useParams();
    const supabase = useClient();
    const [song, setSong] = useState([]);

    const fetchSongs = async () => {
        try {
          const { data } = await supabase.from('Music').select('*').eq('id', id).single();
          setSong(data || []);
        } catch (error) {
          console.error('Error fetching songs:', error.message);
        }
      };
    
      useEffect(() => {
        fetchSongs();
      }, [id]);

    return (
        <div className='music-detail'>
            <div className="music-detail-border">
                <div className="music-detail-img">
                    <img src={song.image} alt={song.title} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'song_cover.png';
                    }} />
                </div>
                <div className="music-detail-info">
                    <h3>{song.title}</h3>
                    <h4>{song.artist}</h4>
                </div>
                <div className="music-detail-player">
                    <audio controls>
                        <source src={song.url} type="audio/mpeg" />
                    </audio>
                </div>
            </div>
            <Link to={`/`} className="back-link">
                <div className="back">
                    <h3>Revenir à l'accueil</h3>
                </div>
            </Link>
        </div>
    );
};

export default MusicDetail;