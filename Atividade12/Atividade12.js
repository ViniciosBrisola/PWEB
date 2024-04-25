function Retangulo(base, altura){
    this.base = parseFloat(base);
    this.altura = parseFloat(altura);
    this.calcArea = function(){
        return (this.base*this.altura);
    }
}

var base = prompt("Digite o valor da base do retângulo: ");
var altura = prompt("Digite o valor da altura do retângulo: ");

var objRet = new Retangulo(base,altura);
alert(`Base: ${base}\nAltura: ${altura}\nÁrea: ${objRet.calcArea()}`)


//OUTRO CASO


class Conta{
    constructor(){
        this.nome;
        this.banco;
        this.numConta;
        this.saldo;
    }
    setNome(value){
        this.nome = value;
    }
    getNome(){
        return this.nome;
    }
    setBanco(value){
        this.banco = value;
    }
    getBanco(){
        return this.banco;
    }
    setNumConta(value){
        this.numConta = parseInt(value);
    }
    getNumConta(){
        return this.numConta;
    }
    setSaldo(value){
        this.saldo = parseFloat(value);
    }
    getSaldo(){
        return this.saldo.toFixed(2);
    }
}

class Corrente extends Conta{
    constructor(){
        super();
        this.saldoEspecial;
    }
    setSaldoEspecial(value){
        this.saldoEspecial = parseFloat(value);
    }
    getSaldoEspecial(){
        return this.saldoEspecial.toFixed(2);
    }
}

class Poupanca extends Conta{
    constructor(){
        super();
        this.juros;
        this.dataVencimento;
    }
    setJuros(value){
        this.juros = parseFloat(value);
    }
    getJuros(){
        return this.juros.toFixed(2);
    }
    setDataVencimento(value){
        var partesData = value.split('/');
        var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        var dataFormatada = data.toLocaleDateString('pt-BR');
        this.dataVencimento = dataFormatada;
    }
    getDataVencimento(){
        return this.dataVencimento;
    }
}

var objContaCorrente = new Corrente();
objContaCorrente.setNome(prompt("Digite o nome da pessoa: "));
objContaCorrente.setBanco(prompt("Digite o Banco: "));
objContaCorrente.setNumConta(prompt("Digite o número da conta: "));
objContaCorrente.setSaldo(prompt("Digite o saldo: "));
objContaCorrente.setSaldoEspecial(prompt("Digite o saldo especial: "));


alert(`Dados da Conta Corrente\n
    Nome: ${objContaCorrente.getNome()}\n
    Banco: ${objContaCorrente.getBanco()}\n
    Número da conta: ${objContaCorrente.getNumConta()}\n
    Saldo: ${objContaCorrente.getSaldo()}\n
    Saldo Especial: ${objContaCorrente.getSaldoEspecial()}`);

var objContaPoupanca = new Poupanca();
objContaPoupanca.setNome(prompt("Digite o nome da pessoa: "));
objContaPoupanca.setBanco(prompt("Digite o Banco: "));
objContaPoupanca.setNumConta(prompt("Digite o número da conta: "));
objContaPoupanca.setSaldo(prompt("Digite o saldo: "));
objContaPoupanca.setJuros(prompt("Digite a porcentagem de juros: "));
objContaPoupanca.setDataVencimento(prompt("Digite a data de Vencimento: "));

alert(`Dados da Conta Poupança\n
    Nome: ${objContaPoupanca.getNome()}\n
    Banco: ${objContaPoupanca.getBanco()}\n
    Número da conta: ${objContaPoupanca.getNumConta()}\n
    Saldo: ${objContaPoupanca.getSaldo()}\n
    Juros: ${objContaPoupanca.getJuros()}%\n
    Data de Vencimento: ${objContaPoupanca.getDataVencimento()}`);
