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
  showInput(firstCardTitle,inputResult)
  
  
})

// card two
document.getElementById('btn-second').addEventListener('click', function () {
  const firstRectangleField= document.getElementById('first-rectangle');
  const firstRectangleString = firstRectangleField.value;
  const firstRectangle = parseFloat(firstRectangleString);

  count = count + 1;

  const secondRectangleField = document.getElementById('second-rectangle');
  const secondRectangleString = secondRectangleField.value;
  const secondRectangle = parseFloat(secondRectangleString);

  const rectangleResult = firstRectangle * secondRectangle;

  const secondCardTitle = document.getElementById('second-card-title').innerText;
  
  showInput(secondCardTitle,rectangleResult);

})
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
}
  