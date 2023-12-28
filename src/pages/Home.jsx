import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import ListMusic from '../components/ListMusic';

const Home = () => {
    return (
        <div className='content'>
            <ListMusic />
            <MusicPlayer />
        </div>
    );
};

export default Home;