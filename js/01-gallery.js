import { galleryItems } from './gallery-items.js';
// Change code below this line

console.dir(galleryItems);

const galleryUl = document.querySelector(".gallery")

let markup = galleryItems.map(({ description, original, preview }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("")

galleryUl.insertAdjacentHTML("beforeend", markup)   

galleryUl.addEventListener("click", onClick)
function onClick(event) {
   if (event.currentTarget===event.target) {
    return
   }
    console.log(event.target.dataset.source);
    console.dir(event.target.alt);
    const instance = basicLightbox.create(` 
// <div>
//     <img
            class="gallery__image"
            src="${event.target.dataset.source}" 
            alt="event.target.alt">
// </div>
// `)

    instance.show()

    
}
