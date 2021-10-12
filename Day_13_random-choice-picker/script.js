const choicesEl = document.getElementById('choices');
const textarea = document.getElementById('textarea');

textarea.focus();


textarea.addEventListener('keyup', (e) => {
    createChoices(e.target.value);
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        selectRandomChoice();
    }
});

function createChoices(text) {
    const choices = text.split(',').filter(choice => choice.trim() !=='').map(choice => choice.trim());

    choicesEl.innerHTML = '';

    choices.forEach(choice => {
        const choiceEl = document.createElement('span');
        choiceEl.classList.add('choices');
        choiceEl.innerText = choice;
        choicesEl.appendChild(choiceEl);
    });
}

function selectRandomChoice() {
    const times = 30;

    const interval = setInterval(() => {
        const randomchoice = pickRandomChoice(); 
        hightlightChoice(randomchoice);

        setTimeout(() => {
            unHightlightChoice(randomchoice);
        }, 100)
    }, 100);


    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomchoice = pickRandomChoice(); 
            hightlightChoice(randomchoice);
        }, 100)
    }, times * 100);
}

function pickRandomChoice() {
    const choices = document.querySelectorAll('.choices');
    return choices[Math.floor(Math.random() * choices.length)];
}

function hightlightChoice(choice) {
    choice.classList.add('highlight');
}

function unHightlightChoice(choice) {

    choice.classList.remove('highlight');
}


