let count = 0;
document.getElementById('btn-one').addEventListener('click', function () {
  const firstInputField = document.getElementById('first-input');
  const firstInputString = firstInputField.value;
  const firstInput = parseFloat(firstInputString);

  count = count + 1;

  const secondInputField = document.getElementById('second-input');
  const secondInputString = secondInputField.value;
  const secondInput = parseFloat(secondInputString);

  const inputResult = 0.5 * (firstInput * secondInput);

  const firstCardTitle = document.getElementById('first-card-title').innerText;
  
  /* console.log(firstInput, secondInput, typeof  firstCardTitle); */
  showInput(firstCardTitle, inputResult)
  
  
});

// card two
document.getElementById('btn-second').addEventListener('click', function () {
  const firstRectangleField = document.getElementById('first-rectangle');
  const firstRectangleString = firstRectangleField.value;
  const firstRectangle = parseFloat(firstRectangleString);

  count = count + 1;

  const secondRectangleField = document.getElementById('second-rectangle');
  const secondRectangleString = secondRectangleField.value;
  const secondRectangle = parseFloat(secondRectangleString);

  const rectangleResult = firstRectangle * secondRectangle;

  const secondCardTitle = document.getElementById('second-card-title').innerText;
  
  showInput(secondCardTitle, rectangleResult);

});
//card three

document.getElementById('btn-three').addEventListener('click', function () {
  const firstParallelogramField = document.getElementById('first-parallelogram');
  const firstParallelogramString = firstParallelogramField.value;
  const firstParallelogram = parseFloat(firstParallelogramString);

  count = count + 1;

  const secondParallelogramField = document.getElementById('second-parallelogram');
  const secondParallelogramString = secondParallelogramField.value;
  const secondParallelogram = parseFloat(secondParallelogramString);

  const parallelogramResult = firstParallelogram * secondParallelogram;

  const threeCardTitle = document.getElementById('three-card-title').innerText;

  showInput(threeCardTitle, parallelogramResult);


});
// card four

document.getElementById('btn-four').addEventListener('click', function () {
  const firstRhombusField = document.getElementById('first-rhombus');
  const firstRhombusString = firstRhombusField.value;
  const firstRhombus = parseFloat(firstRhombusString);

  count = count + 1;

  const secondRhombusField = document.getElementById("second-rhombus");
  const secondRhombusString = secondRhombusField.value;
  const secondRhombus = parseFloat(secondRhombusString);
  
  const rhombusResult = 0.5 * (firstRhombus * secondRhombus);
  const fourCardTitle = document.getElementById('four-card-title').innerText;

  showInput(fourCardTitle, rhombusResult)

  console.log(firstRhombus);
});

// card five

document.getElementById('btn-five').addEventListener('click', function () {
  const firstPentagonField = document.getElementById('first-pentagon');
  const firstPentagonString = firstPentagonField.value;
  const firstPentagon = parseFloat(firstPentagonString);

  count = count + 1;

  const secondPentagonField = document.getElementById('second-pentagon');
  const secondPentagonString = secondPentagonField.value;
  const secondPentagon = parseFloat(secondPentagonString);

  const pentagonResult = 0.5 * (firstPentagon * secondPentagon);
  const fiveCardTitle = document.getElementById('five-card-title').innerText;
   

  showInput(fiveCardTitle, pentagonResult);


});

// six card

document.getElementById('btn-six').addEventListener('click', function () {
  const firstEllipseField = document.getElementById('first-ellipse');
  const firstEllipseString = firstEllipseField.value;
  const firstEllipse = parseFloat(firstEllipseString);

  count = count + 1;

  const secondEllipseField = document.getElementById('second-ellipse');
  const secondEllipseString = secondEllipseField.value;
  const secondEllipse = parseFloat(secondEllipseString);

  const ellipseResult = 3.14159265359 * (firstEllipse * secondEllipse);

  const fiveCardTitle = document.getElementById('six-card-title').innerText;

  showInput(fiveCardTitle, ellipseResult.toFixed(2));



});

function showInput(
  firstCardTitle,
  inputResult,
  
) {
  const displayData = document.getElementById("display-data");
  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td>${count}</td>
  <td>${firstCardTitle}</td>
  <td>${inputResult}</td>
 
  
  `;
  displayData.appendChild(tr);
};
  