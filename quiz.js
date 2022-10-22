const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

//Array of right answers
const rightAnswers = [ '90°', 'right angled', 'equilateral', 'scalene', 'Pythagoras','1 right angle','Angle that measures less than 90°'];

//compare answers with right answr
function calculateScore() {
    var score = 0;
    var index = 0;

    const data = new FormData(quizForm);

    for(const value of data.values()) {

        if(value === rightAnswers[index]) {
            score++;
        }
        index++;
    }

    output.innerText = 'Your score is:' + score + '/' + rightAnswers.length;
}

submitBtn.addEventListener("click", calculateScore);