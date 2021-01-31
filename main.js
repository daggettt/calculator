const display = document.getElementById("calDisplay");
const equal = document.getElementById("equal");
const operator = document.querySelectorAll(".operator");
const value = document.querySelectorAll(".value");

const arr = [];

function add (x, y) {
    let sum = x + y;
    return sum;
}
function subtract (x, y) {
    let sub = x - y;
    return sub;
}
function multiply (x, y) {
    let product = x * y;
    return product;
}
function divide (x, y) {
    let div = x / y;
    return div;
}

// operate function which takes two numbers and an operator (above)

function operate (arr) {
    let x = arr[0];
    let y = arr[2];
    
        if (arr[1] == "-") {
            arr = subtract(x, y);
            display.textContent = arr;
        
        } else if (arr[1] == "+") {
            arr = add(x, y);
            display.textContent = arr;
        
        } else if (arr[1] == '*') {
            arr = multiply(x, y);
            display.textContent = arr;
        
        } else if (arr[1] == '/') {
            arr = divide(x, y);
            display.textContent = arr;
        };
 }       
            
            
// function operate (arr) {
//     let i = 0;
//     let newarr = arr.slice(i, 3);
//         let x = newarr[0];
//         let y = newarr[2];
                
//             if (newarr[1] == "-") {
//                 newarr = subtract(x, y);
//                 console.log(newarr);
                    
//             } else if (newarr[1] == "+") {
//                 newarr = add(x, y);
//                 console.log(newarr);
                    
//             } else if (newarr[1] == '*') {
//                 newarr = multiply(x, y);
//                 console.log(newarr);
                    
//             } else if (newarr[1] == '/') {
//                 newarr = divide(x, y);
//                 console.log(newarr);
//                 };
//         }
                
function calculate (arr) {
    for(i = 0; i < arr.length; i++) {
        let newarr = arr.slice(i, 3);
        operate(newarr);
        
        
       console.log(arr.splice(0, 3, newarr));
        
    };
        
        
}


//function that onclick adds value to array.
function addtoArray (num) {
    arr.push(num);
    display.textContent = arr.join(' ');
    console.log(arr);
}

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