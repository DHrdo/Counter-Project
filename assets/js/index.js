let countLabel;
let actualValue = 0;
const MAX_VALUE = 999;
const MIN_VALUE = 0;

createElements('main', 'body');
createElements('div', document.querySelector('main'), null, null, ['container']);
createElements('button', document.querySelector('.container'), null, null, null, 'buttonUp');
createElements('img', document.querySelector('#buttonUp'), '/assets/images/arrow-up.svg', 'arrow up', ['arrow-up', 'increase'], null, null, 'increase');
createElements('div', document.querySelector('.container'), null, null, ['counter', 'reset']);
createElements('p', document.querySelector('.counter'), null, null, ['countLabel'], null, '0');

createElements('button', document.querySelector('.container'), null, null, null, 'buttonDown');
createElements('img', document.querySelector('#buttonDown'), '/assets/images/arrow-up.svg', 'arrow down', ['arrow-down', 'decrease'], null, null, 'decrease');

//THIS FUNCTION CREATES THE PAGE STRUCTURE
function createElements(eTag, eParent, eSrc = '', eAlt = '', eClass = [], eId = '', eContent = '', eDataAction = '') {

    const element = document.createElement(eTag);

    if (eParent === 'body') {
        document.body.append(element);
    } else {
        eParent.append(element);
    }

    if (eSrc) {
        element.src = eSrc;
    }
    if (eAlt) {
        element.alt = eAlt;
    }
    if (eClass && Array.isArray(eClass)) {
        eClass.forEach(cls => {
            element.classList.add(cls);
        });
    }
    if (eId) {
        element.setAttribute('id', eId);
    }

    if (eContent) {
        element.insertAdjacentHTML('afterbegin', eContent);
    }

    if (eDataAction) {
        element.setAttribute('data-action', eDataAction);
    }
};

function updateLabelCounter(newCount) {     //UPDATES AND SHOWS THE COUNTER VALUE
    actualValue = newCount;
    countLabel.innerHTML = newCount;

    resetLabelCounter(actualValue);
};


function resetLabelCounter(limitValue) {    //RESETS THE COUNTER VALUE IF UNDER OR EQUAL 0 / OVER 999
    if (limitValue > MAX_VALUE || limitValue <= MIN_VALUE) {
        actualValue = 0;
        countLabel.innerHTML = actualValue;
    }
};


window.onload = function () {   //THIS FUNCTION LOADS THE EVENTS ONLY WHEN THE PAGE STRUCTURE IS FULLY LOADED

    const decrease = document.querySelector('.decrease');
    const increase = document.querySelector('.increase');
    countLabel = document.querySelector('.countLabel');
    const reset = document.querySelector('.reset');


    // EVENT DELEGATION *( FEEDBACK FIX )*
    const container = document.querySelector('.container');
    container.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (action === 'decrease') {                    // DECREASE THE COUNTER VALUE
            updateLabelCounter(actualValue - 1)

        } else if (action === 'increase') {          // INCREASE THE COUNTER VALUE
            updateLabelCounter(actualValue + 1);

        } else if (action === 'reset') {          // RESET THE COUNTER VALUE
            updateLabelCounter(0)
        }
    });
};