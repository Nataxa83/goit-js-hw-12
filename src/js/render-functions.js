import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { refs } from "../main"; 


export function markupGallery(images) {
  const markup = images
    .map(image => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
                width=360;
                height=200;
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags} " />
        </a>
                <div class="image-info">
                <p class = "info-item"><strong>LIKES:</strong> ${image.likes}</p>
                <p class = "info-item"><strong>VIEWS:</strong> ${image.views}</p>
                <p class = "info-item"><strong>COMMENTS:</strong> ${image.comments}</p>
                <p class = "info-item"><strong>DOWNLOADS: </strong>${image.downloads}</p>
                </div>
        </li>
        `;
    })
    .join('');
  refs.imgGallery.insertAdjacentHTML('beforeend', markup);

}

export function formReset() {
  refs.formSearch.reset();
}

export function showLoader() {
    refs.loader.classList.remove('hidden');
}

export function hideLoader() {
    refs.loader.classList.add('hidden');
}

export function showLoadMore() {
    refs.moreBtn.classList.remove('more-hidden');
}

export function hideLoadMore() {
    refs.moreBtn.classList.add('more-hidden');
}

export function checkEndPages(page, maxPage) {
  if (page <= maxPage) {
      showLoadMore();
    } else {
    
      hideLoadMore();
          iziToast.info({
              title: 'The end!',
              message: "We're sorry, but you've reached the end of search results.",
          });
   
  }
  
}
export function skipOldElement(x = 0, y = 0) {
  const liEl = refs.imgGallery.children[0];
  const height = liEl.getBoundingClientRect().height;

  window.scrollBy({
    top: height * 2,
    left: y,
    behavior: 'smooth',
  });
}