// import Pagination from 'tui-pagination';
// import filmCard from '../templates/film-card.hbs';
// import {fetchTrendsGallery} from "../index";
// import {fetchTrendingMovies} from './api-services';
//
// // const Pagination = tui.Pagination;
//
// const container = document.getElementById('pagination');
// const gallery = document.querySelector('.gallery');
// document.addEventListener('DOMContentLoaded', fetchTrendsGallery);
//
//
// export function renderPaginationTrendingMovie(totalItems) {
//   // if (totalItems === 0) {
//   //   addErrorStartLoad();
//   // }
//   // if (totalItems <= 1) {
//   //   addClassToElement(refs.paginationAnchorRef, 'hidden');
//   // } else {
//   //   removeClassFromElement(refs.paginationAnchorRef, 'hidden');
//   //   setTotalItems(totalItems);
//   // }
//
//   const options = {
//     totalItems,
//     itemsPerPage: 10,
//     visiblePages: 5,
//     template: {
//       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//       currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<span class="tui-ico-ellip">...</span>' +
//         '</a>'
//     }
//   };
//   const pagination = new Pagination(container, options);
//   console.log('pagination', pagination)
//   pagination.on('afterMove', event => {
//     const currentPage = event.page;
//     // setCurrentPage(currentPage);
//     // requestService.page = currentPage;
//
//     // showLoader();
//     // removeClassFromElement(refs.loader, 'is-hidden');
//     // clearCardsList();
//
//     const renderingPage = () => {
//       async function fetchTrendsGallery() {
//         try {
//           const {results: movies} = await fetchTrendingMovies();
//           // const genres = await fetchMovieGenre();
//           // console.log(genres);
//           // const newMovies = movies.map(el => {
//           //   // console.log(el.genre_ids);
//           //   const arr = el.genre_ids.map(genre => {
//           //     // console.log(genre);
//           //     return genres.find(el => el.id === genre).name;
//           //   });
//           //
//           //   return { ...el, genre: arr };
//           // });
//           gallery.insertAdjacentHTML('beforeend', filmCard(movies));
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };
//
//     setTimeout(renderingPage, 400);
//   });
// }
//
//
// // const options = { // below default value of options
// //   totalItems: 10,
// //   itemsPerPage: 10,
// //   visiblePages: 10,
// //   page: 1,
// //   centerAlign: false,
// //   firstItemClassName: 'tui-first-child',
// //   lastItemClassName: 'tui-last-child',
// //   // template: {
// //   //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
// //   //   currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
// //   //   moveButton:
// //   //     '<a href="#" class="tui-page-btn tui-{{type}}">' +
// //   //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //   //     '</a>',
// //   //   disabledMoveButton:
// //   //     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
// //   //     '<span class="tui-ico-{{type}}">{{type}}</span>' +
// //   //     '</span>',
// //   //   moreButton:
// //   //     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
// //   //     '<span class="tui-ico-ellip">...</span>' +
// //   //     '</a>'
// //   // }
// // };
// // export const pagination = new Pagination(container, options);