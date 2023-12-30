import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import ListMusic from '../components/ListMusic';
import Menu from '../components/Menu';
import Header from '../pages/Header';

const Home = () => {
    return (
        <div className='content'>
            <Menu />
            <ListMusic />
            <Header />
            <MusicPlayer />
        </div>
    );
};

export default Home;