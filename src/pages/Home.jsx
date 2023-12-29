import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import ListMusic from '../components/ListMusic';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div className='content'>
            <Menu />
            <ListMusic />
            <MusicPlayer />
        </div>
    );
};

export default Home;