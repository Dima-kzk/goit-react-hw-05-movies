import Loader from 'components/Loader/Loadet';
import { getReviews } from 'helper/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getReviews(id)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (reviews.length === 0)
    return <p>We don't have any reviews for this movie</p>;

  return (
    <>
      {error && <p>Something went wrong...</p>}
      {isLoading && <Loader />}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(e => (
            <li key={e.id}>
              <h2>{e.author}</h2>
              <p>{e.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
