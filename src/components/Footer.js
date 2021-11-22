import React from 'react';
import "./Footer.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';




const Footer = () => {
    return (
        <footer className="footer"> 
            <div className="container">
                <div className="footer__socials">
                    <a href="https://www.facebook.com/netflixfrance/" className="footer__social">
                        <FacebookIcon
                        />            </a>
                    <a href="https://twitter.com/NetflixFR?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="footer__social">
                        <TwitterIcon
                        />            </a>
                    <a href="https://www.instagram.com/netflixfr/?hl=fr" className="footer__social">
                        <InstagramIcon
                        />            </a>
                    <a href="https://www.youtube.com/channel/UCroNr00O68n25IqSNapMK8w" className="footer__social">
                        <YouTubeIcon
                        />            </a>
                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">Lien footer</a>
                    </li>

                </ul>
                <div className="footer__copy">Netflix Clone - tous droits réservés</div>

            </div>

        </footer>
    );
};

export default Footer;