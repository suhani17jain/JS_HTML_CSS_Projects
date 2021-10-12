const navButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const container = document.querySelector('.container')

console.log(navButton);

navButton.addEventListener('click', () => {
    container.classList.add('rotate');

})

closeButton.addEventListener('click', () => {
    container.classList.remove('rotate');
})