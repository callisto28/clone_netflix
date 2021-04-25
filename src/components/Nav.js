import React from 'react';
import "./Nav.scss";

const Nav = () => {
    return (
        <div className="nav nav--black">
            <button className="nav___burger">button</button>

            <img src="./images/Logo-Netflix-1.png" width="350" alt="netflix-Logo" />

            <nav className="nav__links">
                <a href="/" className="nav__link">Accueil</a>
                <a href="/" className="nav__link">Séries</a>
                <a href="/" className="nav__link">Films</a>
            </nav>
            <div className="nav__actions">
                <a href="/" className="nav__action">search</a>
                <a href="/" className="nav__action">DiRECT</a>
                <a href="/" className="nav__action">Gift</a>
                <a href="/" className="nav__action">Notif</a>
                <a href="/" className="nav__action">
                    <img src="./images/Netflix-avatar.png" width="50" alt="avatar" /></a>
            </div>
        </div>
    );
};

export default Nav;