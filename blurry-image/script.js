const loadingText = document.querySelector('.loading');
const image = document.querySelector('.image');

let load = 0;
let interval = setInterval(blur, 30)

 function blur() {
     load++;
     if (load > 99) {
         clearInterval(interval);
     }

     loadingText.innerHTML = `${load}%`
     loadingText.style.opacity = scale(load,0,100,1,0);
     image.style.filter = `blur(${scale(load,0,100,30,0)}px)`
 }

 const scale = (num, in_min, in_max, out_min, out_max) => {
     return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
 }