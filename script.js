// Determine which function to use based on given operator
function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case 'X': return multiply(a, b);
        case '/': return divide(a, b);
    };
}

// Add numbers
function add(a, b) {
    let operation = (+a + +b);
    let declength = 12 - Math.round(operation).toString().length;
    return parseFloat(operation.toFixed(declength));
};

// Subtract numbers
function subtract(a, b) {
    let operation = (a - b);
    let declength = 12 - Math.round(operation).toString().length;
    return parseFloat(operation.toFixed(declength));
};

// Multiply numbers
function multiply(a, b) {
    let operation = (a * b);
    let declength = 12 - Math.round(operation).toString().length;
    return parseFloat(operation.toFixed(declength));
};

// Divide numbers
function divide(a, b) {
    let operation = (a / b);
    let declength = 12 - Math.round(operation).toString().length;
    // if trying to divide by zero
    if(b == 0) {
        return "#DIV/0!"
    }
    return parseFloat(operation.toFixed(declength));
};

// Pre-calculation assignments
function equals() {
    // Retrieve the operator index
    operator_index = display_text.indexOf(operator);
    // Store the second number
    num2 = display_text.slice(operator_index + 1);
    // Execute the operate function and display the result
    calc_screen.textContent = operate(operator, num1, num2);
    // Save current result
    display_text = calc_screen.textContent;
    // Reset the operator
    operator = '';
    operator_index = -1;
}

// Find the screen element
const calc_screen = document.querySelector('#screen');

// Find all buttons that should be included within the display
const display_buttons = document.querySelectorAll('.display');

// Find the operator buttons
const operator_buttons = document.querySelectorAll('.operator');

// Find the equals button
const equals_button = document.querySelector('#result');

// Find the clear button
const clear_button = document.querySelector('#clear');

// Find the decimal button
const decimal_button = document.querySelector('#decimal');

// Display text, numbers, operator variables
let display_text = '';
let operator = '';
let operator_index = -1;
let num1 = NaN;
let num2 = NaN;

// Detect when an operator has been pressed
operator_buttons.forEach((operator_button) => {
    operator_button.addEventListener('click', () => {
        // If an operator value already exists (chained sequences),
        // calculate the first sequence
        if (operator != '') {
            equals();
        }
        // Store the current display value as the first number & the operator
        num1 = display_text;
        operator = operator_button.textContent;
        // Reset the variable to allow for second number input
        display_text = '';
    });
    
});

// Detect when the user clicks the backspace key
window.addEventListener('keydown', function (e) {
    if (e.key == 'Backspace') {
        display_text = display_text.slice(0, -1);
        calc_screen.textContent = display_text;
    }
})

// Detect when the user clicks the '=' key
equals_button.addEventListener('click', () => {
    equals();
});

// Decimal button
decimal_button.addEventListener('click', () => {
    // Do not accept input if display exceeds 12 characters
    if (display_text.length >= 12) {
        return;
    }
    if ((calc_screen.textContent).includes('.')) {
        return;
    } else {
        display_text += decimal_button.textContent;
        calc_screen.textContent = display_text;
    };
});

// Update display text on display button press
display_buttons.forEach((display_button) => {
    // Input values into the display screen
    display_button.addEventListener('click', () => {
        // Clear previous number if operator has been selected
        if (operator != '' && display_text == '') {
            display_text = '';
        }
        // Do not accept input if display exceeds 12 characters
        if (display_text.length >= 12) {
            return;
        }
        // Display the numbers
        display_text += display_button.textContent;
        calc_screen.textContent = display_text;
    });
});

// Clear button - clear the values
clear_button.addEventListener('click', () => {
    calc_screen.textContent = '';
    display_text = '';
    num1 = num2 = NaN;
    operator = '';
});

