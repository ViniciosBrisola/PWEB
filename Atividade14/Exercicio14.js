var txt = document.getElementById('idTexto');
var transformaMaiusculo = document.getElementById('maiusculo');
var transformaMinusculo = document.getElementById('minusculo');

function transformaTextoMaiusculo() {
    var valTexto = txt.value;

    texto = valTexto.toUpperCase();
    transformaMinusculo.checked = false;

    txt.value = texto;
}

function transformaTextoMinusculo() {
    var valTexto = txt.value;
    
    texto = valTexto.toLowerCase();
    transformaMaiusculo.checked = false;
    
    
    txt.value = texto;
}

transformaMaiusculo.addEventListener('change', transformaTextoMaiusculo);
transformaMinusculo.addEventListener('change', transformaTextoMinusculo);