import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "components/services/FathApi";
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const Reviews =()=>{
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovieReviews(movieId);
        if (!results) {
          return toast.error('No Cast Information');
        }
        setReviews(results);
      } catch (error) {
        toast.error('Sorry, something went wrong...Please, try again');
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);
return(<>
  {isLoading && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, We don't have any reviews for this movie.</p>
      )}
</>);
};
export default Reviews;

