import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovie } from 'components/services/FathApi';
import MovieList from 'components/MovieList/MovieList';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movies') ?? ''; 
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      if (!query) return;

      try {
        const result = await getSearchMovie(query);
        setMovies(result.results);
      } catch (error) {
        throw new Error('Ooops... I did it again');
      }
    };
    getMovies();
  }, [query]);
  return (
    <>
      <Searchbar setSearch={setSearchParams} />
      {movies.length > 0 && (
        <MovieList films={movies} pathTo="" location={location} />
      )}
      {query && movies.length === 0 && <h2>Notefound</h2>}
      
    </>
  );
};
export default Movies;
