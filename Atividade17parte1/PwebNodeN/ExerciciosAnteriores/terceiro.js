var soma = 0;
for(var i = 2; i <=process.argv.length-1; i++) //começa de 2 pq o 0 é node, 1 é nome do arquivo e o resto é parametro(executando no cmd) => node terceiro.js 1 2 3
soma=soma+Number(process.argv[i]);
console.log('soma='+soma);

//node terceiro.js 1 2 3, deve retornar soma=6