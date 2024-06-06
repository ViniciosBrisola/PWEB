function Parte1(){
    for(var i = 1; i <= 10; i++){
        console.log('primeira parte:' + i);
    }
}

setTimeout(Parte1,2000);//atrasar função
const fs = require('fs');
fs.readFile('file.txt', (err,data) => {
    if(err) throw err;
    const registros = data.toString().split('\n');
    registros.forEach((registro, index) => {
        console.log(index + " segunda parte:" + registro);
    });
});