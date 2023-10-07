import { getCast } from 'helper/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import nophoto from '../../helper/nophoto.webp';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getCast(id).then(({ cast }) => {
      setCast(cast);
    });
  }, [id]);

  return (
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
  );
};

export default Cast;
