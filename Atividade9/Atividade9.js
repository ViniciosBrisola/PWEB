var altura = prompt("Coloque a sua altura (em metros): ");
var peso = prompt("Digite seu peso atual: ");

function calcImc(vpeso, valtura){
    var calc = parseFloat(vpeso) / parseFloat(Math.pow(valtura, 2));
    var imc = calc.toFixed(1);
    let classificacao;

    switch(true){
        case imc <= 18.5:
            classificacao = "Magreza";
        break;

        case imc > 18.5 && imc <= 24.9:
            classificacao = "Normal";
        break;

        case imc > 24.9 && imc <= 29.9:
            classificacao = "Sobrepeso";
        break;

        case imc > 29.9 && imc <= 39.9:
            classificacao = "Obesidade";
        break;

        case imc > 39.9:
            classificacao = "Obesidade Grave";
        break;

        default:
            classificacao = "Erro";
    }

    alert(imc);

    return `IMC: ${imc}\nClassificação: ${classificacao}`;
}



alert("Seu peso: " + peso + "\nSua altura: " + altura + "\n" + calcImc(peso,altura));