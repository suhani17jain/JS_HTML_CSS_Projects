const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
let currentIndex = 1;

nextButton.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex > circles.length) {
        currentIndex = 1;
    }

    update();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 1) {
        currentIndex = 1;
    }

    update();
})

 function update() {
     circles.forEach((circle, i) => {
         if(i < currentIndex) {
             circle.classList.add('active');
         } else {
            circle.classList.remove('active');
         }
     });

    const active = document.querySelectorAll('.active');
    console.log(active.length);
    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%';
    console.log(progress.style.width);

     if(currentIndex == 1) {
         prevButton.disabled = true;
     } else if (currentIndex == circles.length) {
        nextButton.disabled = true;
     } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
     }
    
}