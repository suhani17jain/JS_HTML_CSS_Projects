const imageContainer  = document.querySelector('.image-container');
const images = document.querySelectorAll('img');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

let idx = 0;
let interval = setInterval(autoPlayCarousel, 2000);

function autoPlayCarousel() {
    idx++;
    changeImage();
}

function changeImage() {
    if(idx >images.length -1) {
        idx = 0
    }  else if (idx < 0) {
        idx = images.length -1;
    }

    imageContainer.style.transform = `translate(${-idx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(autoPlayCarousel, 2000);
}

leftButton.addEventListener('click', () =>{
    idx--;
    changeImage();
    resetInterval();
});


rightButton.addEventListener('click', () =>{
    idx++;
    changeImage();
    resetInterval();
});