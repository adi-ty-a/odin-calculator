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
    let newbutton = press.textContent
    if(newbutton === '+'){
        op='sum';
        update()
    }
    else if(newbutton === '-'){
        op='subtract';
        update()
    }
    else if(newbutton === '*'){
        op='multiply';
        update()
    }
    else if(newbutton === '/'){
        op='divide';
        update()
    }
    else if(newbutton === '='){
        result();
    }
    else if(newbutton === 'AC'){
        let text = document.querySelector('.main-display')
        text.textContent = ''
    }

    else{let text = document.querySelector('.main-display')
    text.textContent += this.textContent;}
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

function result(){
    let text = document.querySelector('.main-display')
        n2 = text.textContent 
        text.textContent = operate(n1,n2,op)
}
function update(){
    let text = document.querySelector('.main-display')
        n1 = text.textContent 
        text.textContent = ''
}