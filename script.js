//global variables
let first;
let second;
let output;
let numbers = [0,1,2,3,4,5,6,7,8,9]
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
    let ans
    if(operater == '+') ans = add(first,second);
    else if(operater == '-') ans = sub(first,second);
    else if(operater == '*') ans = mul(first,second);
    else if(operater == '/') ans = div(first,second);

    if(!Number.isSafeInteger(ans)) return ans.toFixed(2);
    return ans;
}

function clearInputs(){
    first = undefined;
    second = undefined;
    operator = undefined;
    
}
//function to store display info
function display(){
    let buttons = document.querySelectorAll('button');
    const display = document.querySelector('.display');
    buttons = [...buttons];
    buttons.map(button => button.addEventListener('click', () => {
        if(numbers.includes(Number.parseInt(button.innerText)) ){
            display.innerText += button.innerText;
        } 
        else if(button.innerText == '+' || '-' || '*' || '/' || 'C'){
            if(button.innerText == 'C') {
                clearInputs();
                display.innerText = ''
            }
            else if(!first) { 
                first = Number.parseInt(display.innerText);
                operator = button.innerText;
                display.innerText = ''
            }else if(!second) {
                second = Number.parseInt(display.innerText);
                display.innerText = operate(first,second,operator);
                clearInputs();
            }
            
        }else if(button.innerText == '='){
            display.innerText = operate(first,second,operator);
        } 
    }))
}

display(); 