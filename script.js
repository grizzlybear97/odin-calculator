//global variables
let firstValue;
let secondValue;
let output;

//math functions
add = (a,b) => a+b;
sub = (a,b) => a-b;
mul = (a,b) => a*b;
div = (a,b) => a/b;

//initial variables
let firstNum;
let secondNum;
let operator;

//main 
function operate(first,second,operater) {
    if(operater == '+') return add(first,second);
    else if(operater == '-') return sub(first,second);
    else if(operater == '*') return mul(first,second);
    else if(operater == '/') return div(first,second);

}
console.log(operate(5,6,'*'))

//function to store display info
function display(){
    let buttons = document.querySelectorAll('button');
    const display = document.querySelector('.display');
    buttons = [...buttons];
    buttons.map(button => button.addEventListener('click', () => {
        if(button.innerText == 'C') {
            console.log('clear pressed');
            display.innerText = ''
        }else display.innerText += button.innerText;
    }))
}

display();