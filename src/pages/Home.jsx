import { Link } from 'react-router-dom';
import { getTrending } from '../helper/api';
import { useEffect, useState } from 'react';
import List from 'components/List/List';

const Home = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => setResults(data.results))
      .catch(error => setError(error));
  }, []);

  return (
    <>
      <h1>Trendinh today</h1>
      <List results={results} parent="home" />
    </>
  );
};

export default Home;
