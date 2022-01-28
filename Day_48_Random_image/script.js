const container = document.querySelector('.container');
const urlImahe = 'https://source.unsplash.com/random/';
const row = 10;

for(let i=0; i< row * 3; i++) {
    const img = document.createElement('img');
    img.src = `${urlImahe}${getRandomSize()}`;
    container.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}