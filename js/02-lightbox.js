import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const createGalleryImages = ({
  preview,
  original,
  description,
}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;

const galleryImagesList = galleryItems.map((el) => createGalleryImages(el));

galleryContainer.insertAdjacentHTML("afterbegin", galleryImagesList.join(""));

const captions = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});



