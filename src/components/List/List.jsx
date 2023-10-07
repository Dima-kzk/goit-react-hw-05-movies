import { Link, useLocation } from 'react-router-dom';

const List = ({ results, parent }) => {
  let path = null;
  const location = useLocation();
  switch (parent) {
    case 'home':
      path = 'movies/';
      break;
    case 'movies':
      path = '';

      break;
    default:
      path = 'movies/';
  }

  return (
    <ul>
      {results.map(res => {
        return (
          <li key={res.id}>
            <Link to={path + res.id} state={{ from: location }}>
              {res.title ? res.title : res.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
