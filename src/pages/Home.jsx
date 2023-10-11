import { getTrending } from '../helper/api';
import { useEffect, useState } from 'react';

import List from 'components/List/List';
import Loader from 'components/Loader/Loadet';

const Home = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTrending()
      .then(data => setResults(data.results))
      .catch(error => setError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Trendinh today</h1>
      {error && <p>Something went wrong...</p>}
      {isLoading && <Loader />}
      {results.length > 0 && <List results={results} />}
    </>
  );
};

export default Home;
