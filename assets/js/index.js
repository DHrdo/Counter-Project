let countLabel;
let actualValue = 0;
const MAX_VALUE = 999;
const MIN_VALUE = 0;


window.onload = function () {   //THIS FUNCTION LOADS THE EVENTS ONLY WHEN THE PAGE STRUCTURE IS FULLY LOADED

    const body = document.body;
    const main = createElements('main', body);
    const container = createElements('div', main, null, null, ['container']);
    const buttonUp = createElements('button', container, null, null, null, 'buttonUp');
    createElements('img', buttonUp, '/assets/images/arrow-up.svg', 'arrow up', ['arrow-up', 'increase'], null, null, 'increase');
    const counterAndReset = createElements('div', container, null, null, ['counter', 'reset'], null, null, 'reset');
    createElements('p', counterAndReset, null, null, ['countLabel'], null, '0');
    const buttonDown = createElements('button', container, null, null, null, 'buttonDown');
    createElements('img', buttonDown, '/assets/images/arrow-up.svg', 'arrow down', ['arrow-down', 'decrease'], null, null, 'decrease');


    countLabel = document.querySelector('.countLabel'); // FOR COUNTER VALUE MODIFICATION


    // BUTTONS EVENT DELEGATION
    container.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (action === 'decrease') {                    // DECREASE THE COUNTER VALUE
            updateLabelCounter(actualValue - 1)

        } else if (action === 'increase') {          // INCREASE THE COUNTER VALUE
            updateLabelCounter(actualValue + 1);

        } else if (action === 'reset') {            // RESET THE COUNTER VALUE
            updateLabelCounter(0)
        }
    });
};

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

    return element; //returns eTag
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


