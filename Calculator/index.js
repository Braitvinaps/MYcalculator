var btnPlus = document.getElementById('btnPlus');
var btnMinus = document.getElementById('btnMinus');
var btnMultiply = document.getElementById('btnMultiply');
var btnDivide = document.getElementById('btnDivide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function getNumber1() {
    return Number(input1.value);
};

function getNumber2() {
    return Number(input2.value);
};

function makeOperation(operationCode) {
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    } else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
    } else {
        window.alert('operation is unknown')
    };
    
    window.alert(result);   
}

function onClickPlus() {    
    makeOperation('+');
};

function onClickMinus() {   
    makeOperation('-');
};

function onClickMultiply() {
    makeOperation('*');
};

function onClickDivide() {    
    makeOperation('/');
};

btnPlus.addEventListener('click', onClickPlus);
btnMinus.addEventListener('click', onClickMinus);
btnMultiply.addEventListener('click', onClickMultiply);
btnDivide.addEventListener('click', onClickDivide);
