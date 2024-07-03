import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImages } from "./js/pixabay-api";
import {
    markupGallery,
    formReset,
    showLoader,
    hideLoader,
    hideLoadMore,
    showLoadMore,
    checkEndPages,
    skipOldElement,
} from "./js/render-functions";


let imgKeyWord = '';
let page = 1;
let maxPage = 1;
const per_page = 15;

export const refs = {
  formSearch: document.querySelector('.form'),
  inputImgSearch: document.querySelector('.input-search'),
  imgGallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  moreBtn: document.querySelector('.more-button'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

refs.formSearch.addEventListener('submit', async event => {
      event.preventDefault();
    page = 1;
    imgKeyWord = refs.inputImgSearch.value.trim();
 
    if (imgKeyWord === '') {
        refs.imgGallery.innerHTML = ' ';
        iziToast.warning({
            title: 'warning',
            message: ' Enter a word for the query, please.',
            layout: 2,
            position: 'topRight',
            displayMode: 'once',
            color: '#ef4000',
            messageColor: '#fff',
            messageSize: '16',
        });
        hideLoadMore();
        formReset();
        return;
    }
    
    showLoader();
    refs.imgGallery.innerHTML = ' ';
    
    
    try {
        const data = await searchImages(imgKeyWord, page, per_page)
        maxPage = Math.ceil(data.totalHits / per_page);
        if (maxPage === 0) {
            iziToast.error({
                title: 'Error',
                message:
                'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                displayMode: 'once',
                color: '#ef4040',
                messageColor: '#fff',
                messageSize: '16',
                layout: 2,
            });
            hideLoadMore();
            hideLoader();
            return;
        }
      
        formReset();
        markupGallery(data.hits);
        lightbox.refresh();
        hideLoader();
        showLoadMore();
       
           }
    catch (error) {
        iziToast.error({
            title: 'Error',
            message: `${error}`,
            layout: 2,
            displayMode: 'once',
            backgroundColor: '#ef4040',
            progressBarColor: '#B51B1B',
            position: 'topRight',
   
        });
    };

});

refs.moreBtn.addEventListener('click', async () => {
    try {
        showLoader();
        hideLoadMore();
        page++;

        const data = await searchImages(imgKeyWord, page, per_page);

        if (data.hits.length !== 0) {
            markupGallery(data.hits);
            lightbox.refresh();
        }
        skipOldElement();
        checkEndPages(page, maxPage);
        hideLoader();XMLDocumentx
    } catch (error) {
        hideLoadMore();

    iziToast.error({
      title: 'Error',
      message: `${error}`,
      layout: 2,
      displayMode: 'once',
      backgroundColor: '#ef4040',
      progressBarColor: '#B51B1B',
      position: 'topRight',
    });
  }
});