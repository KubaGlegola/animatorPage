const galleryItems = document.querySelectorAll('.gallery__item'),
    arrowLeft = document.querySelector('.gallery__arrow--left'),
    arrowRight = document.querySelector('.gallery__arrow--right');

let current = 0;

let reset = () => {
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].style.display = 'none';
    }
}

let createDots = () => {
    var dotsContainer = document.querySelector('.gallery__dots');
    for (let i = 0; i < galleryItems.length; i++) {
        console.log('a');
        dotsContainer.innerHTML += '<div class="gallery__dot"></div>';
    }
}
let initSlider = () => {
    createDots();
    reset();
    const dotsList = document.querySelectorAll('.gallery__dot');
    galleryItems[0].style.display = 'block';
    dotsList[0].classList.add('gallery__dot--active');
    console.log(dotsList);
}

arrowLeft.addEventListener('click', () => {
    reset();
    if (current === 0) {
        current = galleryItems.length - 1;
    } else {
        current--;
    }
    galleryItems[current].style.display = 'block';
    dotsList[current].classList.add('gallery__dot--active');
})

arrowRight.addEventListener('click', () => {
    reset();
    if (current === galleryItems.length - 1) {
        current = 0;
    } else {
        current++;
    }
    galleryItems[current].style.display = 'block';
})

initSlider();