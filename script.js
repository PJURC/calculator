// Determine which function to use based on given operator
function operate(operator, a, b) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
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