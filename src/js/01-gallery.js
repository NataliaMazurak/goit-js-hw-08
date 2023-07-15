
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
console.log(gallery);

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
         <img class="gallery__image" src=${preview} alt=${description}/>
      </a>
   </li>`
  )
  .join("");


gallery.insertAdjacentHTML("beforeend", markup);



const lightbox = new SimpleLightbox(".gallery .gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});
