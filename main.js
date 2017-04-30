var x; /*Оголошення зміної*/

x= 5 ;

var y = 10; /*Оголошення тф ініціалізація*/

var resultAdd=x+y;

var resultSub=x-y;

var resultMult=x*y;

var resultDiv=x/y;
console.log('Додавання:', resultAdd);
console.log('Віднімання:', resultSub);
console.log('Множення:', resultMult);
console.log('Ділення:', resultDiv);

var firstNumber = Number(prompt('Enter first number'));
var secondNumber = Number(prompt('Enter second number'));

console.log(firstNumber);
console.log(secondNumber);

var Add = firstNumber + secondNumber;
var Sub = firstNumber - secondNumber;
var Mult = firstNumber * secondNumber;
var Div = firstNumber / secondNumber;
var Mod = firstNumber % secondNumber;
var Inc = ++firstNumber;
var Dec = --secondNumber;

console.log('Додавання: ', Add);
console.log('Віднімання: ', Sub);
console.log('Множення: ', Mult);
console.log('Ділення: ', Div);
console.log('Остача: ', Mod);
console.log('+1: ', Inc);
console.log('-1: ', Dec);


var txt1 = 'My first text ';
var txt2 = 'My second text ';


document.write(txt1+ '<br>' +txt2);



var usertxt = prompt('Your text');
document.write(usertxt);
