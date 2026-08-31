const API_KEY = "c5f78a4d87adba87fd0fe31ddb5809b5"; // TMDB API key එක store කරයි
const BASE_URL = "https://api.themoviedb.org/3"; // TMDB base URL එක define කරයි

export const getPopularMovies = async () => {
  // popular movies fetch කරන function
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); // popular movie API call එක execute කරයි
  const data = await response.json(); // response body JSON format එක convert කරයි
  return data.results; // movie list array return කරයි
};

export const searchMovies = async (query) => {
  // search query එක based movie fetch කරන function
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  ); // search request URL එක build කර API to call කරයි
  const data = await response.json(); // returned response JSON read කරයි
  return data.results; // matching movie results return කරයි
};
