const display = document.querySelector('#calDisplay');
const keys = document.querySelector('#keypad');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');

let displayarr = [];

let firstValue = null;
let secondValue = '';
let operator = null;
let clearscreen = false;

function addNum (num) {
    if (clearscreen == true) {
        display.textContent = '';
        clearscreen = false;
    }
    
    let displayNum = num;
    display.textContent += displayNum;
}

function calculate (displayarr) {
    let x = displayarr[0];
    let y = displayarr[2];
    let result;
        
        if (displayarr[1] === "-") {
            result = x - y;
            //display.textContent = result;
            //console.log(result);
            
        } else if (displayarr[1] === "+") {
            result = x + y;
            //display.textContent = result;
            //console.log(result);
            
        } else if (displayarr[1] === 'x') {
            result = x * y;
            // display.textContent = result;
            //console.log(result);
            
        } else if (displayarr[1] === '/') {
            result = x / y;
            // display.textContent = result;
            //console.log(result);
        };  
    
        return result;
}

function addOperator (op) {
    clearscreen=true;
    
    if (displayarr.length === 2) {
        let secondValue = display.textContent;
        displayarr[2] = parseFloat(secondValue)
        
        display.textContent = calculate(displayarr);
        
        let firstValue = display.textContent;
        displayarr.unshift(parseFloat(firstValue));
        displayarr.splice(1); 

        let operator = op;
        displayarr[1] = operator;
        //console.log(displayarr);
    
    } else {
        let operator = op;

        let firstValue = display.textContent;
        displayarr[0] = parseFloat(firstValue);
        
        displayarr[1] = operator;
        console.log('else');
    
        console.log(displayarr);
    }
}

function addDecimal (dot) {
    if (!display.textContent.includes(dot)) {
       display.textContent += dot;
        
    } else {
        alert('ERROR: too many decimals');
        display.textContent = null;
    }
}

function cleardisplay () {
        let end = displayarr.length;
        displayarr.splice(0, end);
        return display.textContent = displayarr;
}

keys.addEventListener('click', (e) => {
    const click = e.target;

    if (click.classList.contains('value')) {
        addNum(click.value);
    
    } else if (click.classList.contains('decimal')) {
        addDecimal(click.value);
    
    } else if (click.classList.contains('operator')) {
        addOperator(click.value);
    
    } else if (click.classList.contains('equal')) {
        let secondValue = display.textContent;
        displayarr[2] = parseFloat(secondValue);
        display.textContent = calculate(displayarr);
        
        clearscreen = true;
        displayarr.splice(0, displayarr.length);

    } else if (click.classList.contains('clear')) {
        cleardisplay();
    
    } else if (click.classList.contains('delete')) {
        console.log(click.value);
    } 
});