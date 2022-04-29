import ApiService from "./api-services";
import modalTemplate from '../templates/modal-template.hbs';

const apiService = new ApiService();

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('#modal');
const backdrop = document.querySelector('.backdrop');
const bntClose = document.querySelector('.modal__close');
const WATCHED = 'watched';
const QUEUE = 'queue';


gallery.addEventListener('click', openModal);

const filmTemplate = film => {
  modal.innerHTML = modalTemplate(film);
};

function getRootNode(node) {
  if (!node) return null;
  if (node.nodeName === 'UL') return null;
  if (node.nodeName === 'LI' && node.className === 'movie-card') return node;

  return getRootNode(node.parentNode);
}

export function openModal(event) {
  const cardNode = getRootNode(event.target);
  backdrop.classList.toggle('is-hidden');
  if (cardNode !== null) {
    const id = cardNode.dataset['card'];

    apiService.fetchFilmId(id).then(data => {

      filmTemplate(data);

      const btnWatch = document.querySelector('.js-watched');
      console.log(btnWatch)
      const btnQueue = document.querySelector('.js-queue');
      console.log(btnQueue)
      const getWatchedArr = JSON.parse(localStorage.getItem(WATCHED));

      const checkMovie = getWatchedArr && getWatchedArr.find(el => el.id === id);
      if (checkMovie) {
        btnWatch.textContent = 'remove from watched';
        btnWatch.addEventListener('click', removeFromWatched);
      } else {
        btnWatch.textContent = 'add to watched';
        btnWatch.addEventListener('click', btnWatchHandler);
      }

      btnQueue.addEventListener('click', btnQueueHandler);
      btnWatch.addEventListener('click', btnWatchHandler);
      //====Escape===
      window.addEventListener('keydown', closeModalByEsc);
      //====на кнопку===
      bntClose.addEventListener('click', modalClose);
      //====на backdrop===
      backdrop.addEventListener('click', onBackdropClick);
    })
  }
}

function modalClose() {
  backdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', closeModalByEsc);
  bntClose.removeEventListener('click', onBackdropClick);
  backdrop.removeEventListener('click', onBackdropClick);
}

function closeModalByEsc(event) {
  if (event.code === 'Escape') {
    modalClose();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    modalClose();
  }
}


const idModal = () => document.querySelector('#modal');
const filmId = () => document.querySelector('#js-id');
const imgModal = () => document.querySelector('#modal .movie__img');
const titleModal = () => document.querySelector('#modal .movie__name');
const voteModal = () => document.querySelector('#modal .movie-vote');
const originTitleModal = () => document.querySelector('#modal .movie-title');
const genreModal = () => document.querySelector('#modal .movie-genre');
const descriptionModal = () => document.querySelector('#modal .movie-description');


function btnWatchHandler() {
  console.log('click');
  let watchedArr = [];

  let modalUrlImage = imgModal().currentSrc;

  const movieObj = {
    id: filmId().dataset.card,
    urlImage: modalUrlImage,
    title: titleModal().textContent,
    rating: voteModal().textContent,
    originTitleModal: originTitleModal().textContent,
    genre: genreModal().textContent,
    description: descriptionModal().textContent
  }

  // const getWatchedArr = JSON.parse(localStorage.getItem(WATCHED));
  // getWatchedArr.find(el => el.id === movieObj.id)
  const btnWatch = document.querySelector('.js-watched');

  if (!localStorage.getItem(WATCHED)) {
    watchedArr.push(movieObj)
    localStorage.setItem(WATCHED, JSON.stringify(watchedArr));
    btnWatch.textContent = 'remove from watched';
    btnWatch.removeEventListener('click', btnWatchHandler);
    btnWatch.addEventListener('click', removeFromWatched);
  } else if (localStorage.getItem(WATCHED).includes(JSON.stringify(movieObj))) {
    console.log('Watched film list includes this film!');
  } else {
    watchedArr = JSON.parse(localStorage.getItem(WATCHED));
    watchedArr.push(movieObj);
    localStorage.setItem(WATCHED, JSON.stringify(watchedArr));
    btnWatch.textContent = 'remove from watched';
    btnWatch.removeEventListener('click', btnWatchHandler);
    btnWatch.addEventListener('click', removeFromWatched);
  }
}

function removeFromWatched() {

  const movieId = idModal().dataset.card;

  const getWatchedArr = JSON.parse(localStorage.getItem(WATCHED));

  const newArr = getWatchedArr.filter(el => el.id !== movieId);
  localStorage.setItem(WATCHED, JSON.stringify(newArr));
  const btnWatch = document.querySelector('.js-watched');
  btnWatch.textContent = 'add to watched';
  btnWatch.addEventListener('click', btnWatchHandler);
}

function btnQueueHandler() {
  let queuedArr = [];

  let modalUrlImage = imgModal().currentSrc;

  const movieObj = {
    id: filmId().dataset.card,
    urlImage: modalUrlImage,
    title: titleModal().textContent,
    rating: voteModal().textContent,
    originTitleModal: originTitleModal().textContent,
    genre: genreModal().textContent,
    description: descriptionModal().textContent
  }

  const btnQueue = document.querySelector('.js-queue');

  if (!localStorage.getItem(QUEUE)) {
    queuedArr.push(movieObj)
    localStorage.setItem(QUEUE, JSON.stringify(queuedArr));
    btnQueue.textContent = 'remove from queue';
    btnQueue.removeEventListener('click', btnQueueHandler);
    btnQueue.addEventListener('click', removeFromQueue);
  } else if (localStorage.getItem(WATCHED).includes(JSON.stringify(movieObj))) {
    console.log('Watched film list includes this film!');
  } else {
    queuedArr = JSON.parse(localStorage.getItem(QUEUE));
    queuedArr.push(movieObj);
    localStorage.setItem(QUEUE, JSON.stringify(queuedArr));
    btnQueue.textContent = 'remove from queue';
    btnQueue.removeEventListener('click', btnQueueHandler);
    btnQueue.addEventListener('click', removeFromQueue);
  }
}

function removeFromQueue() {

  const movieId = idModal().dataset.card;

  const getQueueArr = JSON.parse(localStorage.getItem(QUEUE));
  const newArr = getQueueArr.filter(el => el.id !== movieId);
  localStorage.setItem(QUEUE, JSON.stringify(newArr));
  const btnQueue = document.querySelector('.js-queue');
  btnQueue.textContent = 'add to queue';
  btnQueue.addEventListener('click', btnQueueHandler);
}