import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header-content'>
                    <nav>
                        <ul>
                            <li>
                                <img src='musique.png' alt='logo' />
                            </li>
                            <li>
                                <Link to='/'>Accueil</Link>
                            </li>
                            <li>
                                <Link to='/listmusic'>Musique</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <span className="bottom-line"></span>
            </div>
        </>
    );
};

export default Header;