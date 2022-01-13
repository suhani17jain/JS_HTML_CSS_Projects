const container = document.querySelector('.container');
const colors = ['red','blue','green','yellow','pink'];

const squaresNo = 500;

for(i =0; i < squaresNo; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColour(square));
    square.addEventListener('mouseout', () => removeColour(square));
    container.appendChild(square);
}


function setColour(square) {
    
    const color = getRandomColor();
    square.style.background = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function removeColour(square) {
    square.style.background = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000'
}

