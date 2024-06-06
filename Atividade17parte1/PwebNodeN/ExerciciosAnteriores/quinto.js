var eventos = require('events');

//atribuição da classe EventEmitter a uma variável
var EmissorEventos = eventos.EventEmitter;

//criação de uma instância do EventEmitter variável:
var ee = new EmissorEventos();

ee.on('dados', function(fecha){
    console.log(fecha);
});

//emissão do evento a cada 500 milissegundos:
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);