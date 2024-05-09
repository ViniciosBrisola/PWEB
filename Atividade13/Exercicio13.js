function abrirJanela() {
    document.getElementById('janela').src = "janelaaberta.png";
    document.getElementById('situacao').innerText = "Janela Aberta";
}
  
function fecharJanela() {
    document.getElementById('janela').src = "janelafechada.png";
    document.getElementById('situacao').innerText = "Janela Fechada";
}
  
function quebrarJanela() {
    document.getElementById('janela').src = "janelaquebra.png";
    document.getElementById('situacao').innerText = "Janela Quebrada";
}
  
document.getElementById('janela').addEventListener('mouseover', abrirJanela);
document.getElementById('janela').addEventListener('mouseout', fecharJanela);
document.getElementById('janela').addEventListener('click', quebrarJanela);  