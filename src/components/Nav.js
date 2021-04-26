import React from 'react';
import "./Nav.scss";
import {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RedeemIcon from '@material-ui/icons/Redeem';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Nav = () => {
    //creation  de l'effet de transition de la navBar
    const [navBlack, setNavBlack] = useState(false);
    //creation du menu burger
    const [toggleMenu, setToggleMenu] = useState(false);

     //creation du scroll vertical si le scroll est surperieur a 100 alors (?) c'est vrai sinon (:) c'est faux
     // donc si c'est true ca affiche la nav en noir sinon elle est transparente
     const transitionNav = () => {
         window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
        };
        //on vient utiliser le usetate avect un evenement au scroll qui viendra utiliser la constante transitionNav
    useState(() => {
        document.addEventListener("scroll", transitionNav);
    });
    console.log(navBlack)

    const handleClick = () => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    };



    return (
        // si la navBar est a true et que toggle est actif alors la nav--black sinon je mets la nav-transparent
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
            
            <button className="nav__burger" onClick={handleClick}>
                <MenuIcon/>
            </button>

            <img src="./images/Logo-Netflix-1.png" className="nav__logo" alt="netflix-Logo" />

            <nav className="nav__links">
                <a href="/" className="nav__link">Accueil</a>
                <a href="/" className="nav__link">Séries</a>
                <a href="/" className="nav__link">Films</a>
            </nav>
            <div className="nav__actions">
                <a href="/" className="nav__action">
                    <SearchIcon />
                </a>
                <a href="/" className="nav__action">DiRECT</a>
                <a href="/" className="nav__action">
                    <RedeemIcon />
                </a>
                <a href="/" className="nav__action">
                    <NotificationsIcon />
                </a>
                <a href="/" className="nav__action">
                    <img src="./images/Netflix-avatar.png" width="50" alt="avatar" /></a>
            </div>
        </div>
    );
};

export default Nav;