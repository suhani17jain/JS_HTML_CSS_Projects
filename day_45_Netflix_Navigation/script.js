const openButton = document.querySelector('.btn_open');
const closeButton = document.querySelector('.btn-close');
const navs = document.querySelectorAll('.nav');


openButton.addEventListener('click', () => {
    navs.forEach(nav => {
        nav.classList.add('visible');
    })
});


closeButton.addEventListener('click', () => {
    navs.forEach(nav => {
        nav.classList.remove('visible');
    })
});