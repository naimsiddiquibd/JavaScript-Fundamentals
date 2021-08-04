function addTwoNumbers(number1,number2){
    console.log(number1,number2);
}
var firstNumber = 21;
var secondNumber = 43;
addTwoNumbers(firstNumber,secondNumber);

function addTwoNumbers(number1,number2){
    console.log(number1,number2);
    var total = number1+number2;
    return total;
}
var firstNumber = 21;
var secondNumber = 43;
var result = addTwoNumbers(firstNumber,secondNumber);
console.log('result value: ', result);

function multiplyTwoNumbers(num1,num2){
    var result = num1 * num2;
    return 0;
}
var total = multiplyTwoNumbers(2,5);
console.log('total after multiplication ', ,total);