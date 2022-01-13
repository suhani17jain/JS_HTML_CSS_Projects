const password = document.querySelector('#password');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('#submitBtn');
const background = document.querySelector('.background');


password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    
    const blur = 20 - length * 2;
    console.log(blur);
    background.style.filter = `blur(${blur}px)`;
});

submitBtn.addEventListener('click', (e) => {
    const input = password.value;
    const emailvalue = email.value;
    console.log(input, emailvalue);
})

