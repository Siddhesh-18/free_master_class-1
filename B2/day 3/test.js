function addNumbers() {
    // * DOM will help me out
    let firstNumber = document.getElementById('firstNum').value  // "20"
    let secondNumber = document.getElementById('secondNum').value // "30"

    firstNumber = Number(firstNumber); // 20
    secondNumber = Number(secondNumber); // 30

    let ans = firstNumber + secondNumber;

    document.getElementById('answer').textContent = ans;


}

function multiplyNumbers() {
    let firstNumber = document.getElementById('firstNum').value  // "20"
    let secondNumber = document.getElementById('secondNum').value // "30"

    firstNumber = Number(firstNumber); // 20
    secondNumber = Number(secondNumber); // 30

    let ans = firstNumber * secondNumber;

    document.getElementById('answer').textContent = ans;
}

function divideNumbers() {
    let firstNumber = document.getElementById('firstNum').value  // "20"
    let secondNumber = document.getElementById('secondNum').value // "30"

    firstNumber = Number(firstNumber); // 20
    secondNumber = Number(secondNumber); // 30

    let ans = firstNumber / secondNumber;

    document.getElementById('answer').textContent = ans
}