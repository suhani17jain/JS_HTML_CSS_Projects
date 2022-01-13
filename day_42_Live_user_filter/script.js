const filter = document.querySelector('#filter');
const userList = document.querySelector('.user-list');
const listItems = [];

getUsers();


async function getUsers() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const {results} = await res.json();
    userList.innerHTML = '';
    results.forEach(user => {
        const list = document.createElement('li');
        list.classList.add('user');
        list.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="userInfor">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        listItems.push(list);
        userList.appendChild(list);
    });
};

filter.addEventListener('input', (e) => getFilteredUsers(e.target.value));

function getFilteredUsers(value) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(value.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}