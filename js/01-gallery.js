import { galleryItems } from './gallery-items.js';
// Change code below this line

/*
Створи галерею з можливістю кліку по її елементах і перегляду 
повнорозмірного зображення у модальному вікні. Подивися демо відео роботи 
галереї.
*/

//console.log(galleryItems);


const galleryEls = document.querySelector('.gallery');

const galleryMarkup = onCreateGalleryMarkup(galleryItems);

galleryEls.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEls.addEventListener('click', onGalleryElsClick);

// rendered elements

function onCreateGalleryMarkup(items) {
return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/></a>
      </li>
      `;
}).join('');

}

function onGalleryElsClick (evt) {

//change the default settings
    evt.preventDefault();

// create modal
    if (evt.target.nodeName !== "IMG") 
    return;

    const isItemImage = evt.target.classList.contains('gallery__image');
     if (!isItemImage) 
     return;

    const currentImgUrl = evt.target.dataset.source;

    const instance = basicLightbox.create(
     `<img src="${currentImgUrl}" width="1280" />`,
     
    {
       onShow: (instance) => {
         window.addEventListener('keydown', onEscKeyPress);
       },
       onClose: (instance) => {
         window.removeEventListener('keydown', onEscKeyPress);
       },
     }
   );
   instance.show();

   // Esc button in use
   function onEscKeyPress(evt) {
     const ESC_KEY_CODE = 'Escape';
     const isEscKey = evt.code === ESC_KEY_CODE;
     if (!isEscKey) 
     return;

     instance.close();
   }
 }

