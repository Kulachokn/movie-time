// Themoviedb API
//  key = "6198a531689190f0901c4d490477bd53";

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/genre/movie/list?api_key=6198a531689190f0901c4d490477bd53&language=en-US

import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6198a531689190f0901c4d490477bd53';

export async function fetchTrendingMovies() {
  const request = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  console.log(request.data);
  return request.data;
}

export async function fetchMoviesByQuery(query) {
  const request = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`);
  // console.log(request.data);
  return request.data;
}

export async function fetchMovieGenre() {
  const result = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
  const genres = await result.data.genres;
  // console.log(genres);
  return genres;
}