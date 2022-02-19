import filmCard from '../templates/lib-card.hbs';
// import {changeSomeDataArr} from "../index";

const btnWatched = document.querySelector('#watched');
const btnQueue = document.querySelector('#queue');
const gallery = document.querySelector('.gallery')

btnWatched.addEventListener('click', btnWatchedHandler);
btnQueue.addEventListener('click', btnQueueHandle);

function btnWatchedHandler() {
  gallery.innerHTML = ' ';

  const watchedArr = localStorage.getItem('watched');
  gallery.insertAdjacentHTML('beforeend', filmCard(JSON.parse(watchedArr)));
  console.log(JSON.parse(watchedArr));
}

function btnQueueHandle() {
  gallery.innerHTML = ' ';
}