import List from 'components/List/List';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMovieByTitle } from 'helper/api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  // const [query, setQuery] = useState('');
  // const query = searchParam.get('query');

  function handleSearchForm(q) {
    getMovieByTitle(q).then(({ results }) => {
      setResults(results);
    });
  }

  useEffect(() => {
    if (searchParam.get('query') === null) {
      return;
    }
    getMovieByTitle(searchParam.get('query')).then(({ results }) => {
      setResults(results);
    });
  }, []);

  function handleChange() {}

  return (
    <>
      <h1>Movies</h1>
      <SearchForm submit={handleSearchForm} changeParam={setSearchParam} />
      {results.length === 0 ? (
        <></>
      ) : (
        <List results={results} parent="movies" />
      )}
    </>
  );
};

export default Movies;
