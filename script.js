document.addEventListener("DOMContentLoaded", () => {
    const modalTarefa = document.getElementById("modalTarefa");
    const botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa");
    const botaoFecharModal = document.getElementsByClassName("fechar")[0];
    const formularioTarefa = document.getElementById("formularioTarefa");
    const botaoExcluirTarefa = document.getElementById("botaoExcluirTarefa");

    const listaPendente = document.getElementById("pendente").querySelector(".lista-tarefas");
    const listaEmProgresso = document.getElementById("emProgresso").querySelector(".lista-tarefas");
    const listaConcluida = document.getElementById("concluida").querySelector(".lista-tarefas");

    let tarefas = [];
    let idTarefaAtual = null;

    // Abrir o modal para adicionar tarefa
    botaoAdicionarTarefa.onclick = () => {
        abrirModal();
    };

    // Fechar o modal quando o botão de fechar é clicado
    botaoFecharModal.onclick = () => {
        fecharModal();
    };

    // Fechar o modal quando clicar fora do modal
    window.onclick = (event) => {
        if (event.target == modalTarefa) {
            fecharModal();
        }
    };

    // Submeter o formulário de tarefa
    formularioTarefa.onsubmit = (event) => {
        event.preventDefault();
        
        // Validar data de vencimento
        const dataVencimento = new Date(formularioTarefa.dataVencimento.value);
        const dataAtual = new Date();
        if (dataVencimento < dataAtual) {
            alert("A data de vencimento não pode ser no passado.");
            return;
        }

        // Criar objeto de dados da tarefa
        const dadosTarefa = {
            id: idTarefaAtual || new Date().getTime(),
            titulo: formularioTarefa.titulo.value,
            descricao: formularioTarefa.descricao.value,
            prioridade: formularioTarefa.prioridade.value,
            dataVencimento: formularioTarefa.dataVencimento.value,
            responsaveis: formularioTarefa.responsaveis.value,
            status: formularioTarefa.status.value
        };

        // Atualizar ou adicionar tarefa
        if (idTarefaAtual) {
            tarefas = tarefas.map(tarefa => tarefa.id === idTarefaAtual ? dadosTarefa : tarefa);
        } else {
            tarefas.push(dadosTarefa);
        }

        // Salvar tarefas e atualizar a exibição
        salvarTarefas();
        renderizarTarefas();
        fecharModal();
    };

    // Excluir tarefa
    botaoExcluirTarefa.onclick = () => {
        if (idTarefaAtual) {
            tarefas = tarefas.filter(tarefa => tarefa.id !== idTarefaAtual);
            salvarTarefas();
            renderizarTarefas();
            fecharModal();
        }
    };

    // Abrir modal com dados da tarefa para edição
    function abrirModal(tarefa = null) {
        if (tarefa) {
            formularioTarefa.titulo.value = tarefa.titulo;
            formularioTarefa.descricao.value = tarefa.descricao;
            formularioTarefa.prioridade.value = tarefa.prioridade;
            formularioTarefa.dataVencimento.value = tarefa.dataVencimento;
            formularioTarefa.responsaveis.value = tarefa.responsaveis;
            formularioTarefa.status.value = tarefa.status;
            idTarefaAtual = tarefa.id;
        } else {
            formularioTarefa.reset();
            idTarefaAtual = null;
        }
        modalTarefa.style.display = "block";
    }

    // Fechar modal
    function fecharModal() {
        modalTarefa.style.display = "none";
    }

    // Salvar tarefas no localStorage
    function salvarTarefas() {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    // Carregar tarefas do localStorage
    function carregarTarefas() {
        const tarefasSalvas = localStorage.getItem("tarefas");
        if (tarefasSalvas) {
            tarefas = JSON.parse(tarefasSalvas);
        }
    }

    // Renderizar tarefas nas listas
    function renderizarTarefas() {
        listaPendente.innerHTML = "";
        listaEmProgresso.innerHTML = "";
        listaConcluida.innerHTML = "";

        tarefas.forEach(tarefa => {
            const elementoTarefa = document.createElement("div");
            elementoTarefa.className = `tarefa ${tarefa.prioridade.toLowerCase()}-prioridade`;
            elementoTarefa.draggable = true;
            elementoTarefa.dataset.id = tarefa.id;
            elementoTarefa.ondragstart = iniciarArrastar;
            elementoTarefa.ondragend = finalizarArrastar;

            const dataVencimento = new Date(tarefa.dataVencimento);
            const dataVencimentoFormatada = dataVencimento.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

            elementoTarefa.innerHTML = `
                <h3>${tarefa.titulo}</h3>
                <p>${tarefa.descricao}</p>
                <p>Prioridade: ${tarefa.prioridade}</p>
                <p>Data de Vencimento: ${dataVencimentoFormatada}</p>
                <p>Responsáveis: ${tarefa.responsaveis}</p>
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
            `;
            
            const botaoEditar = elementoTarefa.querySelector('.btn-edit');
            botaoEditar.addEventListener('click', () => abrirModal(tarefa));

            const botaoExcluir = elementoTarefa.querySelector('.btn-delete');
            botaoExcluir.addEventListener('click', () => deletarTarefa(tarefa.id));

            const doisDiasFuturo = new Date();
            doisDiasFuturo.setDate(doisDiasFuturo.getDate() + 2);

            if (dataVencimento < doisDiasFuturo) {
                elementoTarefa.classList.add("prazo-proximo");
            }

            switch (tarefa.status) {
                case "pendente":
                    listaPendente.appendChild(elementoTarefa);
                    break;
                case "emProgresso":
                    listaEmProgresso.appendChild(elementoTarefa);
                    break;
                case "concluida":
                    listaConcluida.appendChild(elementoTarefa);
                    break;
            }
        });
    }

    // Adicionar funcionalidades de arrastar e soltar
    function adicionarArrastar() {
        const colunas = document.querySelectorAll(".coluna");

        colunas.forEach(coluna => {
            coluna.ondragover = permitirSoltar;
            coluna.ondrop = soltar;
        });
    }

    function permitirSoltar(evento) {
        evento.preventDefault();
    }

    function iniciarArrastar(e) {
        e.dataTransfer.setData("text/plain", e.target.dataset.id);
        setTimeout(() => {
            e.target.classList.add("escondido");
        }, 0);
    }

    function finalizarArrastar(e) {
        e.target.classList.remove("escondido");
    }

    function soltar(evento) {
        evento.preventDefault();
        const id = evento.dataTransfer.getData("text/plain");
        const tarefa = tarefas.find(tarefa => tarefa.id == id);
        const status = evento.target.closest(".coluna").id;

        tarefa.status = status;
        salvarTarefas();
        renderizarTarefas();
    }

    carregarTarefas();
    renderizarTarefas();
    adicionarArrastar();
});

// Função para excluir tarefa
function deletarTarefa(idTarefa) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas = tarefas.filter(tarefa => tarefa.id !== idTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    location.reload();
}

// Função para abrir modal para edição
function abrirModalTarefa(idTarefa = null) {
    const modalTarefa = document.getElementById("modalTarefa");
    const formularioTarefa = document.getElementById("formularioTarefa");
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    if (idTarefa) {
        const tarefa = tarefas.find(tarefa => tarefa.id === idTarefa);
        document.getElementById("idTarefa").value = tarefa.id;
        document.getElementById("titulo").value = tarefa.titulo;
        document.getElementById("descricao").value = tarefa.descricao;
        document.getElementById("prioridade").value = tarefa.prioridade;
        document.getElementById("dataVencimento").value = tarefa.dataVencimento;
        document.getElementById("responsaveis").value = tarefa.responsaveis;
        document.getElementById("status").value = tarefa.status;
    } else {
        formularioTarefa.reset();
        document.getElementById("idTarefa").value = "";
    }
    modalTarefa.style.display = "block";
}
