// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/genre/movie/list?api_key=6198a531689190f0901c4d490477bd53&language=en-US

import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6198a531689190f0901c4d490477bd53';

export default class ApiService {
  constructor() {
    this.searchFilm = '';
    this.searchFilmId = '';
    this.pages = 1;
    this.totalResults = 0;
    this.totalPages = 0;
  }

  fetchFilmSearch = async searchFilm => {
    // spanEl.classList.add('is-hidden');

    const fetch = await axios({
      url: `search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchFilm}&page=${this.pages}&include_adult=false`,
      baseURL: BASE_URL,
    }).then(response => {
      this.plusPage();
      this.minusPage();
      // if (response.data.total_results === 0) {
      //   spanEl.classList.remove('is-hidden')
      // }
      return response.data;
    }).catch(error => {
        // spanEl.classList.remove('is-hidden');
      console.log(error);
      }
    );
    return fetch;
  };

  fetchGenresMovie = async () => {
    return await axios({
      url: `genre/movie/list?api_key=${API_KEY}&language=en-US`,
      baseURL: BASE_URL,
    }).then(response => {
      console.log(response.data)
      return response.data;
    });
  };

  fetchFilmId = async filmId => {
    const fetch = await axios({
      url: `movie/${filmId}?api_key=${API_KEY}&language=en-US`,
      baseURL: BASE_URL,
    }).then(response => {
      this.resetFilmId();
      return response.data;
    });
    return fetch;
  };


  fetchFilmPopular = async () => {
    const fetch = await axios({
      url: `trending/movie/week?api_key=${API_KEY}&page=${this.pages}`,
      baseURL: BASE_URL,
    }).then(response => {
      return response.data;
    });
    return fetch;
  };

  plusPage() {
    if (this.pages !== this.totalPages) {
      this.pages += 1;
    }
  }

  minusPage() {
    if (this.pages > 1) {
      this.pages -= 1;
    }
  }

  resetPages() {
    this.pages = 1;
  }

  resetFilmId() {
    this.searchFilmId = '';
  }

  setTotalRes(newTotalResults) {
    return (this.totalResults = newTotalResults);
  }

  getTotalRes() {
    return this.totalResults;
  }

  setTotalPages(newTotalPages) {
    return (this.totalPages = newTotalPages);
  }

  getTotalPages() {
    return this.totalPages;
  }

  get film() {
    return this.searchFilm;
  }

  set film(newFilm) {
    this.searchFilm = newFilm;
  }

  get page() {
    return this.pages;
  }

  set page(newPage) {
    this.pages = newPage;
  }

  get filmId() {
    return this.searchFilmId;
  }

  set filmId(newFilmId) {
    this.searchFilmId = newFilmId;
  }
}






// export async function fetchTrendingMovies() {
//   const request = await axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
//   console.log(request.data);
//   return request.data;
// }
//
// export async function fetchMoviesByQuery(query) {
//   const request = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`);
//   // console.log(request.data);
//   return request.data;
// }
//
// export async function fetchMovieGenre() {
//   const result = await axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
//   const genres = await result.data.genres;
//   // console.log(genres);
//   return genres;
// }