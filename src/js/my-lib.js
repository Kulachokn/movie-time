import filmCard from '../templates/lib-card.hbs';
import {openModal} from "./modal";

const viewWatched = document.querySelector('#watched');
const viewQueue = document.querySelector('#queue');
const gallery = document.querySelector('.gallery')

renderByDefault();

viewWatched.addEventListener('click', btnWatchedHandler);
viewQueue.addEventListener('click', btnQueueHandle);

function renderByDefault() {
  gallery.innerHTML = ' ';

  const watchedArr = localStorage.getItem('watched');
  console.log(JSON.parse(watchedArr));
  gallery.insertAdjacentHTML('beforeend', filmCard(JSON.parse(watchedArr)));
}

function btnWatchedHandler() {
  gallery.innerHTML = ' ';

  const watchedArr = localStorage.getItem('watched');
  gallery.insertAdjacentHTML('beforeend', filmCard(JSON.parse(watchedArr)));
}

function btnQueueHandle() {
  gallery.innerHTML = ' ';

  const queueArr = localStorage.getItem('queue');
  gallery.insertAdjacentHTML('beforeend', filmCard(JSON.parse(queueArr)));
}

gallery.addEventListener('click', openModal);