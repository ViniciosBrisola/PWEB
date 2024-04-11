var op = 0;
var idade = [];
var opiniao = [];
var sexo = [];
var soma = 0;

do{
    idade[op] = prompt("Qual sua idade?");
    sexo[op] = prompt("Qual o seu sexo?\nDigite:\n1 para Feminino\n2 para Masculino");
    opiniao[op] = prompt("Qual a sua opinião sobre o filme?\nUse a seguinte escala:\nÓtimo = 4\nBom = 3\nRegular = 2\nPéssimo = 1");
    op++;
}while(op < 3);

mediaIdade(idade);
pessoaMaisVelha(idade);
pessoaMaisNova(idade);
qtdPessimo(opiniao);
pctOtimoBom(opiniao);
numHomMul(sexo);



function mediaIdade(age){
    for(var i = 0; i < 3; i++){
        soma += parseInt(age[i]);
    }
    return alert("A média de idade é de: " + (soma/3).toFixed(0) + " anos");
}

function pessoaMaisVelha(age){
    return alert("A pessoa mais velha tinha: " + Math.max.apply(null, age) + " anos");
}

function pessoaMaisNova(age){
    return alert("A pessoa mais nova tinha: " + Math.min.apply(null, age) + " anos");
}

function qtdPessimo(op){
    var cont = 0;
    for(var i = 0; i < 3; i++){
        if(parseInt(op[i]) === 1){
            cont ++;
        }
    }
    return alert("A quatidade de votos para [Péssimo] foi de: " + cont + " votos");
}

function pctOtimoBom(op){
    var cont = 0;
    for(var i = 0; i < 3; i++){
        if(parseInt(op[i]) === 4 || parseInt(op[i]) === 3){
            cont ++;
        }
    }
    return alert("A porcentagem de votos para [Ótimo] e [Bom] foi de: " + ((cont * 100) / 3).toFixed(1) + "% votos");
}

function numHomMul(sex){
    var h = 0;
    var m = 0;
    for(var i = 0; i < 3; i++){
        if(parseInt(sex[i]) === 1){
            m++;
        }else{
            h++;
        }
    }
    return alert("A pesquisa teve:\n" + h + " homens\n" + m + " mulheres");
}