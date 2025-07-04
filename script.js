// Calculator logic
const display = document.getElementById('display');
let current = '0';
let memory = 0;
let operator = null;
let waitingForOperand = false;

function updateDisplay() {
    display.textContent = current;
}

function inputDigit(digit) {
    if (waitingForOperand) {
        current = digit;
        waitingForOperand = false;
    } else {
        current = current === '0' ? digit : current + digit;
    }
}

function inputDot() {
    if (!current.includes('.')) {
        current += '.';
    }
}

function clearAll() {
    current = '0';
    operator = null;
    memory = 0;
    waitingForOperand = false;
}

function clearEntry() {
    current = '0';
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(current);
    if (operator && waitingForOperand) {
        operator = nextOperator;
        return;
    }
    if (operator) {
        if (operator === '+') memory += inputValue;
        else if (operator === '-') memory -= inputValue;
        else if (operator === '*') memory *= inputValue;
        else if (operator === '/') memory /= inputValue;
        current = String(memory);
    } else {
        memory = inputValue;
    }
    operator = nextOperator;
    waitingForOperand = true;
}

function handleEqual() {
    if (!operator) return;
    handleOperator(operator);
    operator = null;
    waitingForOperand = false;
}

function handlePercent() {
    current = String(parseFloat(current) / 100);
}

function handleMemory(action) {
    if (action === 'm-plus') memory += parseFloat(current);
    else if (action === 'm-minus') memory -= parseFloat(current);
    else if (action === 'mrc') current = String(memory);
}

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        if (!isNaN(action)) {
            inputDigit(action);
        } else if (action === 'dot') {
            inputDot();
        } else if (action === 'plus') {
            handleOperator('+');
        } else if (action === 'minus') {
            handleOperator('-');
        } else if (action === 'multiply') {
            handleOperator('*');
        } else if (action === 'divide') {
            handleOperator('/');
        } else if (action === 'equal') {
            handleEqual();
        } else if (action === 'ac') {
            clearAll();
        } else if (action === 'ce') {
            clearEntry();
        } else if (action === 'percent') {
            handlePercent();
        } else if (['m-plus','m-minus','mrc'].includes(action)) {
            handleMemory(action);
        }
        updateDisplay();
    });
});

updateDisplay();