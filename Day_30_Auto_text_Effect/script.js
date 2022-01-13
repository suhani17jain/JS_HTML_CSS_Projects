const text = document.getElementById('text');
const speed = document.getElementById('speed');

const textDisplay = 'We love programming!';
let typingSpeed = 300/ speed.value;
let id = 1;

writeText();

function writeText() {
    text.innerHTML = textDisplay.slice(0,id);
    id++;

    if(id > textDisplay.length) {
        id = 1;
    }

    setTimeout(writeText, typingSpeed);

}

speed.addEventListener('input', (e) => typingSpeed = 300 / e.target.value);