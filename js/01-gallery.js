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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

const galleryImagesList = galleryItems.map((el) => createGalleryImages(el));

galleryContainer.insertAdjacentHTML("afterbegin", galleryImagesList.join(""));


const onContainerClick = (e) => {
    e.preventDefault()
    
    const source = e.target.dataset.source;
    if (!source) {
        return
    }
   const instance = basicLightbox.create(`
    <img src="${source}" width="1280" height="auto">
`);

   instance.show();

}

galleryContainer.addEventListener("click", onContainerClick)