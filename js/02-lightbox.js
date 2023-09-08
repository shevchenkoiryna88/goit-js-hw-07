import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

///1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання

const galleryUl = document.querySelector(".gallery");

let markup = galleryItems
  .map(
    ({ description, original, preview }, index) =>
      `<li class="gallery__item">
   <a class="gallery__link"
   href="${original}"
   data-id = "${index}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
   </a>
</li>`
  )
  .join("");

galleryUl.insertAdjacentHTML("beforeend", markup);

///Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
lightbox.refresh();

galleryUl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const slideIndex = event.target.closest(".gallery__link").dataset.id;

  lightbox.show(slideIndex);
}
