import List from 'components/List/List';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovieByTitle } from 'helper/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [error, setError] = useState(false);

  let filmQuery = searchParam.get('query') ?? '';

  function handleSearchForm(q) {
    setSearchParam({ query: q });
    getMovieByTitle(q)
      .then(({ results }) => {
        setResults(results);
      })
      .catch(error => setError(error));
  }

  useEffect(() => {
    if (filmQuery === '') {
      return;
    }
    getMovieByTitle(filmQuery)
      .then(({ results }) => {
        setResults(results);
      })
      .catch(error => setError(error));
  }, [filmQuery]);

  if (error) console.log(error);

  return (
    <>
      <h1>Movies</h1>
      <SearchForm submit={handleSearchForm} />
      {results.length === 0 ? (
        <></>
      ) : (
        <List results={results} parent="movies" />
      )}
    </>
  );
};

export default Movies;
