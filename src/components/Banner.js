import React from 'react';
import { useState, useEffect } from 'react';
import "./Banner.scss";
import {Link} from "react-router-dom";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import axios from "axios";
import request from "../utils/Api";
import Quickview from './Quickview';

const Banner = () => {

    const [movies, setMovies] = useState([]);

    const [popup, setPopup] = useState([false]);

    function handlePopup () {
        popup ? setPopup(false) : setPopup(true);
        
    }


    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(request.fetchTrending);

            // on va venir lancer une recherche aléatoire d'un film
            setMovies(
                requests.data.results[
                Math.floor(Math.random() * requests.data.results.length - 1)
            ]);
        }
        fetchData();
    }, []);

    function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n -1) + "..." : "No description";        
    };
    console.log(movies);
    console.log(popup);
   

    const bannerStyle = {
        backgroundImage :`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
    };

    
    return (
        <header className="banner" style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title"> {movies?.title || movies?.original_title || movies?.name} </h1>
                <p className="banner__description">
                   {truncateText (movies?.overview,100)}
                    </p>
                <div className="banner__buttons">
                <Link to = {`video/${movies?.id}`}>
                    <button className="banner__button banner__button--play">
                        <PlayArrowIcon /> Lecture
                        
              </button>
              </Link>
                    <button className="banner__button" onClick={handlePopup}>
                        <HelpOutlineIcon /> Plus d'info</button>
                </div>

            </div>
                    <Quickview
                    bannerStyle={bannerStyle}
                    movies={movies}                    
                    popupStatus={popup}
                    popup={handlePopup}
                    />
        </header>


    );
};

export default Banner;

