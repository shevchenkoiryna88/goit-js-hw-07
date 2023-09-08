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
  event.preventDefault();
   if (event.currentTarget===event.target) {
    return
   }
  
    //console.log(event.target.dataset.source);//big img
  // console.dir(event.target.alt);
  
    const instance = basicLightbox.create(`  
  <img
      class="gallery__image"
      src="${event.target.dataset.source}" 
      alt="${event.target.alt}">
`)

  instance.show();

  window.addEventListener("keydown", onEsk)
  function onEsk(key){
if (key.code === 'Escape' && instance.visible()) {
  instance.close();
}
  }
  // const visible = basicLightbox.visible()
  // instance.close()
}
