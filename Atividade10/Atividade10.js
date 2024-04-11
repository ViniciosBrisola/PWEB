var cont = 0;

var numeros = [];

for(var cont = 0; cont < 3; cont ++){
    numeros[cont] = prompt((cont+1) + "° número: ");
}

maiorNum(numeros);
ordemCresc(numeros);

function maiorNum (teste){
    return alert("Maior número digitado foi: " + Math.max.apply(null, teste));
}

function ordemCresc(teste){
    return alert("Números em ordem crescente: " + teste.sort((a, b) => a - b));
}

var str = prompt("Digite uma frase: ");

testaPalindromo(str);

function testaPalindromo(frase){
    var certa = frase.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    var invert = certa.split('').reverse().join('');
    return alert(certa === invert);
}

testaTriangulo(numeros);

function testaTriangulo(teste){
    var a = 0;
    var b = 1;
    var c = 2;

    if(Math.abs(teste[b] - teste[c]) < teste[a] &&
        teste[a] < (teste[b] + teste[c]) &&
        Math.abs(teste[a] - teste[c]) < teste[b] &&
        teste[b] < (teste[a] + teste[c]) &&
        Math.abs(teste[a] - teste[b]) < teste[c] &&
        teste[a] < (teste[a] + teste[b]))
    {
        return alert("É triângulo");
    }else{
        return alert("Não é triângulo")
    }
}