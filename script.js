let display,n1,n2,op,pair;


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
        if( pair === true){
            result();
            op='sum'
        }
        else{
        op='sum'
        update()
    }
    }
    else if(newbutton === '-'){
        if( pair === true){
            result();
            op='subtract'
        }
        else{
            op='subtract';
        update()}
    }
    else if(newbutton === '*'){
        if( pair === true){
            result();
            op='multiply'
        }
        else{
        op='multiply';
        update()}
    }
    else if(newbutton === '/'){
        if( pair === true){
            result();
            op='divide'
        }
        else{
        op='divide';
        update()}
    }
    else if(newbutton === '='){
        result();
}
    else if(newbutton === 'AC'){
        let text = document.querySelector('.main-display')
        text.textContent = ''
        op=''
        n1=''
        n2=''
    }

    else{
        // two op after one operation the p get clear 
        if(pair == false){
            let text = document.querySelector('.main-display')
            text.textContent=''
            pair=true
        }
        let text = document.querySelector('.main-display')
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
    if(n2===0) return 'lol'
    return parseInt(n1)/parseInt(n2);
}

function result(){
    let text = document.querySelector('.main-display')
    if(pair){
        n2 = text.textContent 
        n1= operate(n1,n2,op)
        n2=''
        op=''
        text.textContent=n1
        pair=false
    }
    else{
        n1=text.textContent
    }
}

function update(){
    let text = document.querySelector('.main-display')
        n1 = text.textContent 
        text.textContent =''
        pair= true
}