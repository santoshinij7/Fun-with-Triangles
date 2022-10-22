const sideInputs = document.querySelectorAll("#side-input");
const calHypoBtn = document.querySelector("#cal-hypo-btn");
const output = document.querySelector("#output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
if(sideInputs[0].value && sideInputs[1].value) {
    if(sideInputs[0].value <= 0 || sideInputs[1].value <= 0) {
        output.innerText = "The sides cannot be NEGATIVE & ZERO!";
    }
    else {
        var hypotenuseSquare = calculateSumOfSquare(Number(sideInputs[0].value), Number(sideInputs[1].value));
        var hypotenuseLength = Math.sqrt(hypotenuseSquare).toFixed(2);
        
        output.innerText = "The Length of Hypotenuse is " + hypotenuseLength + ".";
    }
} else {
    output.innerText = "Give all the values!";
}
}
calHypoBtn.addEventListener("click", calculateHypotenuse);