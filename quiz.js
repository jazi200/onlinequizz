
const test = [
    {
            question: "What does HTML stand for?",
            first:"Hyper Text Preprocessor",
            second: "Hyper Text Markup Language",
            third: "Hyper Text Multiple Language",
            fourth: "Hyper Tool Multi Language",
            correct: "second",
          },
            {
                question: "What does CSS stand for?",
                first:"Common Style Sheet",
                second: "Colorful Style Sheet",
                third: "Computer Style Sheet",
                fourth: "Cascading Style Sheet",
                correct:"fourth",
          },
            {
                question: "What is the default value of the position property?",
                first:"relative",
                second: "fixed",
                third: "absolute",
                fourth:"static",
                correct: "fourth",
          },
            {
                question:"How do you select an element with id 'demo'?",
                first:"*demo",
                second: "#demo",
                third: ".demo",
                fourth: "demo",
                correct: "second",
          },
            {
                question: "How do you make each word in a text start with a capital letter?",
                first:"You can't do that with CSS",
                second: "text-transform:capitalize",
                third: "transform:capitalize",
                fourth: "text-style:capitalize",
                correct:"second",
          },
        
          {
            question: "Which HTML attribute is used to define inline styles?",
                first:"style",
                second: "font",
                third: "class",
                fourth: "styles",
                correct: "first",
          },
        
          {
            question: "Which is the correct CSS syntax?",
                first: "{body;color:black;}",
                second: "body {color: black;}",
                third: "{body:color=black;}",
                fourth: "body:color=black;",
                correct: "second",
          },
        
          {
            question: "How do you insert a comment in a CSS file?",
                first: "// this is a comment",
                second: "// this is a comment //",
                third: "/* this is a comment */",
                fourth: "' this is a comment",
                correct: "third",
          
          },
        
          {
            question: "Which CSS property controls the text size?",
            first: "font-style",
            second:  "text-size",
            third: "text-style",
            fourth: "font-size",
            correct: "fourth",
          },
        
          {
            question: "How do you display hyperlinks without an underline?",
            first: "a {decoration:no-underline;}",
            second:  "a {text-decoration:none;}",
            third: "a {underline:none;}",
            fourth: "a {text-decoration:no-underline;}",
            correct: "second",
            
          },

];

const quiz= document.getElementById('head')
const check = document.querySelectorAll('.check')
const questioncheck = document.getElementById('option')
const first_check = document.getElementById('first_check')
const second_check = document.getElementById('second_check')
const third_check = document.getElementById('third_check')
const fourth_check = document.getElementById('fourth_check')
const submit = document.getElementById('submit')


let current = 0
let bal = 0

head()

function head() {

    head_a()

    const current_a = test[current]

    questioncheck.innerText = current_a.question
    first_check.innerText = current_a.first
    second_check.innerText = current_a.second
    third_check.innerText = current_a.third
    fourth_check.innerText = current_a.fourth
}

function head_a() {
    check.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    check.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submit.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === test[current].correct) {
           bal++
       }

       current++

       if(current < test.length) {
           head()
       } else {
           quiz.innerHTML = `
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
           <div class="result_box">
           <div class="icon" style="font-size: 100px;
        color: #eeb8ff;
        margin-bottom: 5px;
        display: flex;
        padding: 25px 30px;
        align-items: center;
        justify-content: center;">
        <i class="far fa-smile-wink"></i>
        </div>
           <h2 style="text-align:center">You've finished the Quiz !</h2>
           <h3 style="text-align:center; margin-bottom: 30px;">You answered ${bal}/${test.length} questions correctly</h3>
           <div class="reload" style=" height: 50px;border-top: 1px solid lightgrey;">
           <button onclick="location.reload()" style=" width: 100%;
           height:100%;
           cursor: pointer;
           font-size: 20px;
           background: #ba81e2;
           border: 1px solid #ba81e2; 
           color:azure;">Replay Quiz</button></div>
           `
       }
    }
})