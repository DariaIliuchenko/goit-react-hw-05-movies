import axios from "axios";

const KEY = "a853a8d0502c53b63fcd011b60b0bc46";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = { api_key: KEY};

export async function  fetchGetTrendMovies() {
    const response = await axios("trending/movie/day")
    return response.data;
}
export async function fetchSearchMovieByWord(query = '') {
    const response = await axios.get(`search/movie?query=${query}`);
    return response.data.results;
  
}
export async function fetchMovieById(movieId) {
    const response = await axios.get(`/movie/${movieId}`)
    return response.data
}
 

 
export async function fetchMovieCast(movie_id) {
    const response = await axios.get(`movie/${movie_id}/credits`)
    return response.data
}
 
export async function fetchMovieReviews(movie_id) {
    const response = await axios.get(`movie/${movie_id}/reviews`)
    return response.data
 }