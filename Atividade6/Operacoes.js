var num1;
var num2;

num1 = parseFloat(prompt("Qual o primeiro número?"));
num2 = parseFloat(prompt("Qual o segundo número?"));

alert("OPERAÇÕES: \nSoma: " + num1 + " + " + num2 + " = " + (num1+num2).toFixed(2) + "\n" + 
"Subtração: " + num1 + " - " + num2 + " = " + (num1-num2).toFixed(2) + "\n" + 
"Produto: " + num1 + " * " + num2 + " = " + (num1*num2).toFixed(2) + "\n" + 
"Divisão: " + num1 + " / " + num2 + " = " + (num1/num2).toFixed(2) + "\n" + 
"Resto: " + num1 + " % " + num2 + " = " + (num1%num2).toFixed(2));