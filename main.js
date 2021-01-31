const display = document.getElementById("calDisplay");
const equal = document.getElementById("equal");

const arr = [];

// addition
function add (x, y) {
    let sum = x + y;
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
    return product;
}
// division
function divide (x, y) {
    let div = x / y;
    return div;
}
// operate function which takes two numbers and an operator (above)

function operate (arr) {
    let x = arr[0];
    let y = arr[2];
    console.log(arr);
        if (arr[1] == "-") {
            console.log('test');
            arr = subtract(x, y);
            display.textContent = arr;
        
        } else if (arr[1] == "+") {
            return add(x, y);
        
        } else if (arr[1] == '*') {
            return multiply(x, y);
        
        } else if (arr[1] == '/') {
            return divide(x, y);
        };
    
    
    //arr is only returning the full display array, not calculating
}

//function that onclick adds value to array.
function addtoArray (num) {
    arr.push(num);
    display.textContent = arr.join(' ');
    console.log(arr);
}

// equal.addEventListener = (onclick, function() {
//      operate(display.textContent);
// });

//function for removing the last item of the array.
function removeNum () {
    arr.pop();
    return display.textContent = arr.join(' ');
}
//function for clearing the calculator's display, and for clearing the array.
function clearDisplay () {
    let end = arr.length;
    arr.splice(0, end);
    return display.textContent = arr;
}