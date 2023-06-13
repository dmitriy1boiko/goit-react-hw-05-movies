import axios from 'axios';

const KEY = '20bc4955509e6b4b932a7067ed9c4448';
const URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const apiConfig = `${URL}/trending/movie/day?api_key=${KEY}`;
  const response = await axios.get(apiConfig);
  return response.data;
};

export const getMovieDetails = async movieId => {
  const apiConfig = `${URL}/movie/${movieId}?api_key=${KEY}`;
  const response = await axios.get(apiConfig);
  // console.log(response.data);
  return response.data;
};

export const getMovieCast = async movieId => {
  const apiConfig = `${URL}/movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(apiConfig);
  // console.log(data.cast);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const apiConfig = `${URL}/movie/${movieId}/reviews?api_key=${KEY}`;
  const response = await axios.get(apiConfig);
  // console.log(response);
  return response.data;
};

export const getSearchMovie = async query => {
  const apiConfig = `${URL}/search/movie?api_key=${KEY}&query=${query}&page=1`;
  const {data} = await axios.get(apiConfig);
  return data;
};
