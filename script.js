let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion(){

let q = questions[currentQuestion];

document.getElementById("question")
.innerHTML =
`Question ${currentQuestion+1}<br><br>${q.question}`;

let optionsHTML="";

q.options.forEach((option,index)=>{

optionsHTML +=

`
<label class="option">
<input type="radio"
name="answer"
value="${index}">
${option}
</label>
`;

});

document.getElementById("options")
.innerHTML=optionsHTML;

document.getElementById("feedback")
.innerHTML="";
}

function submitAnswer(){

const selected=
document.querySelector(
'input[name="answer"]:checked'
);

if(!selected){

alert("Please select an answer.");
return;
}

if(
parseInt(selected.value)===
questions[currentQuestion].correct
){
score++;
}

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

finishExam();
}
}

function showAnswer(){

document.getElementById("feedback")
.innerHTML=
"Correct Answer: "
+
questions[currentQuestion]
.options[
questions[currentQuestion].correct
];
}

function showExplanation(){

document.getElementById("feedback")
.innerHTML=
questions[currentQuestion]
.explanation;
}

function finishExam(){

let finalScore=
Math.round(
(score/questions.length)
*1000
);

let result=
(finalScore>=700)
?
"PASS ✅"
:
"FAIL ❌";

document.getElementById(
"quiz-container"
).innerHTML=
`
<h2>Exam Complete</h2>

<p>Score: ${finalScore}/1000</p>

<p>${result}</p>

<p>Correct:
${score}/${questions.length}</p>
`;
}
