// dynamic number count
let count = 0;
function getInputFieldValueId(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}

function showInput(firstCardTitle, inputResult) {
  const displayData = document.getElementById("display-data");
  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td>${count}</td>
  <td>${firstCardTitle}</td>
  <td>${inputResult}</td>
 
  
  `;
  displayData.appendChild(tr);
}

document.getElementById("btn-one").addEventListener("click", function () {
  const firstInput = getInputFieldValueId("first-input");

  count = count + 1;
  const secondInput = getInputFieldValueId("second-input");

  const inputResult = 0.5 * (firstInput * secondInput);
  const firstCardTitle = document.getElementById("first-card-title").innerText;

  showInput(firstCardTitle, inputResult);
});

// card two
document.getElementById("btn-second").addEventListener("click", function () {
  const firstRectangle = getInputFieldValueId("first-rectangle");
  
 
  count = count + 1;
  const secondRectangle = getInputFieldValueId("second-rectangle");

  const rectangleResult = firstRectangle * secondRectangle;

  const secondCardTitle =
    document.getElementById("second-card-title").innerText;

  showInput(secondCardTitle, rectangleResult);
});
//card three

document.getElementById("btn-three").addEventListener("click", function () {
  const firstParallelogram = getInputFieldValueId("first-parallelogram");
  count = count + 1;
  const secondParallelogram = getInputFieldValueId("second-parallelogram");
 
  const parallelogramResult = firstParallelogram * secondParallelogram;

  const threeCardTitle = document.getElementById("three-card-title").innerText;

  showInput(threeCardTitle, parallelogramResult);
});
// card four

document.getElementById("btn-four").addEventListener("click", function () {
  const firstRhombus = getInputFieldValueId("first-rhombus");
  count = count + 1;
  const secondRhombus = getInputFieldValueId("second-rhombus");

  const rhombusResult = 0.5 * (firstRhombus * secondRhombus);
  const fourCardTitle = document.getElementById("four-card-title").innerText;

  showInput(fourCardTitle, rhombusResult);

  console.log(firstRhombus);
});

// card five

document.getElementById("btn-five").addEventListener("click", function () {
  const firstPentagon = getInputFieldValueId("first-pentagon");
  count = count + 1;
  const secondPentagon = getInputFieldValueId("second-pentagon");

  const pentagonResult = 0.5 * (firstPentagon * secondPentagon);
  const fiveCardTitle = document.getElementById("five-card-title").innerText;

  showInput(fiveCardTitle, pentagonResult);
});

// six card

document.getElementById("btn-six").addEventListener("click", function () {
 const firstEllipse = getInputFieldValueId("first-ellipse");

  //number count
  count = count + 1;
const secondEllipse = getInputFieldValueId("second-ellipse");
  

  const ellipseResult = 3.14159265359 * (firstEllipse * secondEllipse);
  const piResult = ellipseResult.toFixed(2);

  const fiveCardTitle = document.getElementById("six-card-title").innerText;

  showInput(fiveCardTitle, piResult);
});

//random color function
