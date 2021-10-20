const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        const xAxis = e.clientX;
        const yAxis = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xPosisitiom = xAxis - buttonLeft;
        const yPosisitiom = yAxis - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yPosisitiom + 'px';
        circle.style.left = xPosisitiom + 'px';

        this.appendChild(circle);
    })
})