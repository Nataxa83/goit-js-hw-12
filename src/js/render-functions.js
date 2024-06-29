import simplelightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from "../main"; 

const lightbox = new simplelightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


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
  refs.imgGallery.innerHTML = markup;
  lightbox.refresh();
}

export function formReset() {
  refs.formSearch.reset();
}

export function showLoader() {
    refs.loader.classList.add('hidden');
}

export function hideLoader() {
    refs.loader.classList.remove('hidden');
}

export function hideLoadMore() {
    refs.moreBtn.classList.remove('hidden');
}
