const image = document.querySelector('.image');
const times = document.querySelector('.times');

let clickTime = 0;
let timesClicked = 0;


image.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime()) - clickTime < 800) {
            console.log('clic');
            getHeart(e);
        } else {
            clickTime = new Date().getTime();
        }
    }
});


const getHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    image.appendChild(heart);
    times.innerHTML = ++timesClicked;

    setTimeout((e) => {
        heart.remove();
    }, 500);
}