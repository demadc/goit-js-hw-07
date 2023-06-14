import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryEls = document.querySelector('.gallery');

const galleryMarkup = onCreateGalleryMarkup(galleryItems);

galleryEls.insertAdjacentHTML('beforeend', galleryMarkup);

// rendered items
function onCreateGalleryMarkup(items) {
   return items.map(({ preview, original, description }) => {
    return `<li>
   <a class="gallery__item" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
   </a>
 </li>`
   }).join('');
 }

 // library
    const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
 });
