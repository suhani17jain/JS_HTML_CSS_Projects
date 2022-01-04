const notification = document.querySelector('.notification');
const toasts = document.querySelector('.toasts');
const toast = document.querySelector('.toast');

const obj = {
    'success' : 'success message',
    'info' : 'info message',
    'error' : 'fail message'
};
let message;
let className;

const buttonClick = () => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    randomProperty(obj);
    toast.innerText = message;
    toast.classList.add(`${className}`);
    toasts.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000)
}

const randomProperty = function (obj) {
    const keys = Object.keys(obj);
    const key = Math.floor(Math.random() * keys.length);
    className = keys[key];
    message = obj[className];
};

notification.addEventListener('click', buttonClick);

