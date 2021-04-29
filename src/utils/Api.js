//b0b474f3b6b405e715c19f3df2dad99f
//https://api.themoviedb.org/3/



const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

const request = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  // fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `${BASE_URL}/discover/movie?sort_by=popularity.desc?api_key=${API_KEY}&language=en-US`,
  fetchThrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchKidsSeries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchSeriesTV: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765`,

}
export default request;