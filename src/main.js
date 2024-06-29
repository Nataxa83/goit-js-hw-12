
import { searchImages } from "./js/pixabay-api";
import { markupGallery, formReset, showLoader, hideLoader, hideLoadMore} from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let imgKeyWord = '';
let page = 1;
let maxPage = 1;
const per_page = 15;

export const refs = {
  formSearch: document.querySelector('.form'),
  inputImgSearch: document.querySelector('.input-search'),
  imgGallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  moreBtn: document.querySelector('.more-btn'),
};

refs.formSearch.addEventListener('submit', async event => {
    // hideLoader();
    event.preventDefault();
    imgKeyWord = refs.inputImgSearch.value.trim();
    if (imgKeyWord === '') {
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
        return;
    }
    // showLoader();

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
                
            hideLoader();
            formReset();
            return;
        }
            
        hideLoader();
        markupGallery(data.hits);
        formReset();
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
