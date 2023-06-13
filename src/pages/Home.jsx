import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getPopularMovies } from 'components/services/FathApi';
import MovieList from 'components/MovieList/MovieList';
import { HomeTitle } from './Home.styled';
const Home = () => {
  const [films, setFilms] = useState([]);
   const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPopularMovies();
        setFilms(response.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      {films.length !== 0 && <MovieList films={films} location={location} />}
    </>
  );
};
export default Home;
