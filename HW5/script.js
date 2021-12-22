const numberButtons = document.querySelectorAll('[type = button]');
const display = document.querySelector('[type = text]');
const displayBlock = document.querySelector('.display');

let memory = 0,
    previousNum = '',
    currentNum = '',
    operator = '';

let tag = document.createElement('p');
    tag.id = 'm';
    tag.innerHTML = 'm';
    tag.style.position = 'absolute';
    tag.style.left = '10px';
    tag.style.top = '1px';


const Operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '*': function (a, b) { return a * b },
    '/': function (a, b) { return a / b },
    'calc': function (a, b, op) { return this[op](a, b) }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value.match(/[0-9.]/)) {
            console.log(button.value);
            display.value += button.value;
            currentNum = +display.value;
        }

        if (button.value.match(/[\/\*\-\+]/)) {
            previousNum = currentNum;
            operator = button.value;
            display.value = '';
        }

        if (button.value.match(/=/)) {   
            console.log(currentNum, previousNum);  
            display.value = (Operators.calc(previousNum, currentNum, operator)).toFixed(6) * 1;
            currentNum = display.value;
        }

        if (button.value.match(/C/)) {
            display.value = '';
            previousNum = '';
            currentNum = '';
            operator = '';
        }

        if (button.value.match(/m\+/)) {
            memory += currentNum;
            displayBlock.append(tag);
        }

        if (button.value.match(/m\-/)) {
            memory -= currentNum;
            displayBlock.append(tag);
        }

        if (button.value.match(/mrc/)) {
            if (display.value == memory) {
                display.value = '';
                memory = 0;
                displayBlock.removeChild(document.querySelector('#m'));
            } else {
                display.value = memory;
            } 
        }
    })
})