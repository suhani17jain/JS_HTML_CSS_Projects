const glasses = document.querySelectorAll('.glasses');
const bigContainer = document.querySelector('.big_container');
const containerPercentage = document.querySelector('.percentage_filled');
const containerlitersLeft = document.querySelector('.liters_left');

glasses.forEach((glass, index) => {
    glass.addEventListener('click', () => {
        fillSmallCups(index);
    });
})

const fillSmallCups = (index) => {
    console.log(index);
    glasses.forEach((glass, id) => {
        if (id <= index) {
            glass.classList.add('filled');
        } else {
            glass.classList.remove('filled');
        }
    });

    fillBigCup(index);
}

const fillBigCup = (index) => {
    const height = bigContainer.offsetHeight;
    const glassesFilled = index + 1;
    const bigContainerFilled = (height / (glasses.length)) * glassesFilled;
    const percentageFilled = (glassesFilled / glasses.length) * 100;
    containerPercentage.innerText = percentageFilled + '%';
    containerPercentage.style.height = `${bigContainerFilled}px`
    if (glassesFilled === glasses.length) {
        containerlitersLeft.style.visibility = 'hidden';
        containerlitersLeft.style.height = 0;
    } else {
        containerlitersLeft.style.visibility = 'visible';
        const litersRemaining = (2000 - (250 * glassesFilled)) / 1000;
        containerlitersLeft.innerText = litersRemaining + 'L' + ' ' + 'remaining';
    }
}