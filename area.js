const lengthInput = document.querySelectorAll('.length-input');
const calculateAreaBtn = document.querySelector('.calculate-area-btn');
const output = document.querySelector('#output');

//logic
function areaCalculation(base, height) {
  var area = (base * height) / 2
  return area;
}

function calculateArea() {
  if (lengthInput[0].value && lengthInput[1].value) {
    if (lengthInput[0].value <= 0 || lengthInput[1].value <= 0) {
      output.innerText = 'The Length cannot be Negative or Zero!'
    } else {
      var triangleArea = areaCalculation(
        Number(lengthInput[0].value),
        Number(lengthInput[1].value),
      )
      output.innerText = 'Area of the Triangle is ' + triangleArea + '.'
    }
  } else {
    output.innerText = 'Give all the values!'
  }
}

calculateAreaBtn.addEventListener('click', calculateArea);