const DECREASE = document.querySelector('.decrease');
const INCREASE = document.querySelector('.increase');
const countLabel = document.querySelector('.countLabel');
const RESET = document.querySelector('.reset');


let counter = 0;

function updateCounter(count) {     //UPDATES AND SHOW THE COUNTER VALUE
    counter = count;            
    countLabel.innerHTML = count;
}


DECREASE.addEventListener('click', () => {      //DECREASE THE COUNTER VALUE
    updateCounter(counter - 1)
});

INCREASE.addEventListener('click', () => {      //INCREASE THE COUNTER VALUE
    updateCounter(counter + 1)
});

RESET.addEventListener('click', () => {     //RESET THE COUNTER VALUE
    updateCounter(0)
});