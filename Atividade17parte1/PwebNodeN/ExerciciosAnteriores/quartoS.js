const fs = require('fs');
const data = fs.readFileSync('file.txt'); //buffer
//execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());