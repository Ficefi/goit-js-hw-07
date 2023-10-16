import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

const arr = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item" style="list-style: none;">
        <a class="gallery__link">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`)
	.join('');
	
list.insertAdjacentHTML("beforeend", arr);
list.addEventListener('click', ImageClick);

function ImageClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`,
		{
			onShow: () => window.addEventListener('keydown', Escape),
            onClose: () => window.removeEventListener('keydown', Escape),
		}
	);

	instance.show()

	function Escape(event) {   
        if (event.code === "Escape") {
            instance.close();
        }
    }
}