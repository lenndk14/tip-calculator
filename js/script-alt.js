const billInput = document.querySelector('.bill-input').value;
const peopleInput = document.querySelector('.people-input').value;

const buttons = document.querySelectorAll('.button');
const calcBtn = document.querySelector('.reset-button');

const resultPerson = document.querySelector('.outcome-p').innerText;
const resultTotal = document.querySelector('.outcome-t').innerText;

const form = document.querySelector('.form-sub');
const formTip = document.querySelector('.form-sub-btn');

Number(billInput);
Number(peopleInput);

let selectedButton;

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        selectedButton = i + 1;
    })
})

function divide(value) {
    const x = value / x;

    peopleInput.value = x;
}

