const firstMessage = 'Please write first number';
let firstNumber = prompt(firstMessage);
const secondMessage = 'Please write second number';
let secondNumber;
const fail = 'Invalid input data!';
let result = '';

if (isNaN(firstNumber) || firstNumber === null || firstNumber.trim() === '') {
    do {
        alert(fail);
        firstNumber = prompt(firstMessage);
    } while (isNaN(firstNumber) || firstNumber === null || firstNumber.trim() === '');
}
    secondNumber = prompt(secondMessage);
    
if (Number(secondNumber) < Number(firstNumber) || isNaN(secondNumber) || secondNumber === null
    || secondNumber.trim() === '') {
    do {
        alert(fail);
        secondNumber = prompt(secondMessage);
    } while (secondNumber < firstNumber || isNaN(secondNumber) || secondNumber === null || secondNumber.trim() === '')
    
} 

for (let i = Math.trunc(firstNumber) + 1; i < secondNumber; i++) {
    result += i + ' ';
}

let success = `First number: ${firstNumber}
Second number: ${secondNumber}

Numbers between :  ${result}`;

alert(success);
