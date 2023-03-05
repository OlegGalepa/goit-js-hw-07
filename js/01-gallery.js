import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
console.log(galleryBox);

function createGalleryMarkup(item) {
  return item.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;})
    .join('');
}

galleryBox.innerHTML = createGalleryMarkup(galleryItems);

galleryBox.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(evt) {
  evt.preventDefault();

  if (!evt.target.hasAttribute('data-source')) {
    return;
  }  

  const instance = basicLightbox.create(
    `<img  src="${evt.target.getAttribute('data-source')}" alt="${evt.target.getAttribute('alt')}">`,
  {
      onShow: (instance) => {
        window.removeEventListener('keydown', onEscClick);
      }
    });

  function onEscClick(evt) {
    if (evt.key === 'Escape') {
   instance.close()
  }
}
  instance.show();
}

