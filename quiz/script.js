// arvore dom e variaveis
let pointsText = document.querySelector("#points");
let errorsText = document.querySelector("#errors");
let questionText = document.querySelector("#question");
let anwsersText = document.querySelectorAll(".anwsers");
let next = document.querySelector("#next");
let div = document.querySelector("#container")
let indexOfQuiz = 0;
let indexOfAwnsers = 0;
let trueAnwser = false;
let points = 0;
let errors = 0;
let selecioned = false;



//criação das peguntas

quizArray = [
    {
        question: "Qual é a capital da França",
        anwsers: ["Paris", "Roma", "Madri", "Londres"], 
        rightAnswer: "Paris"
    },

    {
        question: "Qual é a capital do Brasil", 
        anwsers: ["Sao-paulo", "Brasilia", "Curitiba", "Nordeste"], rightAnswer: "Brasilia"
    },

    {
        question: "Qual é a capital do Japao",
        anwsers: ["Toquio", "Fukushima", "Osaka", "Konoha"],
        rightAnswer: "Toquio"
    },

    {
        question: "Qual é a capital da China", 
        anwsers: ["Hong-kong", "Taiwan", "Pequim", "Xangai"], rightAnswer: "Pequim"
    }
]

//funções para adicionar as perguntas ao documento

function addQuizes(object) {
    if (indexOfQuiz < 4){
        questionText.innerHTML = object.question;
    
    anwsersText.forEach((anwser, index) => {
        anwser.textContent = object.anwsers[index];
    });}
    else{
        div.style.display = 'none';
        questionText.innerHTML = "acabaram as perguntas :D"
    }

}
addQuizes(quizArray[0])

function updatePoints() {
    pointsText.innerHTML = `Acertos: ${points}`
    errorsText.innerHTML = `Erros: ${errors}`
}

function select(button) {
    if (button.innerHTML === quizArray[indexOfQuiz].rightAnswer) {
        trueAnwser = true
    }
    else {
        trueAnwser = false;
    }
    selecioned = true
}


//eventos

anwsersText.forEach((button) => {
    button.addEventListener("click", () => {
        select(button)
    })
})

next.addEventListener("click", () => {
if(selecioned) { 
    if (trueAnwser) {
        points += 1;
    }
    else {
        errors +=1;
    }
    updatePoints();
    indexOfQuiz += 1;
    addQuizes(quizArray[indexOfQuiz])
    selecioned = false;
}
})