const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWI5ZTVlMzYwZTAxNWVkMWQzYzY0YjQxODhkZTAwYyIsInN1YiI6IjY1MTM1Mjk1OGUyYmE2MDE0MTQ3YjlhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FL3MTqJxUdFIM-exOi-8MlaoT9FaRdlODK5R-QXq6co',
  },
};

async function getData(url, options) {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getTrending() {
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';

  return await getData(url, options);
}

export async function getMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  return await getData(url, options);
}

export async function getCast(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  return await getData(url, options);
}

export async function getReviews(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`;
  return await getData(url, options);
}

export async function getMovieByTitle(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US`;
  return await getData(url, options);
}
