import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieDetails } from '../helper/api';
import { useEffect, useState } from 'react';
import Genres from 'components/Genres/Genres';
import BackLink from 'components/BackLink/BackLink';
import { FilmInfo, FilmInfoContainer } from './MovieDetails.styled';
import { TailSpin } from 'react-loader-spinner';

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(id)
      .then(data => setData(data))
      .catch(error => setError(error));
  }, [id]);

  if (data.success === false) {
    return <p>{data.status_message}</p>;
  }

  if (error) console.log(error);

  return (
    <>
      <BackLink to={backLink}> Back</BackLink>
      <FilmInfoContainer>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w300/${data.poster_path}`
              : 'https://dummyimage.com/300x450'
          }
          alt=""
        />

        <FilmInfo>
          <h1>
            {data.title ? data.title : data.name}
            {isNaN(new Date(data.release_date).getFullYear())
              ? ''
              : `(${new Date(data.release_date).getFullYear()})`}
          </h1>
          <p>
            User Score:{' '}
            {isNaN(data.vote_average) ? '' : Math.round(data.vote_average * 10)}
            %
          </p>
          <h2>overview</h2>
          <p>{data.overview}</p>
          <h2>Genres</h2>
          <Genres genres={data.genres} />
        </FilmInfo>
      </FilmInfoContainer>

      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`cast`} state={{ from: backLink }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`reviews`} state={{ from: backLink }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense
        fallback={
          <TailSpin
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
