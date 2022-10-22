const angleInputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

//calculating the sum of angles
function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    
    return sumOfAngles;
}

//checking if form a Triangle or not
function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));

    if(angleInputs[0].value && angleInputs[1].value && angleInputs[2].value) {

        if (angleInputs[0].value <= 0 || angleInputs[1].value <= 0 || angleInputs[2].value <= 0) {
            output.innerText = "Angles in triangle cannot be negative or zero😀";
        } else {
            if(sumOfAngles === 180) {
                output.innerText = "Yay! The angles form a Triangle...";
            } else {
                output.innerText = "Oops Sorry!! the angles don't form a triangle";
            }
        }
    }else {
        output.innerText = "Please enter all the angles.";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);