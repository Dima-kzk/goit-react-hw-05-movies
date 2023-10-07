import { getReviews } from 'helper/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(id).then(({ results }) => {
      setReviews(results);
    });
  }, [id]);

  if (reviews.length === 0)
    return <p>We don't have any reviews for this movie</p>;

  return (
    <>
      <ul>
        {reviews.map(e => (
          <li key={e.id}>
            <h2>{e.author}</h2>
            <p>{e.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
