const left = document.getElementById('left');
const right = document.getElementById('right');
const slides = document.querySelectorAll('.slide');
const body = document.body

let activeSlide = 0;


left.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length -1;
    }

    setActiveSlide();
});

right.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide > slides.length-1) {
        activeSlide = 0;
    }

    setActiveSlide();
});

const setActiveSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[activeSlide].classList.add('active');
    setBackgroung();
}

const setBackgroung = () => {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}


setActiveSlide();