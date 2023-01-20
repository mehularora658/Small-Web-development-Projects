//Creating 2 random numbers to make question later
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

//Getting elements from HTML page
const questionEl = document.getElementById('question')
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById("score")

//Creating Question
questionEl.innerText = `What is ${num1} multiply ${num2} ?`;

//Setting score from local storage
score = JSON.parse(localStorage.getItem("score"))

//Creating score variable
if(!score){
   var score=0;
}

//Creating correct answer of question
let correctAnswer = num1*num2;

//Adding event to compare answers and update score accordingly 
formEl.addEventListener('submit', ()=>{
    let userAnswer = +inputEl.value;
    if(userAnswer===correctAnswer){
        score++;
        updatelocalstorage();
    }
    else{
        score--;
        updatelocalstorage();
    }
    function updatelocalstorage(){
        localStorage.setItem("score",JSON.stringify(score))
    }
})

//Displaying score
scoreEl.innerText = `Score=${score}`;
