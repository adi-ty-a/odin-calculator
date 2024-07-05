let n1,n2,op;


function operate(no1,no2,operator){
    if(operator === 'sum') return sum(no1,no2);
    if(operator === 'multiply') return multiply(no1,no2);
    if(operator === 'subtract') return subtract(no1,no2);
    if(operator === 'divide') return divide(no1,no2);
}

    let trigger = document.queryselector('button')
    trigger.addEventListener('click',function(){
        
    })


function sum(n1,n2){
    return n1+n2;
}
function multiply(n1,n2){
    return n1*n2;
}
function subtract(n1,n2){
    return n1-n2;
}
function divide(n1,n2){
    return n1/n2;
}

