const joke = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokeBtn');

jokebtn.addEventListener('click', getJoke);

//Using Promise
// function getJoke() {
//     const config = {
//         headers : {
//             Accept : 'application/json', 
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke
//     })
// }

//Using Async Await

async function getJoke() {
    const config = {
        headers : {
            Accept : 'application/json', 
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    joke.innerHTML = data.joke;
}

getJoke();