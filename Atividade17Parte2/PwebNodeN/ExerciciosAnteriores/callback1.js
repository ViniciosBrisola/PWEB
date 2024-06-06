const prompt = require('prompt-sync')();
function saudacao(nome){
    console.log(' OI ' + nome);
}

function entradaNome(callback){
    var nome = prompt('Digite seu nome:');
    callback(nome); //chama a função callback (saudacao)
}

entradaNome(saudacao);