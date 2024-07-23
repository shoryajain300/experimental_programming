const questions = [
    {
        question:"1.Which animal is known as the 'Ship of the Desert?",
        answer: [
            {option:"Camel",iscorrect:true},
            {option:"Goat",iscorrect:false},
            {option:"Lizard",iscorrect:false},
            {option:"Buffalo",iscorrect:false},
        ]
    },
    {
        question:"2.How many days are there in a week?",
        answer: [
            {option:"5",iscorrect:false},
            {option:"6",iscorrect:false},
            {option:"7",iscorrect:true},
            {option:"8",iscorrect:false},
        ]
    },
    {
        question:"3.How many hours are there in a day?",
        answer: [
            {option:"12",iscorrect:false},
            {option:"24",iscorrect:true},
            {option:"36",iscorrect:false},
            {option:"20",iscorrect:false},
        ]
    },
    {
        question:"4.How many sides are there in a triangle?",
        answer: [
            {option:"2",iscorrect:false},
            {option:"5",iscorrect:false},
            {option:"4",iscorrect:false},
            {option:"3",iscorrect:true},
        ]
    }
    // {
    //     question:"1.Which animal is known as the 'Ship of the Desert?",
    //     answer: [
    //         {option:"Camel",iscorrect:true},
    //         {option:"Goat",iscorrect:false},
    //         {option:"Lizard",iscorrect:false},
    //         {option:"Buffalo",iscorrect:false},
    //     ]
    // },
    // {
    //     question:"2.How many days are there in a week?",
    //     answer: [
    //         {option:"5",iscorrect:false},
    //         {option:"6",iscorrect:false},
    //         {option:"7",iscorrect:true},
    //         {option:"8",iscorrect:false},
    //     ]
    // }
];

const questionArea = document.querySelector('#question');
const answerArea = document.querySelector('.answer-btn');
const nextButton = document.querySelector('.next');

let score = 0;
let questionIndex = 0;

function restart(){
    score=0;
    questionIndex=0;
    nextButton.innerText="Next";
    startQuiz();
}
function reset(){
    questionArea.innerHTML = '';

    while(answerArea.firstElementChild) {
        answerArea.removeChild(answerArea.firstElementChild);
    }

    nextButton.style.display='none';
}

function createButton(answerItem){
    let optionText = answerItem.option;
    let ansbtn = document.createElement('button');
    ansbtn.innerHTML = optionText;
    ansbtn.classList.add('answer');
    if(answerItem.iscorrect===true)
        {
            ansbtn.setAttribute('data-correct',true);
        }
    answerArea.appendChild(ansbtn);
}

function designGame(){
    questionArea.innerHTML=questions[questionIndex].question;

    let options = questions[questionIndex].answer;
    options.forEach(createButton);
}

function checkAnswer(e){
    let curBtn = e.target;
    if(curBtn.hasAttribute("data-correct"))
    {
        curBtn.classList.add('answer-right');
        score++;
    }
    else{
        curBtn.classList.add('answer-wrong');
    }
    let options = answerArea.querySelectorAll('button');
    options.forEach(button=>{
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function playGame(){
    let options = answerArea.querySelectorAll('button');
    options.forEach(button=>{
        button.addEventListener('click',checkAnswer);
    });

}

function endQuiz()
{
    reset();
    questionArea.innerHTML=`Your Final Score is ${score}`;
    nextButton.style.display="block";
    nextButton.innerText="Restart";
}

function startQuiz(){
    if(questionIndex < questions.length)
    {
        reset();
        designGame();
        playGame();
    }
    else
    {
        console.log("quiz restarting");
        endQuiz();
    }
}

nextButton.addEventListener('click', () => {
    if(nextButton.innerText==="Next")
    {
        questionIndex++;
        startQuiz();
    }
    else if (nextButton.innerText === "Restart") {
        restart();
    }
});

startQuiz();



