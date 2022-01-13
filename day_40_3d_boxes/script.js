const magicBtn = document.querySelector('.magic');
const boxes = document.querySelector('.boxes');

magicBtn.addEventListener('click', () => {
    boxes.classList.toggle('big');
});

function formBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j=0; j<4; j++) {
            const box = document.createElement('box');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxes.appendChild(box);
        }
    }
    
}


formBoxes();