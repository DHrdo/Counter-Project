const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increase');
const countLabel = document.querySelector('.countLabel');
const resetButton = document.querySelector('.reset');


let actualValue = 0;
const MAX_VALUE = 999;
const MIN_VALUE = -999;

function updateLabelCounter(newCount) {     //UPDATES AND SHOWS THE COUNTER VALUE
    actualValue = newCount;
    countLabel.textContent = newCount;

    resetLabelCounter(actualValue);
};

function resetLabelCounter(limitValue) {    //SESETS THE COUNTER VALUE IF UNDER -999 / OVER 999
    if (limitValue === MAX_VALUE || limitValue === MIN_VALUE)  {
        actualValue = 0;
        countLabel.textContent = actualValue;
    }
};


decreaseButton.addEventListener('click', () => {      //DECREASE THE COUNTER VALUE
    updateLabelCounter(actualValue - 1)
});

increaseButton.addEventListener('click', () => {      //INCREASE THE COUNTER VALUE
    updateLabelCounter(actualValue + 1)
});

resetButton.addEventListener('click', () => {     //RESET THE COUNTER VALUE
    updateLabelCounter(0)
});