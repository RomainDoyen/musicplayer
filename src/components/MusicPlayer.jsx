import React from 'react';

const MusicPlayer = () => {
    return (
        <>
            <div className='music-content-player'>
                <div className='music-player'>
                    <div className='music-info'>
                        <h4>Music Title - Artist Name</h4>
                    </div>
                    <div className='music-img'>
                        <img src='https://source.unsplash.com/random/100x100' alt='' />
                    </div>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                    <div className='music-control'>
                        <i className='fas fa-backward'></i>
                        <i className='fas fa-play'></i>
                        <i className='fas fa-forward'></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MusicPlayer;
