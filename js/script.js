let billInput = document.querySelector('.bill-input').value;
let peopleInput = document.querySelector('.people-input').value;

const buttons = document.querySelectorAll('.button');
const calcBtn = document.querySelector('.reset-button');

let resultPerson = document.querySelector('.outcome-p');
let resultTotal = document.querySelector('.outcome-t');

const form = document.querySelector('.form-sub');
const formTip = document.querySelector('.form-sub-btn');

Number(billInput);
Number(peopleInput);

let selectedButton;

document.querySelector('.bill-input').addEventListener('change', () => {
    billInput = document.querySelector('.bill-input').value;
})

console.log(billInput);

document.querySelector('.people-input').addEventListener('change', () => {
    peopleInput = document.querySelector('.people-input').value;
})

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        selectedButton = button.dataset.percentage;
    })
})

calcBtn.addEventListener('click', () => {
    if(Number(billInput) > 0 && Number(peopleInput) > 0 && Number(selectedButton) > 0) {
        
          document.querySelector('.bill-input').style.border = "";
          document.querySelector('.people-input').style.border = "";
          document.querySelector('.zero-bill').classList.remove('active');
          document.querySelector('.zero-people').classList.remove('active');

          let pricePerPerson = (billInput / peopleInput);
          let tipPerPerson = pricePerPerson * (selectedButton / 100);
          resultPerson.innerText = Math.round(tipPerPerson * 100) / 100;
          let totalPricePerPerson = pricePerPerson + tipPerPerson;
          resultTotal.innerText = Math.round(totalPricePerPerson * 100) / 100;

        } else if (Number(billInput) === 0 || Number(billInput) === NaN) {
            document.querySelector('.bill-input').style.border = "3px solid orange";
            document.querySelector('.zero-bill').classList.toggle('active');
        } else if (Number(peopleInput) === 0 || Number(peopleInput) === NaN) {
            document.querySelector('.people-input').style.border = "3px solid orange";
            document.querySelector('.zero-people').classList.toggle('active');
        }
})



 
