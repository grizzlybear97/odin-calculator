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
    
}
