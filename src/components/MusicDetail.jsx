import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import useClient from '../hooks/sb-hooks';
import MusicPlayer from './MusicPlayer';

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
            <MusicPlayer song={song} />
            <div className="back-link-content">
                <Link to={`/`} className="back-link">
                    <div className="back">
                        <h3>Revenir à l'accueil</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MusicDetail;