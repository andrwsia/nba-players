import React from 'react';
import './NavBar.css';
import SearchInput from '../search-input/SearchInput';

const NavBar = ({ searchChange }) => {
    return (
        <nav className="flex justify-between p-4 items-center">
            <div className="nba-logo">
                <img alt="NBA Logo" src='https://cdn.nba.com/logos/leagues/L/logo-nba.svg'/>
            </div>
            <SearchInput searchChange={searchChange}/>
        </nav>
    );
};

export default NavBar;