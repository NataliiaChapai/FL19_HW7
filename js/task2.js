let answer = confirm('Do you want to play a game?');
let randomNumber;
let firstNumber;
let secondNumber;
let thirdNumber;
let totalPrize = 0;
let step = 0;
let nextStep;
let total = 8;
let prize = 0;
let possiblePrize = 100;
const minFirstPrize = 25;
const midFirstPrize = 50;
const maxFirstPrize = 100;
const intervalStep = 4;
const deg = 2;
const interval = 9;
const maxIntervalPoint = 8;

if (!answer) {
    alert('You did not become a billionaire, but can.');
} else {
    do {
        randomNumber = Math.floor(Math.random() * (interval + intervalStep * step));
        firstNumber = prompt(`Choose a roulette pocket number from 0 to ${total}
        Attempts left: 3
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${possiblePrize}$`);
        secondNumber = prompt(`Choose a roulette pocket number from 0 to ${total}
        Attempts left: 2
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${possiblePrize}$`);
        thirdNumber = prompt(`Choose a roulette pocket number from 0 to ${total}
        Attempts left: 1
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${possiblePrize}$`);

        if (Number(firstNumber) === randomNumber) {
            prize = minFirstPrize * Math.pow(deg, step);
        }
        if (Number(secondNumber) === randomNumber) {
            prize = midFirstPrize * Math.pow(deg, step);
        }
        if (Number(thirdNumber) === randomNumber) {
            prize = minFirstPrize * Math.pow(deg, step);
        }

        if (prize === 0) {
            window.alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
            answer = confirm('Do you want to play a game again?');
            totalPrize = 0;
            step = 0;
            total = maxIntervalPoint;
            possiblePrize = maxFirstPrize;
            if (!answer) {
                alert('You did not become a billionaire, but can.');
                break;
            }
        } else {
            step += 1;
            total += intervalStep;
            possiblePrize *= deg;
            totalPrize += prize;
            prize = 0;
            nextStep = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            
            if (!nextStep) {
                 window.alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                answer = confirm('Do you want to play a game again?');
                totalPrize = 0;
                step = 0;
                total = maxIntervalPoint;
                prize = 0;
                possiblePrize = maxFirstPrize;
                if (!answer) {
                alert('You did not become a billionaire, but can.');
                break;
                }
            }
        }
        
    } while (nextStep !== null);
    
}