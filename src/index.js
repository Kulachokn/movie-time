import './sass/main.scss';
import {fetchTrendingMovies, fetchMoviesByQuery, fetchMovieGenre} from './js/api-services';
import filmCard from './templates/film-card.hbs';

const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('#searchInput');
const form = document.querySelector('#search-form');

const BASEImgURL = 'https://image.tmdb.org/t/p/';
const SIZE = 'w500';
const defaultImg = '/xJWLN0r3hBFlpQyFzfUHYkh0JeM.jpg';
// IMG__URL = 'https://image.tmdb.org/t/p/w500';
// "${BASEimgURL}${SIZE}${
// movie.poster_path ? movie.poster_path : defaultImg
// }"


document.addEventListener('DOMContentLoaded', fetchTrendsGallery);
form.addEventListener('submit', fetchSearchMovie);

async function fetchTrendsGallery() {
  try {
    const { results: movies} = await fetchTrendingMovies();
    const genres = await fetchMovieGenre();
    console.log(genres);
    const newMovies = movies.map(el => {
      console.log(el.genre_ids);
      const arr = el.genre_ids.map(genre => {
        // console.log(genre);
        return genres.find(el => el.id === genre).name;
      });

      return { ...el, genre: arr };
    });
    gallery.insertAdjacentHTML('beforeend', filmCard(movies));
  } catch (error) {
    console.error(error);
  }
}

async function fetchSearchMovie(e) {
  e.preventDefault();
  try {
    const query = searchInput.value.trim();
    const {results: movies} = await fetchMoviesByQuery(query);
    clear();
    gallery.insertAdjacentHTML('beforeend', filmCard(movies))
  } catch (error) {
    console.error(error);
  }
}

//вспомогательные

function clear() {
  gallery.innerHTML = '';
  searchInput.innerHTML = '';
}

