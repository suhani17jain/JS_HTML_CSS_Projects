const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const question = document.querySelector('.question');
const quiz = document.querySelector('.quiz');
const answers = document.querySelectorAll('.answers');
const a_ele = document.getElementById('a_text');
const b_ele = document.getElementById('b_text');
const c_ele = document.getElementById('c_text');
const d_ele = document.getElementById('d_text');
const submitBtn = document.querySelector('.submit');
let currentQuestion = 0;
let score = 0;


loadQuestion();

function loadQuestion() {
    clearAnswers();
    question.innerText = quizData[currentQuestion].question;
    a_ele.innerText = quizData[currentQuestion].a;
    b_ele.innerText = quizData[currentQuestion].b;
    c_ele.innerText = quizData[currentQuestion].c;
    d_ele.innerText = quizData[currentQuestion].d;
}

function clearAnswers() {
    answers.forEach(answer => {
        answer.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    let answer = checkScore();
    if(answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++;
            console.log(score);
        }
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()" class="reload">Reload</button>
            `
        }
    }
});

function checkScore() {
    let answer;
    answers.forEach(ans => {
        if(ans.checked) {
            answer = ans.id;
        }
    });

    return answer;
}