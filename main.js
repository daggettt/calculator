// basic calculator functions:
// addition
function add (x, y) {
    let sum = x + y;
    // for several values in an array
    // let sum = [...arg].reduce((a,b) => a + b, 0);
    return sum;
}

// subtraction
function subtract (x, y) {
    let sub = x - y;
    return sub;
}

//multiplication
function multiply (x, y) {
    let product = x * y;
    // for several values in an array
    // let product = [...arg].reduce((product, x) => product * x, 1);
    return product;
}

// division
function divide (x, y) {
    let div = x / y;
    return div;
}

// operate function which takes two numbers and an operator (above)
function operate (...arr) {
    let x = arr[0];
    let y = arr[2];

        if (arr[1] == "-") {
            return subtract(x, y);
        
        } else if (arr[1] == "+") {
            return add(x, y);
        
        } else if (arr[1] == '*') {
            return multiply(x, y)
        
        } else if (arr[1] == '/') {
            return divide(x, y);
        };
}