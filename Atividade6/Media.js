var nome;
var nota;
var media = 0.0;
var cont=0;

nome = prompt("Qual seu nome?");

do{
    nota = prompt("Digite a nota " + (cont+1));

    media += parseFloat(nota);

    cont++;
}while(cont<3);

media /= 3;

alert("Média das notas do aluno " + nome + " é: " + media.toFixed(2));