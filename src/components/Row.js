import React from 'react';
import "./Row.scss";
import { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ title, Url, isPoster }) => {

  const baseUrl = "https://image.tmdb.org/t/p/original"

  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("");


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Url)
      setMovies(request.data.results)
    }
    fetchData()
  }, [Url])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log(movies)
  
  const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      
      movieTrailer(movie?.title || movie?.name || movie?.original_title)
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
         
        }).catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map(movie => (
          <div key={movie.id}>

            {isPoster ? (
              <img
                src={`${baseUrl}/${movie?.poster_path}`}
                onClick={() => handleClick(movie)}
                className="row__image"
                alt={movie?.title || movie?.name || movie?.original_title}
              />
            ) : (
              <img
                src={`${baseUrl}/${movie.backdrop_path}`}
                onClick={() => handleClick(movie)}
                className="row__image"
                alt={movie?.title || movie?.name || movie?.original_title}
              />
            )}

          </div>
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
       
      </div>
    </div>
  )
}

export default Row;