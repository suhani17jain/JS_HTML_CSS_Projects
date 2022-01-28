const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todos = document.querySelector('.todos');

const listStored = JSON.parse(localStorage.getItem('todos'));
console.log(listStored);

if(listStored) {
    listStored.forEach(list => {
        console.log(list, list.value);
        addTodos(list);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodos();
});

function addTodos(todo) {
    let todoList = input.value;
    if(todo) {
        todoList = todo.value;
    }
    if(todoList) {
        const list = document.createElement('li');
        if(todo && todo.completed) {
            list.classList.add('completed')
        }
        list.innerText = todoList;

        list.addEventListener('click', () => {
            list.classList.toggle('completed');
            updateLocalStorage();
        });

        list.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            list.remove();
            updateLocalStorage();
        });

        
        todos.appendChild(list);
        input.value = '';
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    const todosList = document.querySelectorAll('li');
    let todoArr = [];

    todosList.forEach(todo  => {
        todoArr.push({
            value : todo.innerText,
            completed : todo.classList.contains('completed'),
        })
    })

    localStorage.setItem('todos', JSON.stringify(todoArr));
}