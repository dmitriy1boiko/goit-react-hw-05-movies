import {  Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'components/services/FathApi';
import noImage from '../components/img/noImage_two.jpeg';
import { Container, ImgWrapper, Poster, Text, Wrapper, Description, LinkWrapper, ActiveNavLink, LinkBtn, BtnBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const results = await getMovieDetails(movieId);
        if (!results) {
          return toast.error('No Movie Details');
        }
        setMovieDetails(results);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      } finally {
        setIsLoading(false);
      }
    };

    getDetails();
  }, [movieId]);

  const getYear = new Date(movieDetails?.release_date).getFullYear();
  return (
    <Container>
    <BtnBack><LinkBtn to={backLink.current}>Back</LinkBtn></BtnBack>
      
      {isLoading && <Loader />}
      {movieDetails && (
        <><Wrapper>
          <ImgWrapper>
            <Poster
              src={
                movieDetails?.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movieDetails?.poster_path}`
                  : noImage
              }
              alt={movieDetails?.title}
            />
          </ImgWrapper>
          <Description>
            <Text>
              {movieDetails?.title
                ? `${movieDetails?.title} (${getYear})`
                : `Name of movie not found`}
            </Text>
            <Text>
              User Score: {(movieDetails?.vote_average * 10).toFixed(0)}%
            </Text>
            <h2>Overview</h2>
            <Text>{movieDetails?.overview}</Text>
            <h2>Genres</h2>
            <Text>
              {movieDetails?.genres &&
                movieDetails?.genres.map(genre => genre.name).join(', ')}
            </Text>
          
          <div>
            <h2>More information</h2>
            <LinkWrapper>
              <li>
                <ActiveNavLink to="cast">Cast</ActiveNavLink>
              </li>
              <li>
                <ActiveNavLink to="reviews">Reviews</ActiveNavLink>
              </li>
            </LinkWrapper>
          </div>
          </Description>
          </Wrapper>
          <Outlet />
        </>
      )}
    </Container>
  );
};
export default MovieDetails;
