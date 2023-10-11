import { getCast } from 'helper/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import nophoto from '../../helper/nophoto.webp';
import Loader from 'components/Loader/Loadet';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCast(id)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {error && <p>Something went wrong...</p>}
      {isLoading && <Loader />}
      {cast.length > 0 && (
        <ul>
          {cast.map(e => (
            <li key={e.id}>
              <img
                src={
                  e.profile_path === null || e.profile_path === undefined
                    ? `${nophoto}`
                    : `https://image.tmdb.org/t/p/w200/${e.profile_path}`
                }
                alt=""
                width="100"
              />
              <p>{e.name}</p>
              <p>Character: {e.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
