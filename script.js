let display,n1,n2,op;


function operate(no1,no2,operator){
    if(operator === 'sum') return sum(no1,no2);
    if(operator === 'multiply') return multiply(no1,no2);
    if(operator === 'subtract') return subtract(no1,no2);
    if(operator === 'divide') return divide(no1,no2);
}

let press = document.querySelectorAll('button')
press.forEach((press)=>
press.addEventListener('click',function(){
    if(press.textContent == '+'){
        op='sum';
        let text = document.querySelector('.main-display')
        n1 = text.textContent 
        text.textContent = ''
    }
    if(press.textContent == '-'){
        op='subtract';
        let text = document.querySelector('.main-display')
        n1 = text.textContent 
        text.textContent = ''
    }
    if(press.textContent == '*'){
        op='multiply';
        let text = document.querySelector('.main-display')
        n1 = text.textContent 
        text.textContent = ''
    }
    if(press.textContent == '/'){
        op='divide';
        let text = document.querySelector('.main-display')
        n1 = text.textContent 
        text.textContent = ''
    }
    if(press.textContent == '='){
        let text = document.querySelector('.main-display')
        n2 = text.textContent 
        text.textContent = operate(n1,n2,op)

    }
    else{let text = document.querySelector('.main-display')
    text.textContent = this.textContent;}
}))



function sum(n1,n2){
    return parseInt(n1)+parseInt(n2);
}
function multiply(n1,n2){
    return parseInt(n1)*parseInt(n2);
}
function subtract(n1,n2){
    return parseInt(n1)-parseInt(n2);
}
function divide(n1,n2){
    return parseInt(n1)/parseInt(n2);
}

