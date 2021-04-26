import React from 'react';
import "./Row.scss";
import {useEffect, useState} from 'react';
import axios from 'axios';


const Row = ({title, Url, isPoster}) => {

    const baseUrl = "https://image.tmdb.org/t/p/original"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Url)
      setMovies(request.data.results)
    }
    fetchData()
  }, [Url])

  console.log(movies)

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map(movie => (
          <div key={movie.id}>
            {/* <Link to={`/video/${movie.id}`}> */}
              {isPoster ? (
                <img
                  src={`${baseUrl}/${movie.poster_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.name || movie?.original_title}
                />
              ) : (
                <img
                  src={`${baseUrl}/${movie.backdrop_path}`}
                  className="row__image"
                  alt={movie?.title || movie?.name || movie?.original_title}
                />
              )}
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row;