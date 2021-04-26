//b0b474f3b6b405e715c19f3df2dad99f
//https://api.themoviedb.org/3/



const API_KEY = "b0b474f3b6b405e715c19f3df2dad99f";
const BASE_URL = "https://api.themoviedb.org/3";

const request = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=1650`,
  fetchDocumentaries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&width_genres=`,

}

export default request;