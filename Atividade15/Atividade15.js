function validar() {
    var form = document.getElementById('mainForm');
    var nome = form.nome.value;
    var email = form.email.value;
    var comentarios = form.comentarios.value;
    var visita = form.visita.value;

    if (nome.length < 10) {
        alert("Nome não pode ter menos que 10 caracteres.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email deve ter os caracteres @ e .");
        return false;
    }

    if (comentarios.length < 20) {
        alert("Comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (!visita) {
        alert("Pesquisa é obrigatória.");
        return false;
    } else {
        if (visita == "nao") {
            alert("Que bom que você voltou a visitar esta página!");
        } else {
            alert("Volte sempre à está página!");
        }
    }

    return true;
}

function limparInputs() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comentarios').value = '';
    document.getElementById('sim').checked = false;
    document.getElementById('nao').checked = false;
}