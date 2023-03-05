import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

function createGalleryMarkup(item, parentEl) {
  const GalleryMarkup = item.map(({preview, original, description }) => {
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
    
    return (parentEl.innerHTML = GalleryMarkup);
}    

createGalleryMarkup(galleryItems, galleryBox);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})
