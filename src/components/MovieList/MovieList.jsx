import { Link } from 'react-router-dom';
import noImageTwo from 'components/img/noImage_two.jpeg';
import { List, MovieItem, ImgWrapper, Poster, Title } from './MovieList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ films, location }) => {
  
  return (
    <List>
      {films.map(film => (
        <MovieItem key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <ImgWrapper>
              <Poster
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                    : noImageTwo
                }
                alt={film.title}
              />
            </ImgWrapper>
            <Title>{film.title}</Title>
          </Link>
        </MovieItem>
      ))}
    </List>
  );
};
export default MovieList;

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object,
};
