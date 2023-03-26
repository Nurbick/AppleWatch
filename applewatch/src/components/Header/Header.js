import React from 'react';
import Logo from '../../assets/logo.svg'
import './header.scss'


const Header = () => {
    return (
        <header className="header">
<div className="container">
    <nav className="header__nav">
        <h1 className="header__logo">
            <img src={Logo} alt="Apple Watch"/>
        </h1>
        <div className="header__links">
            <a href="#" className="header__link">Design</a>
            <a href="#" className="header__link">Health</a>
            <a href="#" className="header__link">Workout</a>
            <a href="#" className="header__link">Activity</a>
            <a href="#" className="header__link">Connect</a>
        </div>
    </nav>
</div>
        </header>
    );
};

export default Header;