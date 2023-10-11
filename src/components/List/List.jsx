import { Link, useLocation } from 'react-router-dom';

const List = ({ results }) => {
  const location = useLocation();

  return (
    <ul>
      {results.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title ? title : name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
