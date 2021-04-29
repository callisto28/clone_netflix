import React from 'react';
import { useState, useEffect } from 'react';
import "./Banner.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import axios from "axios";
import request from "../utils/Api";
import Quickview from './Quickview';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const Banner = () => {

    const [movies, setMovies] = useState([]);
    const [popup, setPopup] = useState([false]);
    const [trailerUrl, setTrailerUrl] = useState("");

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
   
    console.log(popup);
   

    const bannerStyle = {
        backgroundImage :`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
    };

    const opts = {
        height: "490",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      console.log(movies);

   
    const handleClick = (movies) => {
        console.table(movies?.title)
        if (trailerUrl) {
   
          setTrailerUrl('')
        } else {
           
          movieTrailer(movies?.title || movies?.name || movies?.original_title)
            .then(url => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
             
            }).catch((error) => console.log(error));
            
        }
      }

    
    return (
        <header className="banner" style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title"> {movies?.title || movies?.original_title || movies?.name} </h1>
                <p className="banner__description">
                   {truncateText (movies?.overview,100)}
                    </p>
                   
                <div className="banner__buttons">
          
                    <button className="banner__button banner__button--play" onClick={() => handleClick(movies)} >
                        <PlayArrowIcon /> Lecture
                       {console.log("test", movies)}
              </button>
              
       
                    <button className="banner__button" onClick={handlePopup}>
                        <HelpOutlineIcon /> Plus d'info</button>
                </div>
               

            </div>
            <div className='video' style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        
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

