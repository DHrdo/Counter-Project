let countLabel;
let actualValue = 0;
const MAX_VALUE = 999;
const MIN_VALUE = -999;



function updateLabelCounter(newCount) {     //UPDATES AND SHOWS THE COUNTER VALUE
    actualValue = newCount;
    countLabel.innerHTML = newCount;

    resetLabelCounter(actualValue);
};

function resetLabelCounter(limitValue) {    //RESETS THE COUNTER VALUE IF UNDER -999 / OVER 999
    if (limitValue === MAX_VALUE || limitValue === MIN_VALUE) {
        actualValue = 0;
        countLabel.innerHTML = actualValue;
    }
};

function renderCounter() {      //THIS FUNCTION RENDERS THE PAGE STRUCTURE
    const main = document.createElement('main');
    const divContainer = document.createElement('div');
    const buttonUp = document.createElement('button');
    const imgArrowUp = document.createElement('img');
    const imgArrowDown = document.createElement('img');
    const counterContainer = document.createElement('div');
    const counterLabel = document.createElement('p');
    const buttonDown = document.createElement('button');

    document.body.appendChild(main);
    divContainer.classList.add('container');
    main.appendChild(divContainer);
    divContainer.appendChild(buttonUp);
    imgArrowUp.src = '/assets/images/arrow-up.svg';
    imgArrowUp.alt = 'arrow up';
    imgArrowUp.classList.add('arrow-up', 'increase');
    buttonUp.appendChild(imgArrowUp);

    counterContainer.classList.add('counter', 'reset');
    divContainer.appendChild(counterContainer);

    counterLabel.classList.add('countLabel');
    counterLabel.textContent = '0';

    counterContainer.appendChild(counterLabel);

    divContainer.appendChild(buttonDown);
    imgArrowDown.src = '/assets/images/arrow-up.svg';
    imgArrowDown.alt = 'arrow down';
    imgArrowDown.classList.add('arrow-down', 'decrease');
    buttonDown.appendChild(imgArrowDown);
};

window.onload = function () {   //THIS FUNCTION LOADS THE EVENTS ONLY WHEN THE PAGE STRUCTURE IS FULLY LOADED
    renderCounter();

    const decrease = document.querySelector('.decrease');
    const increase = document.querySelector('.increase');
    countLabel = document.querySelector('.countLabel');
    const reset = document.querySelector('.reset');

    decrease.addEventListener('click', () => {      //DECREASE THE COUNTER VALUE
        updateLabelCounter(actualValue - 1)
    });

    increase.addEventListener('click', () => {      //INCREASE THE COUNTER VALUE
        updateLabelCounter(actualValue + 1)
    });

    reset.addEventListener('click', () => {     //RESET THE COUNTER VALUE
        updateLabelCounter(0)
    });
};