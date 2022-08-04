const galleryItems = document.querySelectorAll('.gallery__item'),
    arrowLeft = document.querySelector('.gallery__arrow--left'),
    arrowRight = document.querySelector('.gallery__arrow--right'),
    dotsList = document.querySelectorAll('.gallery__dot');

let current = 0;

let reset = () => {
    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].style.display = 'none';
    }
}


let initSlider = () => {
    reset();
    galleryItems[0].style.display = 'block';
    dotsList[0].classList.add('gallery__dot--active');
    console.log(dotsList);
}

arrowLeft.addEventListener('click', () => {
    dotsList[current].classList.remove('gallery__dot--active');
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
    dotsList[current].classList.remove('gallery__dot--active');
    reset();
    if (current === galleryItems.length - 1) {
        current = 0;
    } else {
        current++;
    }
    dotsList[current].classList.add('gallery__dot--active');
    galleryItems[current].style.display = 'block';
})

initSlider();