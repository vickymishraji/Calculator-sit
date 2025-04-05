let currentOperator = null;

function setOperator(op) {
  currentOperator = op;
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = 0;

  if (isNaN(num1)) return alert("Enter valid first number");
  if (["+", "-", "*", "/", "%"].includes(currentOperator) && isNaN(num2))
    return alert("Enter valid second number");

  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
      break;
    case "%":
      result = (num1 * num2) / 100;
      break;
    default:
      return alert("Please select an operator.");
  }

  document.getElementById("result").innerText = result;

  // Save to history
  saveToHistory(`${num1} ${currentOperator} ${num2} = ${result}`);
}

function calculateSquare() {
  const num = parseFloat(document.getElementById("num1").value);
  if (isNaN(num)) return alert("Enter a valid number");
  const result = num * num;
  document.getElementById("result").innerText = result;
  saveToHistory(`${num}² = ${result}`);
}

function calculateCube() {
  const num = parseFloat(document.getElementById("num1").value);
  if (isNaN(num)) return alert("Enter a valid number");
  const result = num * num * num;
  document.getElementById("result").innerText = result;
  saveToHistory(`${num}³ = ${result}`);
}

function clearCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "0";
  currentOperator = null;
}

function saveToHistory(entry) {
  let history = JSON.parse(localStorage.getItem("calcHistory") || "[]");
  history.push(entry);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
