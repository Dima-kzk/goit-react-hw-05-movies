import List from 'components/List/List';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovieByTitle } from 'helper/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loadet';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  let filmQuery = searchParam.get('query') ?? '';

  function handleSearchForm(q) {
    setSearchParam({ query: q });
    getMovieByTitle(q)
      .then(({ results }) => {
        setResults(results);
      })
      .catch(error => setError(true))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (filmQuery === '') {
      return;
    }
    getMovieByTitle(filmQuery)
      .then(({ results }) => {
        setResults(results);
      })
      .catch(error => setError(true))
      .finally(() => setIsLoading(false));
  }, [filmQuery]);

  return (
    <>
      <h1>Movies</h1>
      <SearchForm submit={handleSearchForm} />
      {isLoading && filmQuery && <Loader />}
      {results.length > 0 && <List results={results} parent="movies" />}
      {error && <p>Something went wrong...</p>}
    </>
  );
};

export default Movies;
