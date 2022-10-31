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
    return a + b;
};

// Subtract numbers
function subtract(a, b) {
    return a - b;
};

// Multiply numbers
function multiply(a, b) {
    return a * b;
};

// Divide numbers
function divide(a, b) {
    return a / b;
};

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

// Display text, numbers, operator variables
let display_text = '';
let operator = '';
let operator_index = 0;
let num1 = num2 = 0;

// Detect when an operator has been pressed
operator_buttons.forEach((operator_button) => {
    // Store the current display value as the first number & the operator
    operator_button.addEventListener('click', () => {
        num1 = display_text;
        operator = operator_button.textContent;
    });
});

// Detect when the user clicks the '=' key
equals_button.addEventListener('click', () => {
    // Retrieve the operator index
    operator_index = display_text.indexOf(operator);
    // Store the second number
    num2 = display_text.slice(operator_index + 1);
    // Execute the operate function and display the result
    console.log(operator, num1, num2);
    calc_screen.textContent = operate(operator, num1, num2);
    // Clear the display variable
    display_text = '';
});

// Update display text on display button press
display_buttons.forEach((display_button) => {
    // Input values into the display screen
    display_button.addEventListener('click', () => {
        display_text += display_button.textContent;
        calc_screen.textContent = display_text;
    });
});

// Detect when the display field should be cleared
clear_button.addEventListener('click', () => {
    calc_screen.textContent = '';
    display_text = '';
});

